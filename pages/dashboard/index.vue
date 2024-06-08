<template>
  <div class="dashboard-container">
    <header class="dashboard-header">
      <div class="header-content">
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
          <img src="/sideBar/Billing.png" class="section-icon" alt="Add other admins">
          <div class="section-content">
            <h2>Add other admins</h2>
            <p>Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!</p>
          </div>
        </section>
        <section class="dashboard-section">
          <img src="/sideBar/school.png" class="section-icon" alt="Add classes">
          <div class="section-content">
            <h2>Add classes</h2>
            <p>Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!</p>
          </div>
        </section>
        <section class="dashboard-section">
          <img src="/sideBar/school.png" class="section-icon" alt="Add students">
          <div class="section-content">
            <h2>Add students</h2>
            <p>Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!</p>
          </div>
        </section>
      </div>
    </main>

    <div class="support-button">
      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
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
.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.dashboard-header {
  width: 1439px;
  height: 95px;
  left: 1px;
  background: #f5f5f5;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  color: #666;
  cursor: pointer;
  transition: color 0.3s;
}

.bell-icon:hover {
  color: #333;
}

.dashboard-main {
  text-align: center;
  padding: 40px;
}

.dashboard-main h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

.user-email {
  font-size: 18px;
  color: #777;
  margin-bottom: 40px;
}

.dashboard-sections {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.dashboard-section {
  background: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.section-icon {
  width: 50px;
  height: 50px;
}

.section-content {
  flex-grow: 1;
}

.section-content h2 {
  font-size: 20px;
  margin: 0 0 10px 0;
}

.section-content p {
  font-size: 14px;
  color: #555;
}

.support-button {
  position: fixed;
  bottom: 100px;
  right: 20px;
  background-color: #152259;
  color: white;
  border-radius: 24px;
  display: flex;
  align-items: center;
  padding: 15px 50px;
}

.support-button v-icon {
  margin-right: 5px;
}

.support-button span {
  color: white;
}

body, html, #__nuxt, #app, .v-application {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
