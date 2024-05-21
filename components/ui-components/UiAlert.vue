<template>
  <v-alert
    class="alertClass"
    :dismissible="dismissible"
    :type="type"
    :color="color"
  >
    {{ message }}
  </v-alert>
</template>

<script>
export default {
  props: {
    message: { type: String, default: '' },
    dismissible: { type: Boolean, default: true },
    color: { type: String, default: 'primary' },
    type: { type: String, default: 'success' }
  }
}
</script>

<style scoped>
.alertClass {
  position: absolute !important;
  width: 500px !important;
  right: 10px !important;
  top: 10px !important;
}
</style>
