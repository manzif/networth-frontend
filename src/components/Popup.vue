<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn
        text
        class="success"
        v-on="on"
      >
        Add New Project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field
            v-model="title"
            label="Title"
            :rules="inputRules"
            prepend-icon="mdi-folder"
          />
          <v-textarea
            v-model="content"
            label="Information"
            :rules="inputRules"
            prepend-icon="mdi-briefcase-edit-outline"
          />

          <v-menu
            v-model="menu"
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                :value="due" 
                clearable
                label="Due date"
                :rules="inputRules"
                prepend-icon="mdi-calendar-range"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="due"
              @change="menu = false"
            />
          </v-menu>

          <v-spacer />

          <v-btn
            text
            class="success mx-0 mt-3"
            @click="submit"
          >
            Add Project
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      menu: false,
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        return 2
      }
    }
  }
}
</script>