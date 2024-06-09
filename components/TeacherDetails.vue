<template>
  <div>
    <!-- Aquí va el contenido de los detalles del profesor -->
    <h1>Detalles del Profesor</h1>
    <p>ID: {{ id }}</p>
    <div v-if="teacher">
      <p>Nombre: {{ teacher.name }}</p>
      <p>Email: {{ teacher.email }}</p>
      <!-- Agrega más detalles del profesor aquí -->
    </div>
    <div v-else>
      <p>Cargando detalles del profesor...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      teacher: null // Almacena los detalles del profesor
    }
  },
  created () {
    // Llama a la función para cargar los detalles del profesor cuando se crea el componente
    this.fetchTeacherDetails(this.id)
  },
  methods: {
    fetchTeacherDetails (id) {
      // Aquí podrías realizar una llamada a una API para obtener los detalles del profesor
      // Por ejemplo, supongamos que hay una función en tu servicio de API llamada `getTeacherDetails`
      // que devuelve los detalles del profesor basados en su ID.
      // Debes implementar esta función de acuerdo a cómo está estructurada tu API.

      // Ejemplo ficticio de cómo podrías usar una función de servicio de API para obtener los detalles del profesor
      // import { getTeacherDetails } from '@/services/teacherService';
      // getTeacherDetails(id)
      //   .then(response => {
      //     this.teacher = response.data; // Asigna los detalles del profesor a la variable teacher
      //   })
      //   .catch(error => {
      //     console.error('Error al obtener los detalles del profesor:', error);
      //   });

      // En este ejemplo ficticio, estoy simulando una llamada a la API que tarda 1 segundo en completarse
      setTimeout(() => {
        // Supongamos que los detalles del profesor se obtienen correctamente de la API
        const teacherDetails = {
          id,
          name: '',
          email: ''
          // Agrega más detalles aquí si es necesario
        }
        this.teacher = teacherDetails // Asigna los detalles del profesor a la variable teacher
      }, 1000) // Simula un tiempo de espera de 1 segundo
    }
  }
}
</script>
