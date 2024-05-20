<template>
  <div>
    <LoginUser v-if="showLogin" @loginEvent="handleLoginEvent" />
  </div>
</template>

<script>
import LoginUser from '~/components/users/LoginUser.vue'

export default {
  name: 'IndexPage',
  components: {
    LoginUser
  },
  data () {
    return {
      showLogin: true
    }
  },
  methods: {
    handleLoginEvent (data) {
      // Manejar evento de inicio de sesión
      console.log('Evento de inicio de sesión:', data)
    }
  }
}
</script>
