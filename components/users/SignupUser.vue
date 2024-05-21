<template>
  <div class="signup-page">
    <b-container class="mt-5">
      <b-row>
        <b-col cols="12" md="6" class="mx-auto">
          <b-card title="Sign Up">
            <b-form @submit.prevent="signup">
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
                  type="email"
                  required
                />
              </b-form-group>
              <b-form-group id="input-group-4" label="Password:" label-for="password">
                <b-form-input
                  id="password"
                  v-model="password"
                  type="password"
                  required
                />
              </b-form-group>
              <b-form-group id="input-group-5" label="Confirm Password:" label-for="confirmPassword">
                <b-form-input
                  id="confirmPassword"
                  v-model="confirmPassword"
                  type="password"
                  required
                />
              </b-form-group>
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
      nameAdmin: '',
      nameSchool: '',
      schoolMail: '',
      password: '',
      confirmPassword: '',
      numberOfStaff: '',
      schoolAddress: ''
    }
  },
  methods: {
    async signup () {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match')
        return
      }
      try {
        const response = await this.$axios.post('/signup', {
          nameAdmin: this.nameAdmin,
          nameSchool: this.nameSchool,
          schoolMail: this.schoolMail,
          password: this.password,
          numberOfStaff: this.numberOfStaff,
          schoolAddress: this.schoolAddress
        })
        // handle successful signup
        console.log('Signup successful:', response.data)
        // Redirect to dashboard after successful signup
        this.$router.push('/dashboard')
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
