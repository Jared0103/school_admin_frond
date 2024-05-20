<template>
  <div class="login-page">
    <div class="form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
<<<<<<< HEAD
          <input v-model="nameSchool" type="text" placeholder="School Name" required class="form-control">
=======
          <input v-model="email" type="email" placeholder="Email" required class="form-control">
>>>>>>> 3a49f403c50b81fa7eb28f08bca26d1368872288
        </div>
        <div class="form-group">
          <input v-model="password" type="password" placeholder="Password" required class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <nuxt-link to="/signup">
          Sign Up
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
<<<<<<< HEAD
      nameSchool: '',
=======
      email: '',
>>>>>>> 3a49f403c50b81fa7eb28f08bca26d1368872288
      password: ''
    }
  },
  methods: {
<<<<<<< HEAD
    async login () {
      try {
        const response = await this.$axios.post('/login', {
          nameSchool: this.nameSchool,
          password: this.password
        })
        console.log('🚀 ~ login ~ response:', response.data)
        // Guardar token en localStorage (si es necesario)
        localStorage.setItem('token', response.data.token)
        // Redirigir a la página principal o dashboard
        this.$router.push('/dashboard')
      } catch (error) {
        console.error('Login failed:', error)
        // Mostrar mensaje de error
        alert('Login failed: ' + error.response.data.message)
      }
=======
    login () {
      this.$axios.post('/login', {
        email: this.email,
        password: this.password
      })
        .then((response) => {
        // Manejo de sesión
        })
        .catch((error) => {
          console.error(error)
        })
>>>>>>> 3a49f403c50b81fa7eb28f08bca26d1368872288
    }
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f7f7f7;
}

.form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.form-group {
  margin-bottom: 15px;
}
</style>
