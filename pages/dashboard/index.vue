<template>
  <div class="dashboard-container">
    <header class="dashboard-header">
      <div class="header-content promo-content">
        <div class="promo-text">
          Learn how to launch faster<br>
          watch our webinar for tips from our experts and get a limited time offer.
        </div>
        <div class="header-actions">
          <v-icon class="bell-icon">
            mdi-bell
          </v-icon>
          <button class="logout-button" @click="logout">
            Logout
          </button>
        </div>
      </div>
    </header>

    <main class="dashboard-main">
      <h1>Welcome to your dashboard, Udemy school</h1>
      <p class="user-email">
        Uyo/school/@teachable.com
      </p>

      <div class="dashboard-sections">
        <section class="dashboard-section">
          <div class="section-header">
            <v-icon class="section-icon">
              mdi-account
            </v-icon>
            <h2 class="section-title">
              Add other admins
            </h2>
          </div>
          <p class="section-description">
            Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!
          </p>
        </section>
        <section class="dashboard-section">
          <div class="section-header">
            <v-icon class="section-icon">
              mdi-school
            </v-icon>
            <h2 class="section-title">
              Add classes
            </h2>
          </div>
          <p class="section-description">
            Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!
          </p>
        </section>
        <section class="dashboard-section">
          <div class="section-header">
            <v-icon class="section-icon">
              mdi-account-group
            </v-icon>
            <h2 class="section-title">
              Add students
            </h2>
          </div>
          <p class="section-description">
            Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!
          </p>
        </section>
      </div>
    </main>

    <div class="support-button">
      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" class="support-btn" v-on="on">
            <v-icon>mdi-headset</v-icon>
            <span>Support</span>
            <v-icon right>
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in supportItems" :key="index">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data () {
    return {
      supportItems: [
        'Find answers',
        'Contact us',
        'Suggest an improvement',
        'Support page'
      ]
    }
  },
  mounted () {
    const token = localStorage.getItem('token')
    if (!token) {
      this.$router.push('/')
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body, html, #__nuxt, #app, .v-application {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Roboto', sans-serif;
}

.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.dashboard-header {
  width: 100%;
  height: 95px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
}

.promo-content {
  background: none;
  box-shadow: none;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
}

.promo-text {
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logout-button {
  background-color: #2196f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #1976d2;
}

.bell-icon {
  font-size: 24px;
  color: #636161;
  cursor: pointer;
  transition: color 0.3s;
}

.bell-icon:hover {
  color: #f2f0f0;
}

.dashboard-main {
  text-align: center;
  padding: 10px;
  font-size: 30px;
}

.dashboard-main h1 {
  font-size: 45px;
  margin-bottom: 10px;
  text-align: left;
}

.user-email {
  font-size: 18px;
  color: #777;
  margin-bottom: 20px;
}

.dashboard-sections {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}

.dashboard-section {
  background: none;
  border: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 500px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-icon {
  font-size: 40px;
  color: #555;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.section-description {
  font-size: 18px;
  color: #555;
  margin-top: 15px;
}

.support-button {
  position: fixed;
  bottom: 100px;
  right: 20px;
  color: white;
}

.support-btn {
  background-color: #152259;
  color: white;
  border-radius: 24px;
  display: flex;
  align-items: center;
  padding: 20px 89px;
  font-size: 16px;
}

.support-btn v-icon {
  margin-right: 10px;
  color: white;
}

.support-btn span {
  color: white;
}
</style>
