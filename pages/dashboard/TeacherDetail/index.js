import Vue from 'vue'
import Router from 'vue-router'
import TeacherDetails from '@/components/TeacherDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard/teacher-details/:id',
      name: 'TeacherDetails',
      component: TeacherDetails,
      props: true
    }
  ]
})
