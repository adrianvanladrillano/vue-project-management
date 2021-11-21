<template>
  <div>
    <v-card class="px-5 py-5">
      <v-row>
        <v-col>
          <h1 class="title">Project Details</h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" xl="12">
          <v-row>
            <v-col>{{ projects[project].project_description }}</v-col>
          </v-row>
          <v-row>
            <v-col>
              <span class="grey--text mr-5">Project Category:</span>

              <span class>{{ projects[project].project_category }}</span>
            </v-col>

            <v-col>
              <span class="grey--text mr-5">Project Client:</span>

              <span class>{{ projects[project].project_client }}</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <span class="grey--text mr-5">Start Date:</span>

              <span class>{{ projects[project].project_start }}</span>
            </v-col>

            <v-col>
              <span class="grey--text mr-5">Deadline:</span>

              <span class>{{ projects[project].project_deadline }}</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <span class="grey--text mr-5">Deadline:</span>
              <span class>{{ projects[project].project_dateadded }}</span>
            </v-col>
            <v-col>
              <span class="grey--text mr-5">Project Type:</span>
              <v-chip class="ma-2" color="primary">
                <span class>{{ projects[project].project_tag }}</span>
              </v-chip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    project: {
      type: Number,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      projects: state => {
        return state.projects.projects
      }
    })
  }
}
</script>
