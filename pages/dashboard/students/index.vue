<template>
  <v-app>
    <!-- Barra de navegación lateral -->
    <v-navigation-drawer
      permanent
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="custom-background"
      dark
    >
      <!-- Imagen en la parte superior del sidebar -->
      <v-list-item class="justify-center logo-container">
        <v-img src="/sideBar/Ellipse 6.png" alt="Ellipse" class="ellipse-image" />
        <v-list-item-content>
          <v-list-item-title class="white--text text-center">
            Udemy Inter. school
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Elementos de navegación -->
      <v-divider />
      <v-list>
        <v-list-group
          v-for="(item, i) in items"
          :key="i"
          v-model="item.active"
          no-action
        >
          <template #activator>
            <v-list-item @click="navigateTo(item.to)">
              <v-list-item-action>
                <v-img :src="item.img" alt="icon" class="sidebar-icon" />
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="white--text">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item
            v-for="(subItem, j) in item.subItems"
            :key="j"
            class="pl-4"
            :style="{ marginLeft: '10px' }"
          >
            <v-list-item-action>
              <v-icon class="submenu-icon">
                mdi-chevron-right
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text">
                {{ subItem.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <!-- Espacio adicional antes de "Features" -->
        <v-list-item class="mt-4" />
        <v-list-item to="/dashboard/features" class="feature-item">
          <v-list-item-action>
            <v-img src="/sideBar/Billing.png" alt="icon" class="sidebar-icon" />
          </v-list-item-action>
          <v-list-item-content class="feature-content">
            <v-list-item-title class="white--text">
              Features
            </v-list-item-title>
            <span class="new-badge">NEW</span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main>
      <v-container style="margin-top: 20px;">
        <v-app-bar app flat>
          <v-toolbar flat>
            <v-btn text color="blue" style="margin-right: 10px;" @click="exportarEstudiantesCSV">
              <span style="color: blue; text-transform: none;">
                Export CSV
              </span>
            </v-btn>
            <v-btn color="blue" @click="showNuevoEstudiante = true">
              <span style="color: white; text-transform: none;">
                Add Students
              </span>
            </v-btn>
            <v-spacer />
            <v-icon left>
              mdi-bell
            </v-icon>
            <v-btn text color="blue" style="text-align: right; margin-right: 50px;" @click="logout">
              <span style="color: black; text-transform: none;">
                Log out
              </span>
            </v-btn>
          </v-toolbar>
        </v-app-bar>

        <v-row style="margin-top: 20px;">
          <template v-if="students.length === 0">
            <v-col cols="12" class="no-students-container">
              <div class="no-students-content">
                <img :src="noStudents" alt="No Students" class="no-students-image">
                <div class="no-students-text">
                  No students at this time
                </div>
                <div class="no-students-subtext">
                  Students will appear here after they enroll in your school.
                </div>
              </div>
            </v-col>
          </template>

          <template v-else>
            <v-col cols="1">
              <v-select
                v-model="filter"
                :items="filterOptions"
                label="Filter"
                outlined
                dense
                disabled
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="search"
                prepend-inner-icon="mdi-magnify"
                label="Search for a student by name or email"
                outlined
                hide-details
              />
            </v-col>
          </template>
        </v-row>

        <v-row>
          <template v-if="students.length > 0">
            <v-col cols="8" class="table-container">
              <v-data-table
                :headers="headers"
                :items="filteredStudents"
                elevation="0"
                hide-default-header
                hide-default-footer
                item-value="id"
                class="custom-table"
                disable-pagination
                :items-per-page="-1"
              >
                <template #item="{ item, index }">
                  <tr
                    :class="{'row-hover': hoveredRow === index, 'row-selected': selectedRow === item.id}"
                    @mouseover="hoveredRow = index"
                    @mouseleave="hoveredRow = null"
                    @click="selectRow(item)"
                  >
                    <td class="student-cell">
                      <div class="student-cell-content">
                        <img :src="getAvatarUrl(item.id)" alt="avatar" class="avatar">
                        <span>{{ item.fullName }}</span>
                      </div>
                    </td>
                    <td class="student-cell">
                      {{ item.id }}
                    </td>
                    <td class="student-cell">
                      {{ item.email }}
                    </td>
                    <td class="student-cell">
                      {{ item.className }}
                    </td>
                    <td class="student-cell">
                      {{ item.gender }}
                    </td>
                  </tr>
                </template>
                <template #header="{ props }">
                  <tr class="student-header">
                    <th v-for="header in props.headers" :key="header.text" class="student-header-cell">
                      {{ header.text }}
                    </th>
                  </tr>
                </template>
              </v-data-table>
            </v-col>

            <v-col cols="4" class="card-container">
              <v-card v-if="selectedStudent" class="mx-auto" max-width="313" flat>
                <v-card-title class="text-center">
                  <div class="text-center" style="width: 95%; font-size: 16px; color: #424242; font-weight: 500; font-family: 'Kumbh Sans', sans-serif;">
                    {{ selectedStudent.id }}
                  </div>
                </v-card-title>
                <v-card-text class="text-center">
                  <div style="text-align: center;">
                    <img :src="getAvatarUrl(selectedStudent.id)" alt="avatar" class="avatar" style="width: 180px; height: 180px; font-size: 16px;">
                    <div style="font-family: 'Kumbh Sans', sans-serif; font-weight: 700; font-size: 18px; color:#1A1A1A; padding-top: 15px; padding-bottom: 6px;">
                      {{ selectedStudent.fullName }}
                    </div>
                    <div>{{ selectedStudent.className }}</div>
                    <div class="icons" style="padding-top: 14px; padding-bottom: 30px; display: flex; justify-content: center;">
                      <div class="icon-container" @mouseenter="showTooltip('className')" @mouseleave="hideTooltip">
                        <v-icon>mdi-teach</v-icon>
                        <div v-if="tooltipVisible && tooltipType === 'className'" class="tooltip">
                          {{ selectedStudent.className }}
                        </div>
                      </div>
                      <div class="icon-container" @mouseenter="showTooltip('phoneNumber')" @mouseleave="hideTooltip">
                        <v-icon>mdi-phone</v-icon>
                        <div v-if="tooltipVisible && tooltipType === 'phoneNumber'" class="tooltip">
                          {{ selectedStudent.phoneNumber }}
                        </div>
                      </div>
                      <div class="icon-container" @mouseenter="showTooltip('email')" @mouseleave="hideTooltip">
                        <v-icon>mdi-email</v-icon>
                        <div v-if="tooltipVisible && tooltipType === 'email'" class="tooltip">
                          {{ selectedStudent.email }}
                        </div>
                      </div>
                    </div>
                    <div class="about-section">
                      About
                    </div>
                    <div style="text-align: justify;">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus officiis obcaecati fugiat dolorem dicta adipisci natus dignissimos officia unde sequi reprehenderit ipsum expedita omnis, nihil vitae architecto nulla cum eaque?
                    </div>
                    <div class="info-section">
                      <div class="info-item">
                        <div class="info-label" style="font-weight: 600;">
                          Age
                        </div>
                        <div style="font-size: 14px; font-weight: 500;">
                          {{ selectedStudent.age }}
                        </div>
                      </div>
                      <div class="info-item">
                        <div class="info-label" style="font-weight: 600;">
                          Gender
                        </div>
                        <div>{{ selectedStudent.gender }}</div>
                      </div>
                    </div>
                    <div class="about-section">
                      People from the same class
                    </div>
                    <div class="same-class">
                      <div class="avatars">
                        <img
                          v-for="(student, index) in firstFiveClassmates"
                          :key="student.id"
                          :src="getAvatarUrl(student.id)"
                          alt="avatar"
                          class="avatar-small"
                          :style="{ zIndex: index }"
                        >
                      </div>
                      <div v-if="remainingClassmatesCount > 0" class="extra-count">
                        +{{ remainingClassmatesCount }} more
                      </div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </template>
        </v-row>

        <v-dialog v-model="showNuevoEstudiante" max-width="1100" persistent @click:outside="closeDialog">
          <v-card style="overflow: hidden; width: 100%; height: 90vh; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 50px;">
            <v-card-title class="text-h4" style="text-align: left; width: 100%;">
              &nbsp;&nbsp;Add Students
            </v-card-title>
            <v-card-title class="text-h5" style="text-align: left; width: 100%; margin-bottom: 20px;">
              &nbsp;&nbsp;&nbsp;Manually&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Import CSV
            </v-card-title>
            <v-card-text style="width: 100%; display: flex; justify-content: left;">
              <v-form ref="formNuevoEstudiante" v-model="validFormNuevoEstudiante" style="width: 80%;">
                <v-container>
                  <v-row>
                    <v-col cols="4">
                      Name
                      <v-text-field
                        v-model="fullNameNuevoEstudiante"
                        :rules="[v => !!v || 'Field is required']"
                        outlined
                        type="text"
                        style="margin-bottom: 20px;"
                      />
                    </v-col>
                    <v-col cols="4">
                      &nbsp;
                      <v-select
                        v-model="classNameNuevoEstudiante"
                        :rules="[v => !!v || 'Field is required']"
                        outlined
                        placeholder="Class"
                        :items="['JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2', 'SS 3']"
                        style="margin-bottom: 20px; margin-left: 20px;"
                      />
                    </v-col>
                    <v-col cols="4">
                      &nbsp;
                      <v-select
                        v-model="genderNuevoEstudiante"
                        :rules="[v => !!v || 'Field is required']"
                        outlined
                        placeholder="Gender"
                        :items="['Male', 'Female', 'Other']"
                        style="margin-bottom: 20px; margin-left: 20px;"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      Email address
                      <v-text-field
                        v-model="emailNuevoEstudiante"
                        :rules="emailValidation"
                        outlined
                        type="email"
                        style="margin-bottom: 20px;"
                      />
                    </v-col>
                    <v-col cols="6">
                      Phone number
                      <v-text-field
                        v-model="phoneNumberNuevoEstudiante"
                        :rules="[v => !!v || 'Field is required']"
                        outlined
                        type="text"
                        style="margin-bottom: 20px;"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      Password
                      <v-text-field
                        v-model="passwordNuevoEstudiante"
                        :rules="passwordValidation"
                        outlined
                        type="password"
                        style="margin-bottom: 20px;"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>

            <v-card-actions style="width: 100%; display: flex; justify-content: center; margin-left: 40px;">
              <v-row style="width: 80%;">
                <v-col cols="2">
                  <v-btn
                    plain
                    block
                    color="white"
                    style="border: none; display: flex; align-items: center; justify-content: center;"
                    @click="addAnother"
                  >
                    <span style="color: black; text-transform: none;">
                      + Add Another
                    </span>
                  </v-btn>
                </v-col>
                <v-col cols="2">
                  <v-btn flat block color="#d3d3d3" style="border: none; display: flex; align-items: center; justify-content: center;" @click="agregarEstudiante">
                    <span style="color: black; text-transform: none;">
                      Add Student
                    </span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>

    <!-- Pie de página -->
    <v-footer app>
      <v-row align="center">
        <v-col>
          <span>&copy; {{ new Date().getFullYear() }} Mi Aplicación</span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      miniVariant: false,
      title: 'CRUD con Firebase y Nuxt.js',
      showAlert: false,
      mensaje: '',
      color: '',
      type: '',
      items: [
        {
          img: '/sideBar/home-2.png',
          title: 'Dashboard',
          to: '/dashboard',
          active: false,
          subItems: []
        },
        {
          img: '/sideBar/home-2.png',
          title: 'Teachers',
          to: '/dashboard/teachers',
          active: false,
          subItems: [
            { title: 'All teachers' },
            { title: 'Add teachers' },
            { title: 'Teachers details' }
          ]
        },
        {
          img: '/sideBar/school.png',
          title: 'Students/ classes',
          to: '/dashboard/students',
          active: false,
          subItems: [
            { title: 'All students' },
            { title: 'Admission form' },
            { title: 'Student promotion' },
            { title: 'Class' }
          ]
        },
        {
          img: '/sideBar/Billing.png',
          title: 'Billing',
          to: '/dashboard/billing',
          active: false,
          subItems: [
            { title: 'Student Billing' },
            { title: 'Parent Billing' },
            { title: 'School billing' },
            { title: 'Friends Billing' }
          ]
        },
        {
          img: '/sideBar/Settings.png',
          title: 'Setting and Profile',
          to: '/dashboard/settings',
          active: false,
          subItems: []
        },
        {
          img: '/sideBar/Exams.png',
          title: 'Exams',
          to: '/dashboard/exams',
          active: false,
          subItems: []
        }
      ],
      headers: [
        {
          text: 'Nombre Completo',
          align: 'left',
          sortable: true,
          value: 'fullName'
        },
        {
          text: 'Student ID',
          align: 'left',
          sortable: true,
          value: 'id'
        },
        {
          text: 'Correo electrónico',
          align: 'left',
          sortable: true,
          value: 'email'
        },
        {
          text: 'Clase',
          align: 'left',
          sortable: true,
          value: 'className'
        },
        {
          text: 'Género',
          align: 'left',
          sortable: true,
          value: 'gender'
        }
      ],
      token: null,
      students: [],
      search: '',
      filterOptions: ['Option1', 'Option2'],
      showNuevoEstudiante: false,
      validFormNuevoEstudiante: false,
      fullNameNuevoEstudiante: '',
      emailNuevoEstudiante: '',
      passwordNuevoEstudiante: '',
      classNameNuevoEstudiante: '',
      genderNuevoEstudiante: '',
      phoneNumberNuevoEstudiante: '',
      hoveredRow: null,
      selectedRow: null,
      selectedStudent: null,
      tooltipVisible: false,
      tooltipType: null,
      passwordValidation: [
        v => (v && v.length > 8) || 'Password must have more than 8 chars'
      ],
      emailValidation: [
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
    filteredStudents () {
      const searchTerm = this.search.toLowerCase()
      return this.students.filter((student) => {
        return (
          student.fullName.toLowerCase().includes(searchTerm) ||
          student.email.toLowerCase().includes(searchTerm)
        )
      })
    },
    filteredClassmates () {
      if (!this.selectedStudent) {
        return []
      }
      return this.students.filter(
        student =>
          student.className === this.selectedStudent.className &&
          student.id !== this.selectedStudent.id
      )
    },
    firstFiveClassmates () {
      return this.filteredClassmates.slice(0, 5)
    },
    remainingClassmatesCount () {
      return this.filteredClassmates.length - 5
    }
  },
  mounted () {
    this.token = localStorage.getItem('token')
    if (!this.token) {
      this.$router.push('/')
    }
    this.getAllStudents()
  },
  created () {
    this.$nuxt.$on('evento', (data) => {
      this.mensaje = data.message
      this.color = data.color
      this.type = data.type
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, data.time || 4000)
    })
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/')
    },
    navigateTo (route) {
      this.$router.push(route)
    },
    getAllStudents () {
      const url = '/students/getAllStudents'
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
      this.$axios
        .get(url, config)
        .then((res) => {
          if (res.data.message === 'Success') {
            this.students = res.data.students
          } else if (res.data.message === 'Invalid Token') {
            this.$router.push('/')
          }
        })
        .catch((err) => {
          this.$router.push('/')
          console.log(err)
        })
    },
    getAvatarUrl (id) {
      const hash = this.hashCode(id)
      const avatarId = hash % 70
      return `https://i.pravatar.cc/208?img=${avatarId + 1}`
    },
    hashCode (str) {
      let hash = 0
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i)
        hash = (hash * 32) - hash + char
        hash |= 0
      }
      return Math.abs(hash)
    },
    closeDialog () {
      this.showNuevoEstudiante = false
    },
    selectRow (student) {
      this.selectedRow = student.id
      this.selectedStudent = student
      this.hoveredRow = null
    },
    showTooltip (type) {
      this.tooltipType = type
      this.tooltipVisible = true
    },
    hideTooltip () {
      this.tooltipVisible = false
      this.tooltipType = null
    },
    agregarEstudiante () {
      this.validFormNuevoEstudiante = this.$refs.formNuevoEstudiante.validate()
      if (this.validFormNuevoEstudiante) {
        const sendData = {
          id: Date.now().toString(),
          fullName: this.fullNameNuevoEstudiante,
          email: this.emailNuevoEstudiante,
          className: this.classNameNuevoEstudiante,
          gender: this.genderNuevoEstudiante,
          phoneNumber: this.phoneNumberNuevoEstudiante,
          password: this.passwordNuevoEstudiante
        }
        const config = {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        }
        const url = '/students/addStudent'
        this.$axios
          .post(url, sendData, config)
          .then((res) => {
            if (res.data.message === 'Student added successfully') {
              this.getAllStudents()
              this.showNuevoEstudiante = false
            }
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        alert('Faltan Datos')
      }
    },
    addAnother () {
      this.validFormNuevoEstudiante = this.$refs.formNuevoEstudiante.validate()
      if (this.validFormNuevoEstudiante) {
        const sendData = {
          id: Date.now().toString(),
          fullName: this.fullNameNuevoEstudiante,
          email: this.emailNuevoEstudiante,
          className: this.classNameNuevoEstudiante,
          gender: this.genderNuevoEstudiante,
          phoneNumber: this.phoneNumberNuevoEstudiante,
          password: this.passwordNuevoEstudiante
        }
        const config = {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        }
        const url = '/students/addStudent'
        this.$axios
          .post(url, sendData, config)
          .then((res) => {
            if (res.data.message === 'Student added successfully') {
              this.getAllStudents()
              this.fullNameNuevoEstudiante = ''
              this.emailNuevoEstudiante = ''
              this.passwordNuevoEstudiante = ''
              this.classNameNuevoEstudiante = ''
              this.genderNuevoEstudiante = ''
              this.phoneNumberNuevoEstudiante = ''
            }
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        alert('Faltan Datos')
      }
    },
    exportarEstudiantesCSV () {
      const url = '/students/exportAllStudentsToCSV'
      const config = {
        headers: { Authorization: `Bearer ${this.token}` },
        responseType: 'blob'
      }
      this.$axios.get(url, config)
        .then((res) => {
          if (res.data instanceof Blob) {
            const fileUrl = window.URL.createObjectURL(new Blob([res.data]))
            const link = document.createElement('a')
            link.href = fileUrl
            link.setAttribute('download', 'students.csv')
            document.body.appendChild(link)
            link.click()
            window.URL.revokeObjectURL(fileUrl)
          } else {
            console.error('Error al exportar estudiantes a CSV:', res.data.message)
          }
        })
        .catch((err) => {
          console.error('Error al exportar estudiantes a CSV:', err)
        })
    },
    handleFileChange (event) {
      if (event.target.files.length > 0) {
        this.selectedFile = event.target.files[0]
      } else {
        console.error('No se seleccionó ningún archivo.')
      }
    },
    importStudents () {
      if (!this.selectedFile) {
        console.error('No file selected')
        return
      }
      const formData = new FormData()
      formData.append('file', this.selectedFile)
      this.$axios.post('/students/importStudentsFromCSV', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${this.token}`
        }
      })
        .then((res) => {
          if (res.data.success) {
            console.log('Students imported successfully')
            this.getAllStudents()
          } else {
            console.error('Error importing students:', res.data.message)
          }
        })
        .catch((err) => {
          console.error('Error importing students:', err)
        })
    }
  }
}
</script>

<style scoped>
/* Estilos específicos del layout */
#app {
  min-height: 100vh;
}

.custom-background {
  background: #152259 !important;
}

.sidebar-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.ellipse-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.logo-container {
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
}

.new-badge {
  background-color: #add8e6;
  color: #00008b;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10%;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
}

.feature-item {
  margin-top: 20px;
}

.feature-content {
  display: flex;
  align-items: center;
}

/* Ajustes de la barra de navegación */
.v-navigation-drawer .v-list-item__icon {
  margin-right: 0.5rem;
}

.v-navigation-drawer .v-list-item__title {
  font-size: 14px;
}

.v-list-item:hover {
  background-color: #1a2b5f !important;
}

.submenu-icon {
  margin-left: -10px;
  color: #fff;
}

/* Ajustes de la barra de aplicación */
.v-toolbar__title {
  font-size: 18px;
}

/* Ajustes del pie de página */
.v-footer {
  padding: 10px;
  background-color: #424242;
  color: white;
}

.student-table {
  font-weight: 500;
  padding: 16px;
  font-family: 'Kumbh Sans', sans-serif;
  color: #4F4F4F;
}

.v-app-bar {
  background-color: white !important;
}

.student-header {
  background-color: #f5f5f5;
}

.student-header-cell {
  font-weight: 700;
  padding: 16px;
  text-align: left;
  font-size: 14px;
  color: #4F4F4F;
}

.student-cell {
  color: #4F4F4F;
}

.student-cell-content {
  display: flex;
  align-items: center;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
}

.avatar-small {
  width: 37px;
  height: 37px;
  border-radius: 50%;
  margin-right: -8px;
  position: relative;
}

.cell-text {
  color: inherit;
}

.row-hover {
  background-color: #D5E7F6 !important;
}

.row-selected {
  background-color: #509CDB !important;
  color: white !important;
}

.row-selected .student-cell,
.row-selected .student-cell .cell-text {
  color: white !important;
}

.v-data-table tbody tr {
  cursor: pointer;
  color: #4F4F4F;
  height: 55px;
  line-height: 55px;
}

.icons {
  margin-top: 16px;
}

.icon {
  width: 50px;
  height: 50px;
  margin: 0 8px;
  padding: 10px;
}

.icon-container {
  position: relative;
}

.tooltip {
  position: absolute;
  font-family: 'Kumbh Sans', sans-serif;
  color: #4F4F4F;
  padding: 5px;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 10;
}

.about-section {
  font-family: 'Kumbh Sans', sans-serif;
  color: black;
  font-weight: bold;
  font-size: 12px;
  text-align: left;
  margin: 12px 0;
}

.info-section {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  text-align: left;
  font-family: 'Kumbh Sans', sans-serif;
}

.info-item {
  width: 50%;
  font-family: 'Kumbh Sans', sans-serif;
}

.info-label {
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 600;
  font-size: 12px;
  padding-bottom: 3px;
  color: #1A1A1A;
}

.same-class {
  display: flex;
  align-items: center;
}

.avatars {
  display: flex;
  position: relative;
}

.extra-count {
  margin-left: 20px;
  font-size: 10px;
  color: #73B0E2;
}

.table-container {
  margin-right: 0px;
}

.card-container {
  margin-left: 0px;
}

.no-students-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  text-align: center;
}

.no-students-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.no-students-image {
  width: 380px;
  margin-bottom: 16px;
}

.no-students-text {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: #4F4F4F;
  margin-bottom: 8px;
}

.no-students-subtext {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #4F4F4F;
}

.v-toolbar {
  background-color: white;
}
</style>
