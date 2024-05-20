<template>
  <div class="signup-page">
    <b-container class="mt-5">
      <b-row>
        <b-col cols="12" md="6" class="mx-auto">
          <b-card title="Sign Up">
            <b-form @submit.prevent="signup">
              <b-form-group id="input-group-1" label="Email:" label-for="email">
                <b-form-input
                  id="email"
                  v-model="email"
                  type="email"
                  required
                />
              </b-form-group>
              <b-form-group id="input-group-2" label="Password:" label-for="password">
                <b-form-input
                  id="password"
                  v-model="password"
                  type="password"
                  required
                />
              </b-form-group>
              <b-form-group id="input-group-3" label="Confirm Password:" label-for="confirmPassword">
                <b-form-input
                  id="confirmPassword"
                  v-model="confirmPassword"
                  type="password"
                  required
                />
              </b-form-group>
              <b-button type="submit" variant="primary">
                Sign Up
              </b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    async signup () {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match')
        return
      }
      try {
        const response = await this.$axios.post('/register', {
          email: this.email,
          password: this.password
        })
        // handle successful signup, e.g., redirect to login
        console.log('Signup successful:', response.data)
      } catch (error) {
        console.error('Signup failed:', error)
        // handle error, e.g., show error message
      }
    }
  }
}
</script>

<style scoped>
.signup-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
