<template>
  <div>
    <SignupUser v-if="showSignup" @signupEvent="handleSignupEvent" />
  </div>
</template>

<script>
import SignupUser from '~/components/users/SignupUser.vue'

export default {
  name: 'IndexPage',
  components: {
    SignupUser
  },
  data () {
    return {
      showSignup: true
    }
  },
  methods: {
    handleSignupEvent (data) {
      // Manejar evento de registro
      console.log('Evento de registro:', data)
    }
  }
}
</script>
