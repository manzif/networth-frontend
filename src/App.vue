<template>
  <v-app>
    <v-main :is="layout">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
const default_layout = "default"
import NavBar from '@/components/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({
    //
  }),
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + '-layout'
    }
  }
};
</script>
