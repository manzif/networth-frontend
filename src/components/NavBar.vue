<template>
  <nav>
    <v-app-bar
      flat
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Net</span>
        <span>Worth</span>
      </v-toolbar-title>
      <v-spacer />
      <!-- dropdown menu -->

      <v-menu
        offset-y
        transition="slide-x-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            slot="activator"
            text
            color="grey"
            v-on="on"
          >
            <span>Menu</span>
            <v-icon right>
              mdi-menu-down
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        text
        color="grey"
        @click="logout"
      >
        <span>Sign-out</span>
        <v-icon right>
          mdi-exit-to-app
        </v-icon>
      </v-btn>
    </v-app-bar>
    <!-- navigation -->

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-layout
        column
        align-center
      >
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img
              class="text-lg-center"
              src="/avatar-6.jpg"
            >
          </v-avatar>
          <p class="grey--text subheading mt-1">
            {{ loggedInUser.email }}
          </p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <Popup />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Popup from './Popup'
export default {
    name: 'Navbar',
    components: { Popup },
    data () {
        return {
            drawer: false,
            links: [
                { text: 'My Files', icon: 'mdi-view-dashboard', route: '/' },
                { text: 'Shared with me', icon: 'mdi-account-multiple', route: '/home' },
                { text: 'Starred', icon: 'mdi-star', route: '/about' },
                { text: 'Table', icon: 'mdi-star', route: '/table' }
            ],
            mini: true,
        }
    },
    computed: mapGetters(['loggedInUser']),
    created() {
    console.log('\n\n\n\n\n', 'turahari')
  },
    methods:  mapActions(['logout'])

}
</script>