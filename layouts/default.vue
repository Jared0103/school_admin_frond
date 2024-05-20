<template>
  <v-app id="app">
    <!-- Barra de navegación lateral -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <!-- Elementos de navegación -->
      <v-divider />
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Barra de aplicación -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="text-uppercase">
        {{ title }}
      </v-toolbar-title>
    </v-app-bar>

    <!-- Contenido principal -->
    <v-main>
      <ui-alert
        v-if="showAlert"
        :message="mensaje"
        :color="color"
        :type="type"
        style="z-index: 10!important; top: -60px!important"
      />
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- Pie de página -->
    <v-footer app>
      <v-row align="center">
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
      items: [
        {
          icon: 'mdi-account',
          title: 'Usuarios',
          to: '/principal/usuarios'
        }
      ],
      miniVariant: false,
      title: 'CRUD con Firebase y Nuxt.js',
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

/* Ajustes de la barra de navegación */
.v-navigation-drawer .v-list-item__icon {
  margin-right: 0.5rem;
}

.v-navigation-drawer .v-list-item__title {
  font-size: 14px;
}

/* Ajustes de la barra de aplicación */
.v-toolbar__title {
  font-size: 18px;
}

/* Ajustes del pie de página */
.v-footer {
  padding: 10px;
  background-color: #424242;
  color: white;
}
</style>
