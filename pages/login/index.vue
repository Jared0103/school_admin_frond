<template>
  <v-app>
    <v-main>
      <div style="background-color: #f1f1f1;">
        <v-container
          class="d-flex flex-column align-center justify-center"
          style="min-height: 100vh;"
        >
          <v-card flat style="width: 600px; height: 700px; margin-top: 15px;" align="center" class="d-flex flex-column align-center justify-center">
            <v-card-title class="justify-center" style="font-size: 30px; margin-bottom: 30px">
              Welcome, Log into your account
            </v-card-title>
            <v-card-text align="center">
              <b>It is our great pleasure to have <br> you on board!</b>
            </v-card-text>
            <v-card-text align="center">
              <v-form>
                <v-text-field
                  v-model="schoolName"
                  :rules="[v => !!v || 'School name is required']"
                  class="fixed-width"
                  outlined
                  placeholder="Enter the school name"
                  type="text"
                />
                <v-text-field
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  outlined
                  class="fixed-width"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="togglePasswordVisibility"
                />
              </v-form>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                block
                color="blue"
                elevation="0"
                class="fixed-width"
                style="height: 50px; width: 700px;"
                @click="login"
              >
                <span style="text-transform: none; color: white;">
                  Login
                </span>
              </v-btn>
            </v-card-actions>
            <div style="display: flex; align-items: center;">
              <v-card-text style="margin-right: 0px;">
                Don't have an account yet?
                <router-link to="/signup" style="text-decoration: none; color: blue;">
                  Signup
                </router-link>
              </v-card-text>
            </div>
          </v-card>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'noNavBar',
  data () {
    return {
      schoolName: null,
      password: null,
      showPassword: false,
      showLogin: true
    }
  },
  methods: {
    handleLoginEvent (data) {
      // Manejar evento de inicio de sesión
    },
    login () {
      const sendData = {
        nameSchool: this.schoolName,
        password: this.password
      }
      const url = '/login'
      this.$axios.post(url, sendData)
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem('token', res.data.token)
            this.$router.push('/dashboard')
          }
        })
        .catch((err) => {
          console.error('Error during login:', err)
          // Manejar el error
        })
    },
    togglePasswordVisibility () {
      this.showPassword = !this.showPassword
    }
  }
}
</script>

<style scoped>
.fixed-width {
  max-width: 300px;
  width: 100%;
}

.stepper-card {
  max-width: 1200px;
  width: 150%;
  margin-top: 16px;
}

.v-stepper__step--active .v-stepper__step__title {
  font-weight: bold;
}

.v-stepper__step__title {
  text-align: center;
  display: block;
  width: 100%;
  margin-top: 8px;
}

.equal-height {
  height: 700px;
}
</style>
