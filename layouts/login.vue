<template>
  <v-app id="app">
    <!-- Barra de aplicación -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      dark
      color="primary"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="ml-4">
        {{ title }}
      </v-toolbar-title>
    </v-app-bar>

    <!-- Contenido principal -->
    <v-main>
      <v-container fluid>
        <ui-alert
          v-if="showAlert"
          :message="mensaje"
          :color="color"
          :type="type"
          style="z-index: 10!important; top: -60px!important"
        />
        <Nuxt />
      </v-container>
    </v-main>

    <!-- Pie de página -->
    <v-footer app dark color="primary">
      <v-row align="center" justify="center">
        <v-col>
          <span>&copy; {{ new Date().getFullYear() }} Mi Aplicación</span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      title: 'Login.vue',
      showAlert: false,
      mensaje: '',
      color: '',
      type: ''
    }
  },
  created () {
    this.$nuxt.$on('evento', (data) => {
      console.log('🚀 ~ this.$nuxt.$on ~ evento:', data)
      this.mensaje = data.message
      this.color = data.color
      this.type = data.type
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, data.time || 4000)
    })
  }
}
</script>

<style scoped>
/* Estilos específicos del layout */
#app {
  min-height: 100vh;
}

/* Ajustes de la barra de aplicación */
.v-toolbar__title {
  font-size: 24px;
}

/* Ajustes del pie de página */
.v-footer {
  padding: 10px;
}
</style>
