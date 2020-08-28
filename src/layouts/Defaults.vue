<template>
  <v-app>
    <NavBar />
    <v-main class="grey lighten-4 mx-4 mb-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    NavBar
  },
  computed: mapGetters(['isLoggedIn']),
  data: () => ({
    //
  }),
};
</script>
