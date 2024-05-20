<template>
  <div class="login-page">
    <div class="form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <input v-model="email" type="email" placeholder="Email" required class="form-control">
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
      email: '',
      password: ''
    }
  },
  methods: {
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
