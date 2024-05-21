<template>
  <v-col cols="12">
    <!-- Botón para agregar un nuevo usuario -->
    <v-row>
      <v-btn block color="green" @click="showNuevo = true">
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
    <v-dialog v-model="showNuevo" width="400" persistent>
      <v-card>
        <!-- Formulario para agregar nuevo usuario -->
        <!-- ... Código del formulario omitido por brevedad ... -->
      </v-card>
    </v-dialog>

    <!-- Diálogo para editar un usuario -->
    <v-dialog v-model="showUpdate" width="400" persistent>
      <v-card>
        <!-- Formulario para editar usuario -->
        <!-- ... Código del formulario omitido por brevedad ... -->
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
      showDelete: false,
      idToDelete: null
      // Otros datos del formulario omitidos por brevedad...
    }
  },
  mounted () {
    this.token = localStorage.getItem('token')
    console.log('🚀 ~ mounted ~ token:', this.token)
    if (!this.token) {
      this.$router.push('/')
    }
    this.getAllUsers()
  },
  methods: {
    getAllUsers () {
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
    }

    // Métodos para borrar, agregar, actualizar usuarios, etc. omitidos por brevedad...
  }
}
</script>
