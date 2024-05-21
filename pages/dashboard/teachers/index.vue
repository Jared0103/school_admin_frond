<template>
  <v-col cols="12">
    <v-row>
      <v-btn block color="green" @click="showNuevo = true">
        <span class="white--text">Usuario Nuevo</span>
      </v-btn>
    </v-row>

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
      teachers: [], // Cambiar usuarios a teachers
      showDelete: false,
      idToDelete: null,
      validForm: false,
      email: null,
      passwordUser: null,
      password: [
        v => (v && v.length > 5) || 'La contraseña debe tener más de 6 caracteres'
      ],
      correo: [
        v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido'
      ],
      showUpdate: false,
      userToUpdate: {},
      validFormUpdate: false,
      showNuevo: false,
      validFormNuevo: false
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
          console.log('🚀 ~ getAllUsers ~ err:', err)
          this.$axios.push('/')
        })
    },
    borrarUsuario (id) {
      this.idToDelete = id
      this.showDelete = true
    },
    borar () {
      const url = `/delete-user/${this.idToDelete}`
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      this.$axios.delete(url, config)
        .then((res) => {
          console.log('@@ res => ', res)
          if (res.data.message === 'User deleted successfully') {
            this.$nuxt.$emit('evento', {
              message: res.data.message,
              color: 'red',
              type: 'error'
            })
            this.getAllUsers()
            this.showDelete = false
          }
        })
        .catch((err) => {
          console.log('@@@ err => ', err)
        })
    },
    agregar () {
      this.validFormNuevo = this.$refs.formNuevo.validate()
      if (this.validFormNuevo) {
        const sendData = {
          fullName: `${this.nombreNuevo} ${this.apellidoPaternoNuevo} ${this.apellidoMaternoNuevo}`,
          email: this.emailNuevo,
          className: this.classNameNuevo,
          gender: this.genderNuevo,
          password: this.passwordUserNuevo,
          phoneNumber: this.telefonoNuevo,
          subject: this.subjectNuevo
        }
        console.log('@@@ data =>', sendData)
        const url = '/signup'
        this.$axios.post(url, sendData)
          .then((res) => {
            console.log('@@ res => ', res)
            if (res.data.message === 'Usuario registrado satisfactoriamente') {
              this.$nuxt.$emit('evento', {
                message: res.data.message,
                color: 'green',
                type: 'success',
                time: 2000
              })
              this.getAllUsers()
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
    actualizarUsuario (id) {
      this.userToUpdate = this.teachers.find(teacher => teacher.id === id)
      this.showUpdate = true
    },
    modificar () {
      this.validFormUpdate = this.$refs.formUpdate.validate()
      if (this.validFormUpdate) {
        const sendData = {
          id: this.userToUpdate.id,
          email: this.userToUpdate.email,
          password: this.userToUpdate.password,
          nombre: this.userToUpdate.nombre,
          apellidoPaterno: this.userToUpdate.apellidoPaterno,
          apellidoMaterno: this.userToUpdate.apellidoMaterno,
          telefono: this.userToUpdate.telefono,
          direccion: this.userToUpdate.direccion,
          cPostal: this.userToUpdate.cp,
          estado: this.userToUpdate.estado
        }
        console.log('🚀 ~ modificar ~ sendData:', sendData)
        this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token}`
        const url = `/update-user/${sendData.id}`
        this.$axios.put(url, sendData)
          .then((res) => {
            console.log('@@ res => ', res)
            if (res.data.message === 'User update successfully') {
              this.$nuxt.$emit('evento', {
                message: res.data.message,
                color: 'warning',
                type: 'success',
                time: 3000
              })
              this.getAllUsers()
              this.showUpdate = false
            }
          })
          .catch((err) => {
            console.log('🚀 ~ modificar ~ err: ', err)
          })
      } else {
        alert('Faltan Datos')
      }
    }
  }
}
</script>
