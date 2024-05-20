<template>
  <div>
    Hola Mundo
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  mounted () {
    const token = localStorage.getItem('token')
    if (!token) {
      this.$router.push('/')
    }
  }
}
</script>
