<template>
  <v-app>
    <!-- Toolbar -->
    <v-app-bar color="#100F57" fixed app elevation="0">
      <!-- Logo Image -->
      <img src="/Statisda.png" alt="Company Logo" class="nav-company-logo">

      <!-- Container for Centered Buttons -->
      <v-spacer />
      <div class="button-container">
        <v-btn text class="button-text-transform btn-spacing" href="#">
          Home
        </v-btn>
        <v-btn text class="button-text-transform btn-spacing" href="#">
          Pricing
        </v-btn>
        <v-btn text class="button-text-transform btn-spacing" href="#">
          Use Cases
        </v-btn>
        <v-btn text class="button-text-transform btn-spacing" href="#">
          Location
        </v-btn>
        <v-btn text class="button-text-transform btn-spacing" href="#">
          FAQ
        </v-btn>
        <v-btn text class="button-text-transform btn-spacing" href="#">
          Company
        </v-btn>
      </div>
      <v-spacer />

      <!-- Right Button -->
      <v-btn class="button-text-transform sign-up-btn" @click="redirectToLogin">
        Login
      </v-btn>
    </v-app-bar>

    <!-- Main content area -->
    <v-main>
      <!-- Custom Section Below Toolbar -->
      <div class="full-width-section">
        <div class="custom-button-container">
          <v-btn class="custom-consultation-button">
            Get Your Consultation Now
          </v-btn>
        </div>
        <div class="title-text-container">
          <div class="title-text">
            Manage your team
          </div>
          <div class="title-text">
            easily with task man
          </div>
          <div class="sub-title-text1">
            Statisdaa is a school management solution that offers
          </div>
          <div class="sub-title-text2">
            a personalized portal to each type of user.
          </div>
          <v-btn class="button-text-transform get-started-btn" href="#">
            Get Started
          </v-btn>
          <img src="~/assets/Fotoq.png" alt="Descripción de la imagen" class="image-below-button">
        </div>
      </div>

      <div class="trusted-by">
        Trusted by company like
      </div>

      <v-container>
        <v-row justify="center" class="logo-row">
          <v-col cols="auto" class="logo-col">
            <v-img src="/logo3.png" alt="Logo 1" class="company-logo" />
          </v-col>
          <v-col cols="auto" class="logo-col">
            <v-img src="/logo2.png" alt="Logo 2" class="company-logo" />
          </v-col>
          <v-col cols="auto" class="logo-col">
            <v-img src="/logo1.png" alt="Logo 3" class="company-logo" />
          </v-col>
          <v-col cols="auto" class="logo-col">
            <v-img src="/logo3.png" alt="Logo 1" class="company-logo" />
          </v-col>
          <v-col cols="auto" class="logo-col">
            <v-img src="/logo2.png" alt="Logo 2" class="company-logo" />
          </v-col>
          <v-col cols="auto" class="logo-col">
            <v-img src="/logo1.png" alt="Logo 3" class="company-logo" />
          </v-col>
        </v-row>
      </v-container>

      <v-container class="my-separator" />

      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <v-row>
              <v-col v-for="n in 4" :key="n" cols="12" md="6">
                <v-card class="slack-card" elevation="2">
                  <v-card-title class="headline font-weight-bold">
                    Slack integration
                  </v-card-title>
                  <v-card-subtitle class="subtile-slack">
                    Statisdaa is a school management solution that offers a personalized portal to each type of user.
                  </v-card-subtitle>
                  <v-card-text>
                    <div class="d-flex align-center">
                      <v-btn class="development-btn ma-2 text-capitalize" elevation="0">
                        Development
                      </v-btn>
                      <v-avatar-group>
                        <v-avatar size="24" class="ma-1">
                          <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                        </v-avatar>
                        <v-avatar size="24" class="ma-1">
                          <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg">
                        </v-avatar>
                        <v-avatar size="24" class="ma-1">
                          <img src="https://cdn.vuetifyjs.com/images/lists/3.jpg">
                        </v-avatar>
                      </v-avatar-group>
                    </div>
                    <v-divider class="my-3" />
                    <div class="d-flex justify-space-between align-center">
                      <v-chip class="custom-chip">
                        14
                      </v-chip>
                      <div>
                        <v-icon class="mr-1">
                          mdi-calendar
                        </v-icon>
                        <span>7 feb 2022</span>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="mx-auto my-2" elevation="2" max-width="100%">
              <v-card-title class="task-title">
                Create your task
              </v-card-title>
              <v-card-subtitle class="task-subtitle">
                Statisdaa is a school management solution that offers a personalized portal to each type of user, ensuring that your institution is always engaged with teachers, students, and their parents.
              </v-card-subtitle>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Create your task"
                    outlined
                    dense
                    placeholder="Create your task"
                  />
                  <v-text-field
                    label="Create your task"
                    outlined
                    dense
                    placeholder="Create your task"
                  />
                  <v-card color="#0A92DD" dark class="mt-4">
                    <v-card-title class="info-title">
                      Manage the task easily and clearly
                    </v-card-title>
                    <v-card-subtitle class="create-manage">
                      Statisdaa increases communication between all stakeholders: students, teachers, parents, and administrative staff, with a dedicated web portal for any type of end-user. Keeping your students and parents engaged with the academic process is a crucial factor in each student's success.
                    </v-card-subtitle>
                  </v-card>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="my-separator" />
      <v-container class="my-separator" />

      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <div class="formatted-text">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, dicta.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequatur porro labore voluptas sequi tenetur asperiores molestias ducimus explicabo facilis doloremque ipsa cumque reiciendis veritatis, libero officia assumenda repudiandae inventore?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, harum!</p>
              <v-row align="center" no-gutters>
                <v-col cols="auto">
                  <v-avatar size="80">
                    <v-icon size="60">
                      mdi-account-circle
                    </v-icon>
                  </v-avatar>
                </v-col>
                <v-col>
                  <div class="display-1">
                    80,000K
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-card flat>
              <v-img
                src="/mano.png"
                alt="A descriptive alt text"
                class="move-image-up elevation-0"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col>
            <h1 class="plan-title">
              Pick up the best plan
            </h1>
            <div class="multi-line-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet ut lobortis pellentesque a, luctus maecenas.
            </div>
          </v-col>
        </v-row>

        <v-container class="my-separator" />

        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-card class="custom-card" elevation="6">
              <v-card-title class="custom-card-title">
                Standard
              </v-card-title>
              <v-card-text class="custom-card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet
              </v-card-text>
              <v-card-subtitle class="custom-card-subtitle">
                <span class="price-big">$15</span> /Month
              </v-card-subtitle>
              <v-divider />
              <v-list dense class="custom-card-list">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-checkbox-blank-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    For 1-10 people in a team
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-checkbox-blank-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    For 1-10 people in a team
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-checkbox-blank-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    For 1-10 people in a team
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-card-actions class="custom-card-actions justify-center">
                <v-btn class="custom-button">
                  Choose
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="custom-card-second" dark>
              <v-card-title class="custom-card-title-second">
                Standard
              </v-card-title>
              <v-card-text class="custom-card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet
              </v-card-text>
              <v-card-subtitle class="custom-card-subtitle">
                <span class="price-big">$15</span> /Month
              </v-card-subtitle>
              <v-divider />
              <v-list dense class="custom-card-list-second">
                <v-list-item class="custom-bg-color">
                  <v-list-item-icon>
                    <v-icon>mdi-checkbox-blank-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    For 1-10 people in a team
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="custom-bg-color">
                  <v-list-item-icon>
                    <v-icon>mdi-checkbox-blank-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    For 1-10 people in a team
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="custom-bg-color">
                  <v-list-item-icon>
                    <v-icon>mdi-checkbox-blank-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    For 1-10 people in a team
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-card-actions class="custom-card-actions-second justify-center">
                <v-btn class="custom-button-second">
                  Choose
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="custom-card" elevation="6">
              <v-card-title class="custom-card-title">
                Standard
              </v-card-title>
              <v-card-text class="custom-card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet
              </v-card-text>
              <v-card-subtitle class="custom-card-subtitle">
                <span class="price-big">$15</span> /Month
              </v-card-subtitle>
              <v-divider />
              <v-list dense class="custom-card-list">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-checkbox-blank-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    For 1-10 people in a team
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-checkbox-blank-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    For 1-10 people in a team
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-checkbox-blank-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    For 1-10 people in a team
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-card-actions class="custom-card-actions justify-center">
                <v-btn class="custom-button">
                  Choose
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="my-separator" />

      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="custom-title">
              Interesting option from customer
            </h2>
          </v-col>
          <v-col cols="12" md="6">
            <div class="text-container">
              <p class="custom-description">
                <span>Lorem ipsum dolor sit amet, consectetur </span>
                <span>adipiscing elit. Purus odio pellentesque </span>
                <span>pellentesque a. Amet</span>
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row class="big-container" align="center" justify="center">
          <v-col cols="12" md="6" class="px-md-12">
            <v-img
              src="/customer.png"
              alt="Customer Image"
              class="big-image"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="custom-card-left" dark>
              <v-card-title class="custom-card-title-left">
                Standard
              </v-card-title>
              <v-card-text class="custom-card-text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet
              </v-card-text>
              <v-card-subtitle class="custom-card-subtitle-left">
                <span class="price-big-left">$15</span> /Month
              </v-card-subtitle>
              <v-card-actions class="custom-card-actions-left justify-center">
                <v-btn class="custom-button-left">
                  Choose
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-img
              src="/teclado.png"
              alt="Customer Image"
              class="big-image"
            />
          </v-col>
          <v-col cols="12" md="6">
            <div>
              <h2 class="section-title">
                Interesting option from customer
              </h2>
              <p class="section-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget id arcu mauris sed augue volutpat tortor. Condimentum facilisis anean elit sed mattis porttitor duis ornare justo.
              </p>
              <v-btn class="btn-teclado">
                Choose
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer color="#100F57" class="pa-10">
      <v-container fluid>
        <v-row>
          <!-- Columnas de Enlaces -->
          <v-col cols="12" sm="3" class="footer-col">
            <h3 class="footer-heading">
              Lorem ipsum dolor
            </h3>
            <p class="white-text">
              Home jjjjjjjjj
            </p>
            <p class="white-text">
              Pricing hfdhdfj
            </p>
            <p class="white-text">
              Use cases jsksi
            </p>
            <p class="white-text">
              Location hdhdhd
            </p>
            <p class="white-text">
              FAQ kdkdkdd
            </p>
            <p class="white-text">
              Company jdksodk
            </p>
          </v-col>
          <v-col cols="12" sm="3" class="footer-col">
            <h3 class="footer-heading">
              Lorem ipsum dolor
            </h3>
            <p class="white-text">
              Home jjjjjjjjj
            </p>
            <p class="white-text">
              Pricing hfdhdfj
            </p>
            <p class="white-text">
              Use cases jsksi
            </p>
            <p class="white-text">
              Location hdhdhd
            </p>
            <p class="white-text">
              FAQ kdkdkdd
            </p>
            <p class="white-text">
              Company Lorem, ipsum.
            </p>
          </v-col>
          <v-col cols="12" sm="3" class="footer-col">
            <h3 class="footer-heading">
              Lorem ipsum dolor
            </h3>
            <p class="white-text">
              Home Lorem ipsum dolor sit.j
            </p>
            <p class="white-text">
              Pricing Lorem, ipsum.
            </p>
            <p class="white-text">
              Use cases Lorem, ipsum.
            </p>
            <p class="white-text">
              Location Lorem, ipsum.
            </p>
            <p class="white-text">
              FAQ Lorem, ipsum dolor.
            </p>
            <p class="white-text">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </v-col>
          <v-col cols="12" sm="3" class="footer-col">
            <h3 class="footer-heading">
              Lorem ipsum dolor
            </h3>
            <p class="white-text">
              Lorem ipsum dolor sit amet.
            </p>
            <div class="consultation-container">
              <span class="consultation-text">Get Your Free Consultation Now</span>
              <v-btn class="btn-consultation ml-2" color="primary">
                Get Started
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-container class="my-separator" />
        <v-row>
          <v-col cols="12" sm="6" class="white--text text-left">
            ©2024 Scholl Management. Copyright And All Rights Reserved.
          </v-col>
          <v-col cols="12" sm="6" class="white--text d-flex justify-end legal-links">
            <span class="mr-3">Privacy</span>
            <span class="mr-3">Security</span>
            <span>Terms</span>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    redirectToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.consultation-container {
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #FFFFFF;
  border-radius: 9px 9px 9px 9px;
}

.consultation-text {
  font-family: 'Karla', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.37px;
  text-align: center;
  color: #667085 !important;
  margin-right: 10px;
}

.btn-consultation {
  width: 129px;
  height: 48px;
  padding: 10px 14px;
  border-radius: 40px 40px 40px 40px;
  border: 0.2px solid transparent;
  opacity: 1;
  text-transform: none;
}

.v-app-bar .v-btn {
  color: white !important;
  font-family: 'Karla', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.03px;
  text-align: center;
  margin-right: 10px;
}

@media (max-width: 600px) {
  .v-app-bar {
    flex-direction: column;
    align-items: center;
  }
  .button-container {
    flex-direction: column;
    align-items: center;
  }
}

.company-logo {
  width: 98px;
  height: 26px;
  opacity: 1;
  margin-left: 20px;
  margin-right: 20px;
}
.nav-company-logo {
  width: 98px;
  height: 26px;
  opacity: 1;
  margin-left: 20px;
  margin-right: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-spacing {
  margin-right: 20px;
}

.get-started-btn {
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.7px;
  text-align: center;
  color: white !important;
  background-color: #0A92DD !important;
  border-radius: 40px;
  padding: 10px 14px;
  text-transform: capitalize;
  margin-top: 20px;
}

.sign-up-btn {
  width: 90px;
  height: 34px;
  padding: 10px 14px 10px 14px;
  background-color: #0A92DD !important;
  border-radius: 40px 40px 40px 40px;
  color: white;
}

.custom-button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.custom-consultation-button {
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.7px;
  text-align: center;
  color: #D89925 !important;
  background-color:  rgb(28, 27, 96) !important;
  border-radius: 40px;
  padding: 10px 14px;
  text-transform: capitalize;
}
.title-text-container {
  text-align: center;
  margin-top: 20px;
}

.title-text {
  font-family: 'Karla', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 59.53px;
  color: #FFFFFF;
}

.full-width-section {
  width: 100%;
  background: linear-gradient(to bottom, #100F57 63%, white 50%);
  margin-top: -225px;
}

.sub-title-text1 {
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.7px;
  text-align: center;
  color: #FFFFFF;
  margin-top: 20px;
}
.sub-title-text2 {
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.7px;
  text-align: center;
  color: #FFFFFF;
}

.image-below-button {
  width: 931px;
  height: 672px;
  display: block;
  margin: 20px auto;
  border-radius: 10px;
}

.trusted-by {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 44.65px;
  text-align: center;
  color: #000000;
  margin-top: 20px;
  position: relative;
  z-index: 2;
}

.company-logo {
  width: 44px;
  height: 46px;
}

.logo-row {
  margin-top: 20px;
}

.logo-col {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
}

.slack-card {
    width: 350px;
    height: auto;
    opacity: 1;
  }

  .development-btn {
    background:#FFF9EB !important;
    color: #D89925 !important;
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 14.88px;
    text-align: left;
    border-radius: 25px;
    margin-right: 10px;
  }

  .v-avatar-group {
    margin-left: 0;
  }

  .v-avatar {
    margin-right: -8px;
  }

  .my-separator {
    margin-top: 50px;
  }

  .custom-chip {
    background-color: #FFFFFF !important;
    color: #000000;
  }

  .subtile-slack {
    color: #bdbdbd !important;
  }

  .task-title {
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 32px;
    font-weight: 600;
    line-height: 39.69px;
    text-align: left;
    color: #333;
    margin-bottom: 25px;
  }

  .task-subtitle {
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 17.36px;
    text-align: left;
    color: #bdbdbd !important;
    margin-top: 16px;
  }

  .v-text-field__slot, .v-textarea__slot {
    font-family: 'Kumbh Sans', sans-serif;
  }

  .info-box {
    background-color: #1777f7 !important;
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;
  }

  .v-text-field__slot {
    font-family: 'Kumbh Sans', sans-serif;
  }

  .info-title {
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .formatted-text h2 {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 16px;
  text-align: left;
}

.formatted-text p {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  text-align: left;
  margin-bottom: 12px;
  text-indent: 0px;
  color: #667085 !important;
}

.move-image-up {
  transform: translate(150px, -65px);

}

.formatted-text h2, .formatted-text p, .display-1 {
  text-align: left;
}

.display-1 {
  font-size: 3rem;
  font-weight: bold;
}

.formatted-text h2, .formatted-text p {
  text-align: left;
}

.create-manage {
  font-size: 10px;
}

.plan-title {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 49.61px;
  text-align: center;
  color: #1777F7;
}

.multi-line-text {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 31.59px;
  text-align: center;
  color: #667085;
  width: 60%;
  max-width: 700px;
  margin: 0 auto;
}

.custom-bg-color {
  background-color: #0B0641 !important;
}

.custom-card, .custom-card-second {
  width: 360px;
  height: 524px;
  position: relative;
  border-radius: 8px 0px 0px 0px;
  padding: 16px;
}

.custom-card-second {
  top: -35px;
  background-color: #0B0641 !important;
}

.custom-card-title, .custom-card-text, .custom-card-subtitle, .custom-card-actions, .custom-card-list {
  padding: 0 12px;
  margin-bottom: 12px;
}

.custom-card-title {
  color: #1777F7;
  padding: 4px 8px;
  margin-top: 10px;
}

.custom-card-title-second {
  color: #1777F7;
  margin-top: 5px;
}

.custom-card-text {
  margin-bottom: 50px;
}

.custom-card-list {
  padding-left: 12px;
  margin-top: 20px;
}

.custom-card-list-second {
  padding-left: 12px;
  background-color: #0B0641 !important;
  margin-top: 20px;
}

.custom-card-actions {
  margin-top: 40px;
}

.custom-card-actions-second {
  margin-top: 20px;
}

.price-big {
  font-size: 32px;
  font-weight: bold;
}

.custom-button {
  width: 279px;
  height: 33px;
  padding: 8px 20px;
  border-radius: 9px 9px 9px 9px;
  position: absolute;
  background: #1777F7 !important;
  color: #FFFFFF !important;
  margin-top: 60px;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.36px;
  text-align: left;
  text-transform: none;
}

.custom-button-second {
  width: 279px;
  height: 33px;
  padding: 8px 20px;
  border-radius: 9px 9px 9px 9px;
  position: absolute;
  background: #1777F7 !important;
  color: #FFFFFF !important;
  margin-top: 50px;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.36px;
  text-align: left;
  text-transform: none;
}

.custom-title {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 49.61px;
  text-align: left;
  color: #1E2024 !important;
}

.text-container {
  max-width: 550px;
}

.custom-description {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 31.59px;
  text-align: left;
  color: #667085 !important;
  display: block;
}

.custom-description span {
  display: block;
}

.big-image {
  max-width: 100%;
  height: auto;
}

.big-container {
  margin-top: 20px;
  background-color: #0B0641;
  padding: 80px;
  border-radius: 9px 9px 9px 9px;
}

.custom-card-left {
  top: -35px;
  background-color: #0B0641 !important;
  position: relative;
  border-radius: 8px 0px 0px 0px;
  padding: 16px;
}
.custom-card-title-left {
  color: #1777F7;
  margin-top: -50px;
}

.custom-card-text-left {
  margin-bottom: 50px;
}

.price-big-left {
  font-size: 32px;
  font-weight: bold;
}

.custom-card-actions-left {
  margin-top: 20px;
}

.custom-card-title-left, .custom-card-text-left, .custom-card-subtitle-left, .custom-card-actions-left, .custom-card-list {
  padding: 0 12px;
  margin-bottom: 12px;
}

.custom-card-subtitle-left {
  margin-top: 40px;
}

.custom-button-left {
  width: 279px;
  height: 33px;
  padding: 8px 20px;
  border-radius: 9px 9px 9px 9px;
  position: absolute;
  background: #1777F7 !important;
  color: #FFFFFF !important;
  margin-top: 222px;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.36px;
  text-align: left;
  text-transform: none;
}

.section-title {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 49.61px;
  text-align: left;
  color: #1E2024;
  margin-bottom: 20px;
  margin-top: 100px;
}

.section-text {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 31.59px;
  text-align: left;
  color: #667085;
  margin-bottom: 20px;
}
.btn-teclado {
  width: 139px;
  height: 33px;
  padding: 8px 20px;
  border-radius: 9px 9px 9px 9px;
  position: absolute;
  background: #1777F7 !important;
  color: #FFFFFF !important;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 17.36px;
  text-align: left;
  text-transform: none;
  margin-top: 20px;
}

.footer-heading {
  color: #FFFFFF;
  font-weight: bold;
  margin-bottom: 12px;
  font-family: 'Karla', sans-serif;
}
.footer-col {
  text-align: left;
}

.white-text {
  color: #FFFFFF;
  font-size: 12px;
  font-family: 'Karla', sans-serif;
}

.legal-links {
  padding-right: 150px;
}
</style>
