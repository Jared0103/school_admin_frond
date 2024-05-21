<template>
  <v-col cols="12">
    <button @click="logout">
      Logout
    </button>
    <v-btn
      color="green"
      class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      @click="showNuevo = true"
    >
      Usuario Nuevo
    </v-btn>

    <v-row class="mt-4">
      <v-data-table
        :headers="headers"
        :items="teachers"
        elevation="0"
        style="width: 100%!important;"
      >
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
      <v-dialog v-model="showNuevo" width="400" persistent>
        <v-card>
          <v-card-title class="headline font-weight-bold grey--text text--darken-1">
            Registrar Usuario
          </v-card-title>
          <v-card-text>
            <v-form ref="formNuevo" v-model="validFormNuevo">
              <!-- Campo de nombre completo -->
              <v-text-field
                v-model="fullNameNuevo"
                label="Nombre Completo"
                placeholder="Escribe tu nombre completo"
                outlined
              />
              <!-- Campo de correo electrónico -->
              <v-text-field
                v-model="emailNuevo"
                label="Email"
                placeholder="Escribe tu correo"
                type="email"
                :rules="correo"
                outlined
              />
              <!-- Campo de contraseña -->
              <v-text-field
                v-model="passwordUserNuevo"
                label="Password"
                placeholder="Escribe tu contraseña"
                type="password"
                :rules="password"
                outlined
              />
              <!-- Campo de nombre de clase -->
              <v-text-field
                v-model="classNameNuevo"
                label="Nombre de Clase"
                placeholder="Escribe el nombre de la clase"
                outlined
              />
              <!-- Campo de género -->
              <v-select
                v-model="genderNuevo"
                :items="['Masculino', 'Femenino', 'Otro']"
                label="Género"
                outlined
              />
              <!-- Campo de número de teléfono -->
              <v-text-field
                v-model="phoneNumberNuevo"
                label="Teléfono"
                placeholder="Escribe tu teléfono"
                outlined
              />
              <!-- Campo de asignatura -->
              <v-text-field
                v-model="subjectNuevo"
                label="Materia"
                placeholder="Escribe la materia"
                outlined
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="6">
                <!-- Botón para agregar usuario -->
                <v-btn block color="primary" @click="agregar">
                  <span class="white--text">Agregar</span>
                </v-btn>
              </v-col>
              <v-col cols="6">
                <!-- Botón para cancelar el registro -->
                <v-btn block color="red" @click="showNuevo = false">
                  <span class="white--text">Cancelar</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-col>
</template>

<script>
export default {
  layout: 'dashboard',
  data () {
    return {
      headers: [
        { text: 'ID', align: 'center', sortable: true, value: 'id' },
        { text: 'Correo electrónico', align: 'center', sortable: true, value: 'email' },
        { text: 'Nombre completo', align: 'center', sortable: true, value: 'fullName' },
        { text: 'Clase', align: 'center', sortable: true, value: 'className' },
        { text: 'Género', align: 'center', sortable: true, value: 'gender' },
        { text: 'Teléfono', align: 'center', sortable: true, value: 'phoneNumber' },
        { text: 'Materia', align: 'center', sortable: true, value: 'subject' },
        { text: 'Acciones', align: 'center', sortable: false, value: 'acciones' }
      ],
      token: null,
      teachers: [],
      password: [
        v => (v && v.length > 5) || 'La contraseña debe tener más de 6 caracteres'
      ],
      correo: [
        v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido'
      ],

      // Agregar
      showNuevo: false,
      validFormNuevo: false,
      fullNameNuevo: '',
      emailNuevo: null,
      passwordUserNuevo: '',
      classNameNuevo: '',
      genderNuevo: '',
      phoneNumberNuevo: '',
      subjectNuevo: '',
      // Delete
      showDelete: false
    }
  },
  mounted () {
    this.token = localStorage.getItem('token')
    console.log('🚀 ~ mounted ~ token:', this.token)
    if (!this.token) {
      this.$router.push('/')
    }
    this.getAllTeachers()
  },
  methods: {
    logout () {
      // Eliminar el token del localStorage
      localStorage.removeItem('token')
      // Redirigir al usuario a la página de inicio
      this.$router.push('/')
    },
    getAllTeachers () {
      const url = '/teachers/getAllTeachers'
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      this.$axios.get(url, config)
        .then((res) => {
          console.log('🚀 ~ .then ~ res:', res)
          if (res.data.message === 'Success') {
            this.teachers = res.data.teachers
            console.log('🚀 ~ .then ~ teachers:', res.data)
          } else if (res.data.message === 'Invalid Token') {
            this.$axios.push('/')
          }
        })
        .catch((err) => {
          console.log('🚀 ~ getAllTeachers ~ err:', err)
          this.$axios.push('/')
        })
    },
    agregar () {
      this.validFormNuevo = this.$refs.formNuevo.validate()
      if (this.validFormNuevo) {
        const sendData = {
          fullName: this.fullNameNuevo,
          email: this.emailNuevo,
          className: this.classNameNuevo,
          gender: this.genderNuevo,
          password: this.passwordUserNuevo,
          phoneNumber: this.phoneNumberNuevo,
          subject: this.subjectNuevo
        }
        console.log('🚀 ~ agregar ~ sendData:', sendData)
        const url = '/teachers/addTeacher'
        const config = { headers: { Authorization: `Bearer ${this.token}` } }
        this.$axios.post(url, sendData, config)
          .then((res) => {
            console.log('@@ res => ', res)
            if (res.data.message === 'Teacher added successfully') {
              this.$nuxt.$emit('evento', {
                message: res.data.message,
                color: 'green',
                type: 'success',
                time: 2000
              })
              this.getAllTeachers()
              this.showNuevo = false
            }
          })
          .catch((err) => {
            console.log('🚀 ~ agregar ~ err: ', err)
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
      const url = `/teachers/deleteTeacher/${this.idToDelete}`
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      this.$axios.delete(url, config)
        .then((res) => {
          console.log('@@ res => ', res)
          if (res.data.message === 'Teacher deleted successfully') {
            this.$nuxt.$emit('evento', {
              message: res.data.message,
              color: 'red',
              type: 'error'
            })
            this.getAllTeachers()
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
