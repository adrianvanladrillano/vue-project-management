<template>
  <div>
    <v-card class="px-5 py-5" style="background: #fff; height: 100vh; overflow-y: auto;" app>
      <v-row>
        <v-col>
          <CardTitle :heading="heading" :subheading="subheading" />
        </v-col>

        <v-col>
          <v-btn
            class="float-right"
            color="primary"
            v-if="this.showbutton === true"
            @click="$emit('createProject')"
          >New Project +</v-btn>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-row class="mt-4">
        <v-col style="padding-bottom: 0;padding-bottom: 0;">
          <v-text-field
            label="Search here.."
            outlined
            dense
            append-icon="mdi-magnify"
            v-model="search"
          ></v-text-field>
        </v-col>

        <v-col xl="12" style="padding-top: 0;padding-bottom: 0;">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn elevation="0" color="white" dense v-bind="attrs" v-on="on" class="float-right">
                <span class="grey--text font-weight-regular" style="text-transform: none;">Sort by</span>
                <v-icon right color="grey">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item link @click="Sort('project_name')">
                <v-list-item-title>Project name</v-list-item-title>
              </v-list-item>
              <v-list-item link @click="Sort('project_client')">
                <v-list-item-title>Client name</v-list-item-title>
              </v-list-item>
              <v-list-item link @click="Sort('project_category')">
                <v-list-item-title>Category</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>

      <v-row v-for="(project, i) in projects" :key="i" :post="projects">
        <v-col>
          <v-card class="px-2 py-2" @click="$emit('loadProject2', project.project_id)">
            <v-list-item three-line>
              <v-list-item-avatar size="62">
                <v-img style="height: 100%" :src="project.project_logo"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <a class="float-right" depressed dark v-bind="attrs" v-on="on">
                        <v-icon color="primary">mdi-dots-vertical</v-icon>
                      </a>
                    </template>
                    <v-list style="z-index: 999">
                      <v-list-item link>
                        <v-list-item-title>Edit Project</v-list-item-title>
                      </v-list-item>

                      <v-list-item link>
                        <v-list-item-title>Delete Project</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                  <span
                    style="font-weight: 500; opacity: 0.9; font-size: 1.1em"
                  >{{ project.project_name }}</span>
                </v-list-item-title>
                <v-list-item-subtitle>{{ project.project_client }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ project.project_category }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <div style="opacity: 1">
                <v-chip-group class="mx-2" active-class="deep-purple accent-4 white--text" column>
                  <v-chip label small color="white lighten-5" class="primary--text">
                    <v-icon left>mdi-language-html5</v-icon>VueJS
                  </v-chip>

                  <v-chip label small color="white lighten-5" class="primary--text">
                    <v-icon left>mdi-language-css3</v-icon>Vuetify
                  </v-chip>

                  <v-chip label small color="white lighten-5" class="primary--text">
                    <v-icon left>mdi-database-outline</v-icon>MySql
                  </v-chip>
                </v-chip-group>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  props: {
    heading: {
      type: String
    },
    subheading: {
      type: String
    },
    showbutton: {
      type: Boolean
    }
  },
  async fetch({ store }) {
    await store.dispatch('projects/get_projects')
    await store.dispatch('projects/get_stacks')
  },
  methods: {
    Sort(e) {
      this.sortBy = this.sortBy === 'asc' ? 'desc' : 'asc'
      this.$store.commit('projects/SORT_PROJECT', {
        sortBy: this.sortBy,
        prop: e
      })
    }
  },
  // Assign get_projects on store
  computed: {
    ...mapState({
      projects: state => {
        return state.projects.projects
      },
      stacks: state => {
        return state.projects.stacks
      }
    })
  },
  data() {
    return {
      sortBy: 'asc',
      search: ''
    }
  }
}
</script>
