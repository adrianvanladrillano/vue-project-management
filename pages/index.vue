<template>
  <div>
    <v-row>
      <v-col cols="12" xl="9" style="background: #fff" class="px-10">
        <v-row class="mx-1 pt-7">
          <v-col cols="12" xl="8">
            <CardTitle
              heading="Welcome back, Adrian"
              subheading="Something here.."
            />
          </v-col>

          <v-col cols="12" xl="4">
            <v-text-field
              solo
              background-color="#F7F7F7"
              prepend-inner
              prepend-inner-icon="mdi-magnify"
              v-model="search"
              rounded
              flat
              block
              label="Search everything here..."
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- <v-row class="mx-1 mt-5">
          <v-col cols="12" xl="12">
            <v-card class="px-5 py-5">
              <Greeting heading="Adrian Van" subheading="Lorem ipsum dolor sit amet." />
            </v-card>
          </v-col>
        </v-row>-->
        <v-row class="mx-1 mt-">
          <v-col v-for="t in test" :key="t">
            <v-card class="px-2 py-2">
              <v-row align="center" justify="center">
                <v-col xl="7">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-subtitle>
                        <h3 class="font-weight-regular" style="opacity: 0.75">
                          {{ t.name }}
                        </h3>
                      </v-list-item-subtitle>
                      <v-list-item-title class="my-1">
                        <h1 class="font-weight-medium">{{ t.value }}</h1>
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        <p class="font-weight-regular black--text">
                          + {{ t.bottom }}
                        </p>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col>
                  <v-icon x-large color="primary">{{ t.icon }}</v-icon>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mx-1 mt-5">
          <v-col cols="12" xl="8">
            <div>
              <v-btn-toggle
                class="float-right"
                v-model="toggled"
                style="
                  border: 4px solid #f6f6f6;
                  border-top-left-radius: 12px;
                  border-bottom-left-radius: 12px;
                  border-top-right-radius: 12px;
                  border-bottom-right-radius: 12px;
                  background: #f4f4f4;
                "
              >
                <v-btn
                  style="border: 0; border-radius: 12px"
                  :class="toggled == 0 ? 'white--text primary px-5' : 'px-5'"
                  small
                  >Day</v-btn
                >
                <v-btn
                  style="border: 0; border-radius: 12px"
                  :class="toggled == 1 ? 'white--text primary px-5' : 'px-5'"
                  small
                  >Month</v-btn
                >
                <v-btn
                  style="border: 0; border-radius: 12px"
                  :class="toggled == 2 ? 'white--text primary px-5' : 'px-5'"
                  small
                  >Year</v-btn
                >
              </v-btn-toggle>
              <CardHeadingBold
                heading="Total Visitors"
                subheading="Lorem ipsum dolor sit amet."
              />
            </div>
            <v-card class="px-5 py-4">
              <v-img
                style="width: 100%"
                src="https://vuejsexamples.net/wp-content/uploads/2017/11/vue-chartjs.png"
              ></v-img>
            </v-card>
          </v-col>

          <v-col cols="12" xl="4">
            <div>
              <CardHeadingBold
                heading="Portfolio Visitors"
                subheading="Lorem ipsum dolor sit amet."
              />
            </div>
            <v-card>
              <v-date-picker v-model="picker" full-width></v-date-picker>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mx-1 mt-5">
          <v-col cols="12" xl="12">
            <div>
              <CardHeadingBold
                heading="Recent Projects"
                subheading="Lorem ipsum dolor sit amet."
              />
            </div>
            <v-row
              v-for="project in projects.slice(0, 5)"
              :key="project.project_id"
            >
              <v-col xl="12">
                <v-card class="py-3 px-5" @click="something()">
                  <v-row justify="center" align="center">
                    <v-col cols="12" xl="1">
                      <v-avatar size="96">
                        <v-img :src="project.project_logo" />
                      </v-avatar>
                    </v-col>

                    <v-col xl="2">
                      <v-list-item three-line>
                        <v-list-item-content>
                          <v-list-item-title>{{
                            project.project_name
                          }}</v-list-item-title>
                          <v-list-item-subtitle>{{
                            project.project_client
                          }}</v-list-item-subtitle>
                          <v-list-item-subtitle>{{
                            project.project_category
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>

                    <v-col>
                      <v-chip-group
                        active-class="deep-purple accent-4 white--text"
                        column
                      >
                        <v-chip
                          label
                          small
                          color="white lighten-5"
                          class="primary--text"
                        >
                          <v-icon left>mdi-language-html5</v-icon>VueJS
                        </v-chip>

                        <v-chip
                          label
                          small
                          color="white lighten-5"
                          class="primary--text"
                        >
                          <v-icon left>mdi-code-tags</v-icon>NodeJS
                        </v-chip>

                        <v-chip
                          label
                          small
                          color="white lighten-5"
                          class="primary--text"
                        >
                          <v-icon left>mdi-language-css3</v-icon>Vuetify
                        </v-chip>

                        <v-chip
                          label
                          small
                          color="white lighten-5"
                          class="primary--text"
                        >
                          <v-icon left>mdi-database-outline</v-icon>MySql
                        </v-chip>
                      </v-chip-group>
                    </v-col>

                    <v-col cols="12" xl="4">
                      <div class="text-center">
                        <v-progress-linear
                          value="90"
                          height="24"
                          style="border-radius: 12px"
                        >
                          <span class="font-weight-medium white--text"
                            >10/20 Tasks done</span
                          >
                        </v-progress-linear>
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="mx-1">
          <v-col cols="12" xl="6">
            <v-card class="px-5 py-4">
              <v-row>
                <v-col>
                  <CardHeading
                    heading="VUEX Projects"
                    subheading="Lorem ipsum dolor sit amet."
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col>{{ projects }}</v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" xl="6">
            <v-card class="px-5 py-4">
              <v-row>
                <v-col>
                  <CardHeading
                    heading="VUEX Stacks"
                    subheading="Lorem ipsum dolor sit amet."
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col>{{ stacks }}</v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" xl="6">
            <v-card class="px-5 py-4">
              <v-row>
                <v-col>
                  <CardHeading
                    heading="VUEX Tasks"
                    subheading="Lorem ipsum dolor sit amet."
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col>{{ tasks }}</v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" xl="6">
            <v-card class="px-5 py-4">
              <v-row>
                <v-col>
                  <CardHeading
                    heading="VUEX Todo"
                    subheading="Lorem ipsum dolor sit amet."
                  />
                </v-col>
              </v-row>

              <v-row>
                <v-col>{{ todos }}</v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" xl="3" style="padding: 0">
        <v-card class="px-16 py-2 pt-7">
          <v-row>
            <v-col style="background: #e3f2fd; border-radius: 24px">
              <v-list-item two-line style="padding: 0">
                <v-list-item-avatar size="64">
                  <v-img
                    alt="user_avatar"
                    :src="require('../assets/avatar.jpg')"
                    width="500"
                  />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-icon class="float-right" color="primary"
                      >mdi-dots-vertical</v-icon
                    >
                    <h3 class="font-weight-bold">Adrian Van Ladrillano</h3>
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >Fullstack Developer</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-list-item
                two-line
                v-for="q in qwe"
                class="mt-2"
                :key="q.name"
                style="padding-left: 0; padding-right: 0"
              >
                <v-list-item-content>
                  <v-list-item-subtitle>{{ q.name }}</v-list-item-subtitle>
                  <v-list-item-title class="font-weight-black">
                    <h2>{{ q.value }}</h2>
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-btn class="mx-2" fab dark small color="primary">
                    <v-icon dark>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-list-item-avatar>
              </v-list-item>
            </v-col>
          </v-row>

          <v-row class="mt-5">
            <v-col>
              <CardHeadingBold
                heading="Current Tasks"
                subheading="Lorem ipsum dolor sit amet."
              />
              <v-list-item
                two-line
                v-for="task in tasks.slice(0, 5)"
                :key="task.task_id"
                link
                style="padding-left: 0; padding-right: 0"
              >
                <v-list-item-content>
                  <v-list-item-title class="font-weight-medium">{{
                    task.task_name
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    task.task_desc
                  }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-icon large color="primary">mdi-chevron-right</v-icon>
                </v-list-item-avatar>
              </v-list-item>
              <v-btn class="mt-5" outline block color="primary" dark
                >View all tasks</v-btn
              >
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row class="mt-5">
            <v-col>
              <CardHeadingBold
                heading="Current Tasks"
                subheading="Lorem ipsum dolor sit amet."
              />
              <v-list-item
                two-line
                v-for="task in tasks.slice(0, 5)"
                :key="task.task_id"
                link
                style="padding-left: 0; padding-right: 0"
              >
                <v-list-item-content>
                  <v-list-item-title class="font-weight-medium">{{
                    task.task_name
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    task.task_desc
                  }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-icon large color="primary">mdi-chevron-right</v-icon>
                </v-list-item-avatar>
              </v-list-item>
              <v-btn class="mt-5" outline block color="primary" dark
                >View all tasks</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  // Call get_projects on store
  async fetch({ store }) {
    await store.dispatch('projects/get_projects')
    await store.dispatch('projects/get_tasks')
    await store.dispatch('projects/get_todos')
    await store.dispatch('projects/get_stacks')
  },
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      toggled: 1,
      qwe: [
        {
          name: 'Total Projects',
          value: '1,895',
          bottom: '85.98%',
          icon: 'mdi-folder-multiple'
        },
        {
          name: 'Total Todos',
          value: '1,895',
          bottom: '85.26%',
          icon: 'mdi-clipboard-list'
        },
        {
          name: 'Total Tasks',
          value: '1,895',
          bottom: '85.57%',
          icon: 'mdi-clipboard-list'
        }
      ],

      test: [
        {
          name: 'Total Projects',
          value: '1,895',
          bottom: '85.98%',
          icon: 'mdi-folder-multiple'
        },
        {
          name: 'Total Todos',
          value: '1,895',
          bottom: '85.26%',
          icon: 'mdi-clipboard-list'
        },
        {
          name: 'Total Tasks',
          value: '1,895',
          bottom: '85.57%',
          icon: 'mdi-clipboard-list'
        },
        {
          name: 'Task Percent',
          value: '1,895',
          bottom: '85.18%',
          icon: 'mdi-folder-multiple'
        }
      ]
    }
  },
  // Assign get_projects on store
  computed: {
    ...mapState({
      projects: state => {
        return state.projects.projects
      },
      recent_projects: state => {
        return state.projects.recent_projects
      },
      stacks: state => {
        return state.projects.stacks
      },
      tasks: state => {
        return state.projects.tasks
      },
      todos: state => {
        return state.projects.todos
      },
      total_projects: state => {
        return state.projects.total_projects
      },
      total_tasks: state => {
        return state.projects.total_tasks
      },
      total_todos: state => {
        return state.projects.total_todos
      }
    })
  }
}
</script>
