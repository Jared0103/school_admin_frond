<template>
  <v-container class="my-12">
    <h2 class="text-2xl font-semibold mb-4">
      Add Students
    </h2>
    <v-row>
      <v-col cols="6">
        <v-btn :class="tabStyle('manual')" @click="activeTab = 'manual'">
          Manually
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn :class="tabStyle('bulk')" @click="activeTab = 'bulk'">
          Bulk Upload
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div v-if="activeTab === 'manual'">
          <!-- Manual Input Form Component -->
          <ManualInputForm />
        </div>
        <div v-else-if="activeTab === 'bulk'">
          <!-- Bulk Upload Form Component -->
          <BulkUploadForm />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

const TAB_STYLES = {
  base: 'text-zinc-700 font-medium',
  active: 'zinc darken-2'
}

export default {
  data () {
    return {
      activeTab: 'manual'
    }
  },
  mounted () {
    const token = localStorage.getItem('token')
    if (!token) {
      this.$router.push('/')
    }
  },
  methods: {
    tabStyle (tab) {
      return `${TAB_STYLES.base} ${this.activeTab === tab ? TAB_STYLES.active : ''}`
    }
  }
}
</script>

<style scoped>
/* Agregamos algunos estilos personalizados de Vuetify */
.text-zinc-700 {
  color: #A0AEC0; /* Ajusta el color según tu paleta */
}

.zinc {
  color: #4A5568; /* Ajusta el color según tu paleta */
}

.darken-2 {
  filter: brightness(80%);
}
</style>
