<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{ teacher.fullName }}
      </v-card-title>
      <v-card-text>
        <v-img :src="teacher.avatarUrl" alt="avatar" class="avatar" />
        <div>ID: {{ teacher.id }}</div>
        <div>Email: {{ teacher.email }}</div>
        <div>Class: {{ teacher.className }}</div>
        <div>Gender: {{ teacher.gender }}</div>
        <div>Phone: {{ teacher.phoneNumber }}</div>
        <div>Subject: {{ teacher.subject }}</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      teacher: {}
    }
  },
  mounted () {
    this.getTeacherDetails()
  },
  methods: {
    getTeacherDetails () {
      const url = `/teachers/getTeacher/${this.id}`
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }
      this.$axios.get(url, config)
        .then((res) => {
          if (res.data.message === 'Success') {
            this.teacher = res.data.teacher
          } else {
            console.error('Failed to fetch teacher details')
          }
        })
        .catch((err) => {
          console.error('Error fetching teacher details:', err)
        })
    }
  }
}
</script>

<style scoped>
.avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
}
</style>
