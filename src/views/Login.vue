<template>
  <div>
    <v-item-group active-class="secondary">
      <div class="mx-md-12">
        <v-row>
          <v-col
            cols="12"
            md="6"
            sm="12"
            class="mt-10 mb-2"
          >
            <div
              id="signup"
              class="pb-0"
            />
            <div class="text-center">
              <router-link
                to="/signup"
              >
                Create an account
              </router-link>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            sm="12"
            class="mt-10"
          >
            <v-row
              justify="center"
              align="center"
            >
              <v-col
                cols="10"
                md="8"
                sm="6"
                class="mt-4"
              >
                <v-layout>
                  <div class="mb-3 text-center">
                    <h2>Login</h2>
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
                    :loading="isLoading"
                    :disabled="isDisabled"
                    large
                    block
                    color="primary mb-1"
                    class="text-lowercase"
                    @click="login"
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
          </v-col>
        </v-row>
      </div>
    </v-item-group>
  </div>
</template>
<script>
// import finance from ''
export default {
    
}
</script>
<style scoped>
#signup {
    background-image: url('../assets/finance.png') !important;
    background-size: 100%;
    height: 400px;
}
@media (max-width: 600px) {
  #signup {
    height: 300px;
  }
}
</style>