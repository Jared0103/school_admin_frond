<template>
  <v-app id="app">
    <!-- Barra de navegación lateral -->
    <v-navigation-drawer
      permanent
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="custom-background"
      dark
    >
      <!-- Imagen en la parte superior del sidebar -->
      <v-list-item class="justify-center logo-container">
        <v-img src="/sideBar/Ellipse 6.png" alt="Ellipse" class="ellipse-image" />
        <v-list-item-content>
          <v-list-item-title class="white--text text-center">
            Udemy Inter. school
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

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
            <v-img :src="item.img" alt="icon" class="sidebar-icon" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Espacio adicional antes de "Features" -->
        <v-list-item class="mt-4" />
        <v-list-item to="/dashboard/features" class="feature-item">
          <v-list-item-action>
            <v-img src="/sideBar/Billing.png" alt="icon" class="sidebar-icon" />
          </v-list-item-action>
          <v-list-item-content class="feature-content">
            <v-list-item-title class="white--text">
              Features
            </v-list-item-title>
            <span class="new-badge">NEW</span>
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
      miniVariant: false,
      title: 'CRUD con Firebase y Nuxt.js',
      showAlert: false,
      mensaje: '',
      color: '',
      type: '',
      items: [
        {
          img: '/sideBar/home-2.png',
          title: 'Dashboard',
          to: '/dashboard'
        },
        {
          img: '/sideBar/home-2.png',
          title: 'Teachers',
          to: '/dashboard/teachers'
        },
        {
          img: '/sideBar/school.png',
          title: 'Students/ classes',
          to: '/dashboard/students'
        },
        {
          img: '/sideBar/Billing.png',
          title: 'Billing',
          to: '/dashboard'
        },
        {
          img: '/sideBar/Settings.png',
          title: 'Setting and Profile',
          to: '/dashboard'
        },
        {
          img: '/sideBar/Exams.png',
          title: 'Exams',
          to: '/dashboard'
        }
      ]
    }
  },
  created () {
    this.$nuxt.$on('evento', (data) => {
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

.custom-background {
  background: #152259 !important;
}

.sidebar-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.ellipse-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.logo-container {
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
}

.new-badge {
  background-color: #add8e6;
  color: #00008b;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10%;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
}

.feature-item {
  margin-top: 20px;
}

.feature-content {
  display: flex;
  align-items: center;
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
