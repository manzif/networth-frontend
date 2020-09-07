<template>
  <v-container fluid>
    <div class="mx-12">
        <v-row align="center" justify="center">
          <v-col
            cols="12"
            md="6"
            sm="12"
            class="mb-2"
          >
          <v-layout align-center justify-center>
          <v-flex xs12 sm8 md10>
            <v-img
                  :src="myImage"
                  aspect-ratio="1"
            >
            </v-img>
            <div class="text-center">
              <router-link
                to="/signup"
              >
                Create an account
              </router-link>
            </div>
          </v-flex>
          </v-layout>
          </v-col>
          <v-col
            cols="12"
            md="6"
            sm="12"
            class=""
          >
                <v-layout>
                  <div class="text-center">
                    <h2>Login</h2>
                  </div>
                </v-layout>
                <div class="line" />
                <div class="mb-3"></div>
                <v-layout v-if="errorMessage">
                  <div class="mb-3 text-center">
                    <v-card class="pa-2">
                     <h4 class="red--text">{{ errorMessage }}</h4>
                    </v-card>
                  </div>
                </v-layout>
                <v-card-text class="px-0">
                  <v-form :lazy-validation="true">
                    <v-text-field
                      ref="email"
                      v-model="email"
                      :rules="emailRules"
                      name="login"
                      label="Email Address"
                      type="text"
                      outlined
                      dense
                      required
                    />
                    <v-text-field
                      id="password"
                      ref="password"
                      v-model="password"
                      :rules="passwordRules"
                      :type="showPassword ? 'text' : 'password'"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      name="Password"
                      label="Password"
                      required
                      dense
                      outlined
                      @click:append="showPassword = !showPassword"
                    />
                  </v-form>
                </v-card-text>
                <v-card-actions class="px-0">
                  <v-btn
                    large
                    block
                    color="primary mb-1"
                    class="text-lowercase"
                    @click="loginUser"
                  >
                    Login
                  </v-btn>
                </v-card-actions>
                <router-link
                  to="/forgot-password"
                >
                  Forgot Password
                </router-link>
                <div class="create-center my-5">
                  or login with
                  <v-btn
                    class="mx-3"
                    fab
                    dark
                    small
                    color="#db4437"
                  >
                    <v-icon dark>
                      mdi-email-outline
                    </v-icon>
                  </v-btn>
                  <v-btn
                    class="mx-3"
                    fab
                    dark
                    small
                    color="#1da1f2"
                  >
                    <v-icon dark>
                      mdi-twitter
                    </v-icon>
                  </v-btn>
                  <v-btn
                    class="mx-3"
                    fab
                    dark
                    small
                    color="#212b35"
                  >
                    <v-icon dark>
                      mdi-github
                    </v-icon>
                  </v-btn>
                </div>
          </v-col>
        </v-row>
      </div>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
      return {
        email : '',
        password : '',
        showPassword: false,
        myImage: require('../assets/finance.png'),
        emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [(v) => !!v || 'Password is required']
      }
    },
    computed: {
      ...mapGetters(['errorMessage'])
    },
    methods: {
     ...mapActions(['login']), 
    async loginUser() {
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
        this.email = null
        this.password = null
      } catch (e) {
        return e
      }
    }
    }
}
</script>
<style scoped>
#signup {
    background-image: url('../assets/finance.png') !important;
    background-size: 100%;
    height: 400px;
}
.line {
  width: 63px;
  border-bottom: 5px solid #008000;
  position: absolute;
}
@media (max-width: 600px) {
  #signup {
    /* height: 300px; */
  }
}
</style>