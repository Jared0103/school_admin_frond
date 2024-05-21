<template>
  <div>
    <h1>Dashboard</h1>
    <button @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  mounted () {
    const token = localStorage.getItem('token')
    if (!token) {
      // Si no hay token, redirigir al usuario a la página de inicio
      this.$router.push('/')
    }
  },
  methods: {
    logout () {
      // Eliminar el token del localStorage
      localStorage.removeItem('token')
      // Redirigir al usuario a la página de inicio
      this.$router.push('/')
    }
  }
}
</script>
