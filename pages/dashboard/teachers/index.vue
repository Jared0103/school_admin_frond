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
        :items="usuarios"
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
              <v-btn block color="red" @click="borar">
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
        <v-card-title class="headline font-weight-bold grey--text text--darken-1">
          Registrar Usuario
        </v-card-title>
        <v-card-text>
          <v-form ref="formNuevo" v-model="validFormNuevo">
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
            <!-- Agregar campos adicionales -->
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="nombreNuevo" label="Nombre" placeholder="Escribe tu nombre" outlined />
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="apellidoPaternoNuevo" label="Apellido Paterno" placeholder="Escribe tu apellido paterno" outlined />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="apellidoMaternoNuevo" label="Apellido Materno" placeholder="Escribe tu apellido materno" outlined />
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="telefonoNuevo" label="Teléfono" placeholder="Escribe tu teléfono" outlined />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="direccionNuevo" label="Dirección" placeholder="Escribe tu dirección" outlined />
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="cpNuevo" label="Código Postal" placeholder="Escribe tu Código Postal" outlined />
              </v-col>
            </v-row>
            <v-select v-model="estadoNuevo" :items="estadosMexico" label="Estado" outlined />
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

    <!-- Diálogo para editar un usuario -->
    <v-dialog v-model="showUpdate" width="400" persistent>
      <v-card>
        <v-card-title class="headline font-weight-bold grey--text text--darken-1">
          Modificar Usuario
        </v-card-title>
        <v-card-text>
          <v-form ref="formUpdate" v-model="validFormUpdate">
            <!-- Campo de correo electrónico -->
            <v-text-field
              v-model="userToUpdate.email"
              label="Correo electrónico"
              placeholder="Escribe tu correo"
              type="email"
              :rules="correo"
              outlined
            />
            <!-- Campo de contraseña -->
            <v-text-field
              v-model="userToUpdate.password"
              label="Contraseña"
              placeholder="Escribe tu contraseña"
              type="password"
              :rules="password"
              outlined
            />
            <!-- Agregar campos adicionales -->
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="userToUpdate.nombre" label="Nombre" placeholder="Escribe tu nombre" outlined />
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="userToUpdate.apellidoPaterno" label="Apellido Paterno" placeholder="Escribe tu apellido paterno" outlined />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="userToUpdate.apellidoMaterno" label="Apellido Materno" placeholder="Escribe tu apellido materno" outlined />
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="userToUpdate.telefono" label="Teléfono" placeholder="Escribe tu teléfono" outlined />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="userToUpdate.direccion" label="Dirección" placeholder="Escribe tu dirección" outlined />
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="userToUpdate.cp" label="Código Postal" placeholder="Escribe tu Código Postal" outlined />
              </v-col>
            </v-row>
            <v-select v-model="userToUpdate.estado" :items="estadosMexico" label="Estado" outlined />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col cols="6">
              <v-btn block color="primary" @click="modificar">
                <span class="white--text">Modificar</span>
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn block color="red" @click="showUpdate = false">
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
import { v4 as uuidv4 } from 'uuid'
export default {
  layout: 'dashboard',
  data () {
    return {
      // Estados de Mex
      estadosMexico: [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Ciudad de México',
        'Coahuila',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'México',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas'
      ],
      headers: [
        { text: 'ID', align: 'center', sortable: true, value: 'id' },
        { text: 'Correo electrónico', align: 'center', sortable: true, value: 'email' },
        // Agrega las nuevas columnas a la tabla
        { text: 'Nombre', align: 'center', sortable: true, value: 'nombre' },
        { text: 'Apellido Paterno', align: 'center', sortable: true, value: 'apellidoPaterno' },
        { text: 'Apellido Materno', align: 'center', sortable: true, value: 'apellidoMaterno' },
        { text: 'Teléfono', align: 'center', sortable: true, value: 'telefono' },
        { text: 'Dirección', align: 'center', sortable: true, value: 'direccion' },
        { text: 'Código Postal', align: 'center', sortable: true, value: 'cPostal' },
        { text: 'Estado', align: 'center', sortable: true, value: 'estado' },
        { text: 'Acciones', align: 'center', sortable: false, value: 'acciones' }
      ],
      token: null,
      usuarios: [],
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
      // agregar usuario
      showNuevo: false,
      validFormNuevo: false,
      emailNuevo: null,
      passwordUserNuevo: null,
      nombreNuevo: null,
      apellidoPaternoNuevo: null,
      apellidoMaternoNuevo: null,
      telefonoNuevo: null,
      direccionNuevo: null,
      cpNuevo: null,
      estadoNuevo: null

    }
  },
  mounted () {
    this.token = localStorage.getItem('token')
    if (!this.token) {
      this.$router.push('/')
    }
    this.getAllUsers()
  },
  methods: {
    getAllUsers () {
      const url = '/get-allusers'
      const config = { headers: { Authorization: `Bearer ${this.token}` } }
      this.$axios.get(url, config)
        .then((res) => {
          console.log('@@ res => ', res)
          if (res.data.message === 'Success') {
            this.usuarios = res.data.users
          } else if (res.data.message === 'Invalid Token') {
            this.$axios.push('/')
          }
        })
        .catch((err) => {
          this.$axios.push('/')
          console.log('@@@ err => ', err)
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
          id: uuidv4(),
          email: this.emailNuevo,
          password: this.passwordUserNuevo,
          nombre: this.nombreNuevo,
          apellidoPaterno: this.apellidoPaternoNuevo,
          apellidoMaterno: this.apellidoMaternoNuevo,
          telefono: this.telefonoNuevo,
          direccion: this.direccionNuevo,
          cPostal: this.cpNuevo,
          estado: this.estadoNuevo
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
      this.userToUpdate = this.usuarios.find(user => user.id === id)
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
