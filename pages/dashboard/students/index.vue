<template>
  <v-col cols="12">
    <!-- Botón para agregar un nuevo usuario -->
    <v-row>
      <button @click="logout">
        Logout
      </button>
      <v-btn block color="green" @click="showNuevoEstudiante = true">
        <span class="white--text">Usuario Nuevo</span>
      </v-btn>
    </v-row>

    <!-- Tabla de usuarios -->
    <v-row class="mt-4">
      <v-data-table
        :headers="headers"
        :items="students"
        elevation="0"
        style="width: 100%!important;"
      >
        <!-- Acciones CRUD -->
        <template #[`item.acciones`]="{ item }">
          <v-row>
            <v-col cols="6">
              <v-btn icon color="red" @click="borrarUsuario(item.id)">
                <v-icon>mdi-account-minus</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn icon color="warning" @click="actualizarUsuario(item.id)">
                <v-icon>mdi-account-edit</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </template>
      </v-data-table>
    </v-row>

    <!-- Diálogo de confirmación de eliminación -->
    <v-dialog v-model="showDelete" width="400" persistent>
      <v-card>
        <v-card-title class="headline font-weight-bold">
          Confirmar Eliminación
        </v-card-title>
        <v-card-text class="subtitle-1">
          ¿Estás seguro de que deseas eliminar este usuario?
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col cols="6">
              <v-btn block color="red" @click="borrar">
                <span class="white--text">Eliminar</span>
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn block color="green" @click="showDelete = false">
                <span class="white--text">Cancelar</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Diálogo para registrar un nuevo usuario -->
    <v-dialog v-model="showNuevoEstudiante" width="400" persistent>
      <v-card>
        <v-card-title class="headline font-weight-bold grey--text text--darken-1">
          Registrar Estudiante
        </v-card-title>
        <v-card-text>
          <v-form ref="formNuevoEstudiante" v-model="validFormNuevoEstudiante">
            <!-- Campo de nombre completo -->
            <v-text-field
              v-model="fullNameNuevoEstudiante"
              label="Nombre Completo"
              placeholder="Escribe tu nombre completo"
              outlined
              :rules="[v => !!v || 'El nombre es requerido']"
            />
            <!-- Campo de correo electrónico -->
            <v-text-field
              v-model="emailNuevoEstudiante"
              label="Email"
              placeholder="Escribe tu correo"
              type="email"
              :rules="correo"
              outlined
            />
            <!-- Campo de contraseña -->
            <v-text-field
              v-model="passwordNuevoEstudiante"
              label="Password"
              placeholder="Escribe tu contraseña"
              type="password"
              :rules="password"
              outlined
            />
            <!-- Campo de nombre de clase -->
            <v-text-field
              v-model="classNameNuevoEstudiante"
              label="Nombre de Clase"
              placeholder="Escribe el nombre de la clase"
              outlined
              :rules="[v => !!v || 'El nombre de la clase es requerido']"
            />
            <!-- Campo de género -->
            <v-select
              v-model="genderNuevoEstudiante"
              :items="['Masculino', 'Femenino', 'Otro']"
              label="Género"
              outlined
              :rules="[v => !!v || 'El género es requerido']"
            />
            <!-- Campo de número de teléfono -->
            <v-text-field
              v-model="phoneNumberNuevoEstudiante"
              label="Teléfono"
              placeholder="Escribe tu teléfono"
              outlined
              :rules="[v => !!v || 'El teléfono es requerido']"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col cols="6">
              <!-- Botón para agregar estudiante -->
              <v-btn block color="primary" @click="agregarEstudiante">
                <span class="white--text">Agregar</span>
              </v-btn>
            </v-col>
            <v-col cols="6">
              <!-- Botón para cancelar el registro -->
              <v-btn block color="red" @click="showNuevoEstudiante = false">
                <span class="white--text">Cancelar</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
export default {
  layout: 'dashboard',
  data () {
    return {
      headers: [
        { text: 'Nombre Completo', align: 'center', sortable: true, value: 'fullName' },
        { text: 'Correo electrónico', align: 'center', sortable: true, value: 'email' },
        { text: 'Clase', align: 'center', sortable: true, value: 'className' },
        { text: 'Género', align: 'center', sortable: true, value: 'gender' },
        { text: 'Teléfono', align: 'center', sortable: true, value: 'phoneNumber' },
        { text: 'Acciones', align: 'center', sortable: false, value: 'acciones' }
      ],
      students: [],
      token: null,
      // agregar
      showNuevoEstudiante: false,
      validFormNuevoEstudiante: false,
      fullNameNuevoEstudiante: '',
      emailNuevoEstudiante: '',
      passwordNuevoEstudiante: '',
      classNameNuevoEstudiante: '',
      genderNuevoEstudiante: '',
      phoneNumberNuevoEstudiante: '',
      correo: [v => !!v || 'El correo es requerido', v => /.+@.+\..+/.test(v) || 'Correo debe ser válido'],
      password: [v => !!v || 'La contraseña es requerida'],
      // borrar
      showDelete: false
    }
  },
  mounted () {
    this.token = localStorage.getItem('token')
    console.log('🚀 ~ mounted ~ token:', this.token)
    if (!this.token) {
      this.$router.push('/')
    }
    this.getAllStudents()
  },
  methods: {
    logout () {
    // Eliminar el token del localStorage
      localStorage.removeItem('token')
      // Redirigir al usuario a la página de inicio
      this.$router.push('/')
    },
    getAllStudents () {
    // Realiza la solicitud al backend para obtener todos los estudiantes
      const url = '/students/getAllStudents'
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      this.$axios.get(url, config)
        .then((res) => {
          console.log('@@ res => ', res)
          // Verifica si la solicitud fue exitosa y si los datos se recibieron correctamente
          if (res.data.message === 'Success') {
          // Asigna los estudiantes recibidos a la variable 'students' para mostrarlos en la tabla
            this.students = res.data.students
          } else if (res.data.message === 'Invalid Token') {
            this.$router.push('/') // Redirige a la página de inicio si el token es inválido
          }
        })
        .catch((err) => {
        // Muestra un mensaje de error si ocurre algún error durante la solicitud
          console.error('Error al obtener estudiantes:', err)
          this.$router.push('/') // Redirige a la página de inicio si hay algún error
        })
    },
    agregarEstudiante () {
      this.validFormNuevoEstudiante = this.$refs.formNuevoEstudiante.validate()
      if (this.validFormNuevoEstudiante) {
        const sendData = {
          fullName: this.fullNameNuevoEstudiante,
          email: this.emailNuevoEstudiante,
          className: this.classNameNuevoEstudiante,
          gender: this.genderNuevoEstudiante,
          password: this.passwordNuevoEstudiante,
          phoneNumber: this.phoneNumberNuevoEstudiante
        }
        console.log('🚀 ~ agregarEstudiante ~ sendData:', sendData)
        const url = '/students/addStudent'
        const config = { headers: { Authorization: `Bearer ${this.token}` } }
        this.$axios.post(url, sendData, config)
          .then((res) => {
            console.log('@@ res => ', res)
            if (res.data.message === 'Student added successfully') {
              this.$nuxt.$emit('evento', {
                message: res.data.message,
                color: 'green',
                type: 'success',
                time: 2000
              })
              this.getAllStudents()
              this.showNuevoEstudiante = false
            }
          })
          .catch((err) => {
            console.error('Error al registrar estudiante:', err)
          })
      } else {
        alert('Faltan Datos')
      }
    },
    borrarUsuario (id) {
      this.idToDelete = id
      this.showDelete = true
    },
    borrar () {
      const url = `/students/deleteStudent/${this.idToDelete}`
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      this.$axios.delete(url, config)
        .then((res) => {
          console.log('@@ res => ', res)
          if (res.data.message === 'Student deleted successfully') {
            this.$nuxt.$emit('evento', {
              message: res.data.message,
              color: 'red',
              type: 'error'
            })
            this.getAllStudents()
            this.showDelete = false
          }
        })
        .catch((err) => {
          console.log('@@@ err => ', err)
        })
    }
  }
}
</script>
