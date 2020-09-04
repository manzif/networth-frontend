<template>
  <v-container
    fill-height
    fluid
  >
    <div class="mx-12">
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="7"
          sm="6"
        >
          <h2
            class="pb-1"
            color="#0087ff"
          >
            Create an App to be used in transactions.
          </h2>
          <div class="line" />
          <h4 class="my-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
            suscipit a. Debitis placeat asperiores corrupti dolores? Vel
            voluptatibus aut animi, quas doloribus, itaque molestiae ipsum
            officia at natus mollitia iure?
          </h4>
          <v-btn
            class=""
            color="#0087ff"
            outlined
            to="/user/apps"
            nuxt
          >
            <v-icon>mdi-play</v-icon> create Account
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="5"
          sm="6"
        >
          <v-form
            ref="form"
            v-model="isFormValid"
            :lazy-validation="lazy"
          >
            <v-flex
              xs12
              md12
              class="pb-7"
            >
              <h2 class="headline black--text pb-1 font-weight-bold">
                Login
              </h2>
              <div class="line" />
            </v-flex>
            <v-flex
              xs12
              md12
            >
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
            </v-flex>
            <v-flex
              xs12
              md12
            >
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
            </v-flex>
            <v-flex
              xs12
              md12
            >
              <v-btn
                :loading="isLoading"
                :disabled="isDisabled"
                color="primary"
                block
                @click="createApp"
              >
                Create
              </v-btn>
            </v-flex>
          </v-form>
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