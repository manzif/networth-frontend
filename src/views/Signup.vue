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
            align-self="center"
          >
            <div class="create-center mb-1">
              <v-list-item-content class="pb-0 mb-3">
                <h2 class="mb-5">
                  Welcome to Networth
                </h2>
                <h4 class="mb-1 font-italic">
                  Already have an account ?
                </h4>
              </v-list-item-content>
              <v-btn
                class="mb-7 text-lowercase"
                outlined
                color="primary"
                to="/login"
              >
                Login
              </v-btn>
              <div class="create-center">
                or signup with
                <v-btn
                  class="mx-2"
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
                  class="mx-2"
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
                  class="mx-2"
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
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            sm="12"
            class="mt-10"
          >
            <v-row align="center" justify="center">
              <v-col
                cols="8"
                md="8"
                sm="8"
                class="mt-10 mb-2"
              >
                <v-layout py-3>
                  <div class="text-center">
                    <h2>Create Account</h2>
                  </div>
                </v-layout>
                <v-card-text class="px-0">
                  <v-form :lazy-validation="true">
                    <v-text-field
                      ref="username"
                      v-model="username"
                      :rules="emailRules"
                      name="login"
                      label="Username"
                      type="text"
                      outlined
                      dense
                      required
                    />
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
                    class="text-lowercase"
                    color="primary mb-1"
                    @click="login"
                  >
                    Signup
                  </v-btn>
                </v-card-actions>
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
    background-color: #0087ff;
    height: 100vh;
}
.create-center {
  text-align: center;
}
</style>