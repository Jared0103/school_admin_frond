<template>
  <v-app dark>
    <div class="error-container">
      <v-icon class="error-icon">
        {{ errorIcon }}
      </v-icon>
      <h1 v-if="error.statusCode === 404" class="error-message">
        {{ pageNotFound }}
      </h1>
      <h1 v-else class="error-message">
        {{ otherError }}
      </h1>
      <NuxtLink to="/" class="home-link">
        Back to Home
      </NuxtLink>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      errorIcon: 'mdi-alert-circle-outline'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #222;
  color: #fff;
}

.error-icon {
  font-size: 100px;
  margin-bottom: 30px;
}

.error-message {
  font-family: 'Segoe UI', sans-serif;
  font-size: 36px;
  margin-bottom: 20px;
}

.home-link {
  font-family: 'Segoe UI', sans-serif;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.home-link:hover {
  color: #ccc;
}
</style>
