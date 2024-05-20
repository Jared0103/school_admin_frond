<template>
  <div class="signup-page">
    <b-container class="mt-5">
      <b-row>
        <b-col cols="12" md="6" class="mx-auto">
          <b-card title="Sign Up">
            <b-form @submit.prevent="signup">
<<<<<<< HEAD
              <b-form-group id="input-group-1" label="Admin Name:" label-for="nameAdmin">
                <b-form-input
                  id="nameAdmin"
                  v-model="nameAdmin"
                  type="text"
                  required
                />
              </b-form-group>
              <b-form-group id="input-group-2" label="School Name:" label-for="nameSchool">
                <b-form-input
                  id="nameSchool"
                  v-model="nameSchool"
                  type="text"
                  required
                />
              </b-form-group>
              <b-form-group id="input-group-3" label="Email:" label-for="schoolMail">
                <b-form-input
                  id="schoolMail"
                  v-model="schoolMail"
=======
              <b-form-group id="input-group-1" label="Email:" label-for="email">
                <b-form-input
                  id="email"
                  v-model="email"
>>>>>>> 3a49f403c50b81fa7eb28f08bca26d1368872288
                  type="email"
                  required
                />
              </b-form-group>
<<<<<<< HEAD
              <b-form-group id="input-group-4" label="Password:" label-for="password">
=======
              <b-form-group id="input-group-2" label="Password:" label-for="password">
>>>>>>> 3a49f403c50b81fa7eb28f08bca26d1368872288
                <b-form-input
                  id="password"
                  v-model="password"
                  type="password"
                  required
                />
              </b-form-group>
<<<<<<< HEAD
              <b-form-group id="input-group-5" label="Confirm Password:" label-for="confirmPassword">
=======
              <b-form-group id="input-group-3" label="Confirm Password:" label-for="confirmPassword">
>>>>>>> 3a49f403c50b81fa7eb28f08bca26d1368872288
                <b-form-input
                  id="confirmPassword"
                  v-model="confirmPassword"
                  type="password"
                  required
                />
              </b-form-group>
<<<<<<< HEAD
              <b-form-group id="input-group-6" label="Number of Staff:" label-for="numberOfStaff">
                <b-form-input
                  id="numberOfStaff"
                  v-model="numberOfStaff"
                  type="number"
                  required
                />
              </b-form-group>
              <b-form-group id="input-group-7" label="School Address:" label-for="schoolAddress">
                <b-form-input
                  id="schoolAddress"
                  v-model="schoolAddress"
                  type="text"
                  required
                />
              </b-form-group>
=======
>>>>>>> 3a49f403c50b81fa7eb28f08bca26d1368872288
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
<<<<<<< HEAD
      nameAdmin: '',
      nameSchool: '',
      schoolMail: '',
      password: '',
      confirmPassword: '',
      numberOfStaff: '',
      schoolAddress: ''
=======
      email: '',
      password: '',
      confirmPassword: ''
>>>>>>> 3a49f403c50b81fa7eb28f08bca26d1368872288
    }
  },
  methods: {
    async signup () {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match')
        return
      }
      try {
<<<<<<< HEAD
        const response = await this.$axios.post('/signup', {
          nameAdmin: this.nameAdmin,
          nameSchool: this.nameSchool,
          schoolMail: this.schoolMail,
          password: this.password,
          numberOfStaff: this.numberOfStaff,
          schoolAddress: this.schoolAddress
=======
        const response = await this.$axios.post('/register', {
          email: this.email,
          password: this.password
>>>>>>> 3a49f403c50b81fa7eb28f08bca26d1368872288
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
