<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">
      Table
    </h1>

    <v-container class="my-5">
      <!-- Top of the table -->
      <v-layout
        row
        wrap
        class="pa-3 mb-3"
        justify-center
      >
        <v-flex
          xs12
          md3
        >
          <div class="subheading grey--text">
            11 Users
          </div>
        </v-flex>
        <v-flex
          xs12
          md6
        >
          <v-text-field
            v-model="searchQuery"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-flex>
        <v-flex
          xs12
          md3
        >
          <div>
            <v-btn class="primary">
              Add New user
            </v-btn>
          </div>
        </v-flex>
      </v-layout>

      <v-card text>
        <v-expansion-panels v-if="projects.length">
          <v-expansion-panel
            v-for="project in resultQuery"
            :key="project.title"
          >
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              <v-layout
                row
                wrap
                :class="`pa-3 project ${project.status}`"
              >
                <v-flex
                  xs12
                  md6
                >
                  <div class="caption grey--text">
                    Project title
                  </div>
                  <div>{{ project.title }}</div>
                </v-flex>
                <v-flex
                  xs6
                  sm4
                  md2
                >
                  <div class="caption grey--text">
                    Person
                  </div>
                  <div>{{ project.person }}</div>
                </v-flex>
                <v-flex
                  xs6
                  sm4
                  md2
                >
                  <div class="caption grey--text">
                    Due by
                  </div>
                  <div>{{ project.due }}</div>
                </v-flex>
                <v-flex
                  xs2
                  sm4
                  md2
                >
                  <div
                    id="chipColor"
                    class="right"
                  >
                    <v-chip
                      small
                      :class="`${project.status} white--text caption my-2`"
                    >
                      {{ project.status }}
                    </v-chip>
                  </div>
                </v-flex>
              </v-layout>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card>
                <v-card-text class="px-4 grey--text">
                  <div class="font-weight-bold">
                    Due by
                  </div>
                  <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, possimus ipsa. Error alias similique explicabo corrupti soluta eligendi a aliquid rem quae, ullam dolorum! Temporibus minima accusamus fuga tenetur non!</div>
                </v-card-text>
              </v-card> 
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-divider />
        </v-expansion-panels>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery:'',
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  computed: {
    resultQuery(){
      if(this.searchQuery){
      return this.projects.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.status.toLowerCase().match(v) || 
        item.person.toLowerCase().match(v) || 
        item.title.toLowerCase().match(v))
      })
      }else{
        return this.projects;
      }
    }
  }
}
</script>

<style>
.project.complete{
  border-left: 4px solid green;
}
.project.ongoing{
  border-left: 4px solid #ffaa2c;
}
.project.overdue{
  border-left: 4px solid red;
}
#chipColor .complete{
  background-color: green;
}
#chipColor .ongoing{
  background: #ffaa2c;
}
#chipColor .overdue{
  background: red;
}
</style>