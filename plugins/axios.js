export default function ({ $axios }) {
  $axios.setBaseURL('http://localhost:6010') // Cambia a la URL de tu backend

  $axios.onRequest((config) => {
    config.headers.common['Content-Type'] = 'application/json'
  })
}
