<template>
  <div>
    <v-row>
      <v-col xl="4" style="padding: 0; z-index: 99">
        <aside-projects
          @loadProject2="loadProject2"
          @createProject="newDialog = true"
          heading="Projects"
          subheading="Lorem ipsum dolor sit"
          :showbutton="true"
        />
      </v-col>

      <v-col xl="8" style="background: #f5f6fa; padding: 0">
        <v-row>
          <v-col>
            <v-card class="px-2 py-5" elevation="0" style="border: 1px solid #e3e3e3">
              <v-row>
                <v-col>
                  <v-list-item two-line>
                    <v-list-item-avatar size="100">
                      <v-img :src="this.projects[this.project_index].project_logo" alt />
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title class="headline">
                        {{
                        this.projects[this.project_index].project_name
                        }}
                      </v-list-item-title>
                      <v-list-item-subtitle class="subtitle">
                        {{
                        this.projects[this.project_index].project_category
                        }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-tabs v-model="tab">
                    <v-tab>General Information</v-tab>
                    <v-tab>Tech Stacks</v-tab>
                    <v-tab disabled>Project Statistics</v-tab>
                    <v-tab disabled>Project Timeline</v-tab>
                  </v-tabs>
                </v-col>
              </v-row>
            </v-card>

            <v-tabs-items v-model="tab">
              <v-tab-item style="background: #f5f6fa">
                <v-row class="px-7 pt-7">
                  <v-col cols="12" xl="8">
                    <ProjectGeneralCard :project="parseInt(this.project_index)" />
                  </v-col>

                  <v-col cols="12" xl="4">
                    <v-card class="px-5 py-5">
                      <v-row>
                        <v-col>
                          <h1 class="title">Project Details</h1>
                        </v-col>
                      </v-row>
                      <v-progress-circular
                        class="mt-5"
                        :rotate="-90"
                        style="width: 100%"
                        :size="300"
                        :width="50"
                        :value="50"
                        color="primary"
                      >30 / 50 Tasks</v-progress-circular>
                    </v-card>
                  </v-col>
                </v-row>
                <br />
              </v-tab-item>

              <!-- Tech Tab -->
              <v-tab-item style="background: #f5f6fa">
                <v-row class="px-7 pt-7">
                  <v-col cols="12" xl="8">
                    <v-card class="px-5 py-5">
                      <v-row>
                        <v-col cols="12" xl="12">
                          <v-row>
                            <v-col>
                              <h1 class="title">Development Language</h1>
                              <ProjectStackCard
                                @showDeleteDialog="deleteDialog = true"
                                :project="parseInt(projects[project_index].project_id)"
                              />

                              <v-list two-line>
                                <!-- <ThreeLineCardActions
                                  @showDeleteDialog="deleteDialog = true"
                                  :title="stack.stack_name"
                                  :subheading="stack.stack_author"
                                  :subheader="stack.stack_git"
                                  :actions="stack.stack_name"
                                  :subheader_link="stack.stack_git"
                                  methods="title"
                                  v-for="stack in viewMain"
                                  :key="stack.stack_id"
                                />-->
                              </v-list>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>

                  <v-col cols="12" xl="4">
                    <v-card class="px-5 py-5">
                      <v-row>
                        <v-col>
                          <h1 class="title">Database Engine</h1>
                        </v-col>
                      </v-row>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptate totam, sequi iusto nam quo, rem quasi commodi
                      voluptas hic quis quaerat velit. Dolores assumenda, culpa
                      cumque temporibus doloribus ab dolore.
                    </v-card>
                  </v-col>
                </v-row>

                <v-row class="px-7">
                  <v-col cols="12" xl="8">
                    <v-card class="px-5 py-5">
                      <v-row>
                        <v-col>
                          <h1 class="title">Additional Dependencies</h1>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols="12" xl="12">
                          <v-row>
                            <v-col>
                              <ProjectDependencyCard
                                @showDeleteDialog="deleteDialog = true"
                                :project="parseInt(projects[project_index].project_id)"
                              />
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>

                  <v-col cols="12" xl="4">
                    <v-card class="px-5 py-5">
                      <v-row>
                        <v-col>
                          <h1 class="title">Domain & Hosting</h1>
                        </v-col>
                      </v-row>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptate totam, sequi iusto nam quo, rem quasi commodi
                      voluptas hic quis quaerat velit. Dolores assumenda, culpa
                      cumque temporibus doloribus ab dolore.
                    </v-card>
                  </v-col>
                </v-row>

                <div>
                  <v-row class="px-7">
                    <v-col cols="12" xl="12">
                      <v-card class="px-5 py-5">
                        <v-row>
                          <v-col>
                            <h1 class="title">Database Engines</h1>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Recusandae numquam doloribus ducimus fugiat
                            dolorem illum cupiditate amet assumenda laudantium
                            quidem, sequi dignissimos rem earum id porro iste!
                            Impedit, voluptate eligendi.
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                  </v-row>

                  <v-row class="px-7">
                    <v-col cols="12" xl="12">
                      <v-card class="px-5 py-5">
                        <v-row>
                          <v-col>
                            <h1 class="title">Database Engines</h1>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Recusandae numquam doloribus ducimus fugiat
                            dolorem illum cupiditate amet assumenda laudantium
                            quidem, sequi dignissimos rem earum id porro iste!
                            Impedit, voluptate eligendi.
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>

                <v-row class="px-7">
                  <v-col>
                    <v-card class="px-5 py-5">
                      <v-row>
                        <v-col cols="12" xl="12">
                          <h1 class="title">Collaborators</h1>
                          <!-- 
                          <ThreeLineCardActions
                            @showDeleteDialog="deleteDialog = true"
                            :title="person.title"
                            :subheading="person.subheading"
                            :subheader="person.subheader"
                            :actions="person.actions"
                            methods="title"
                            v-for="person in people"
                            :key="person.title"
                          />-->
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog
      v-model="newDialog"
      hide-overlay
      fullscreen
      max-width="800px"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <!-- Toolbar  -->
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="newDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>New Project</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="newDialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <!-- End of Toolbar  -->
        <v-row>
          <v-col>
            <v-stepper v-model="e6" vertical>
              <v-stepper-step :complete="e6 > 1" step="1">
                Project Type
                <small>Summarize if needed</small>
              </v-stepper-step>

              <v-stepper-content step="1">
                <v-row class="mt-2">
                  <v-col cols="12" xl="6" v-for="card in cards" :key="card.title">
                    <v-card
                      justify-center
                      align-center
                      class
                      elevation="0"
                      style="border: 1px solid #e3e3e3"
                      @click="chooseCategory(card.title)"
                    >
                      <v-list-item two-line>
                        <v-list-item-avatar style size="150">
                          <img
                            src="https://thumbs.dreamstime.com/b/back-end-linear-icon-modern-outline-back-end-logo-concept-wh-back-end-linear-icon-modern-outline-back-end-logo-concept-white-133526061.jpg"
                            alt
                            style="height: 100%"
                          />
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>
                            <h1 class="font-weight-regular">{{ card.title }}</h1>
                          </v-list-item-title>
                          <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-col>
                </v-row>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 2" step="2">
                General Information
                <small>Summarize if needed</small>
              </v-stepper-step>

              <v-stepper-content step="2">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12" xl="9">
                      <v-row class="mt-2">
                        <v-col cols="12" xs="12" lg="6" xl="6">
                          <v-text-field
                            label="Project name"
                            placeholder="E.G. Project Management System"
                            outlined
                            dense
                            v-model="project_name"
                            required
                            :counter="5"
                            :rules="nameRules"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" xl="3">
                          <v-autocomplete
                            outlined
                            dense
                            autocomplete
                            :items="category"
                            placeholder="Project Category"
                            v-model="project_category"
                            :rules="categoryRules"
                            required
                          ></v-autocomplete>
                        </v-col>

                        <v-col cols="12" xl="3">
                          <v-autocomplete
                            outlined
                            dense
                            autocomplete
                            :items="input_tags"
                            placeholder="Project Type"
                            :rules="typeRules"
                            required
                            v-model="project_type"
                          ></v-autocomplete>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col xl="6">
                          <v-text-field
                            label="Client"
                            placeholder="E.G. Adrian Van Ladrillano"
                            outlined
                            dense
                            value="Work"
                            v-model="project_client"
                          ></v-text-field>
                        </v-col>

                        <v-col xl="6">
                          <v-text-field
                            label="Logo"
                            placeholder="E.G. Project Management System"
                            outlined
                            dense
                            value="Work"
                            v-model="project_logo"
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col xl="6">
                          <v-text-field
                            type="date"
                            outlined
                            label="Start Date"
                            dense
                            v-model="project_start"
                          ></v-text-field>
                        </v-col>
                        <v-col xl="6">
                          <v-text-field
                            type="date"
                            outlined
                            label="Deadline"
                            dense
                            v-model="project_deadline"
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col xl="12">
                          <v-textarea
                            outlined
                            label="Project Description"
                            value="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, consectetur aperiam enim nisi obcaecati perferendis explicabo reprehenderit quia officiis aliquid. Sapiente illo facilis tempora nostrum impedit. Repellendus ullam deleniti quisquam?"
                            v-model="project_description"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col xl="3">
                      <img
                        :src="project_logo ? project_logo : 'https://benchmarkingcompany.com/wp-content/uploads/2017/09/500x500.png'"
                        alt
                        style="width: 100%"
                      />
                    </v-col>
                  </v-row>
                </v-form>
                <v-btn color="primary" @click="validateGeneral()">Continue</v-btn>
                <v-btn text @click="e6 = e6 - 1">Back</v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 3" step="3">
                Create project stack
                <small>Lorem ipsum dolor sit amet.</small>
              </v-stepper-step>

              <v-stepper-content step="3">
                <!-- Create Development Language -->
                <v-row class="mt-2">
                  <v-col cols="12" xl="2">
                    <span class style="opacity: 1; font-size: 1.2em">Development Language</span>
                    <p style="opacity: 0.7" class="subtitle-2">This contains something here etc.</p>
                  </v-col>
                  <v-col cols="12" xl="6">
                    <v-autocomplete
                      cache-items
                      v-model="languageInput"
                      :items="items"
                      :loading="isLoading"
                      :search-input.sync="searchLanguage"
                      outlined
                      return-object
                      dense
                      multiple
                      chips
                      item-text="name"
                      label="Main Language"
                    >
                      <template v-slot:item="{ item }">
                        <v-list-item-avatar
                          color="indigo"
                          class="headline font-weight-light white--text"
                        >{{ item.name.charAt(0) }}</v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title v-text="item.name"></v-list-item-title>
                          <v-list-item-subtitle v-text="item.author"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-icon>mdi-bitcoin</v-icon>
                        </v-list-item-action>
                      </template>
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="12" xl="2">
                    <v-autocomplete
                      cache-items
                      v-model="languageTags"
                      :items="tags"
                      :loading="isLoading"
                      outlined
                      dense
                      item-text="name"
                      label="Tag"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" xl="2">
                    <v-btn
                      color="primary"
                      block
                      @click="addDevLanguage(languageInput, languageTags)"
                    >Add</v-btn>
                  </v-col>
                </v-row>

                <v-row class>
                  <v-col cols="12" xl="2"></v-col>
                  <v-col cols="12" xl="10">
                    <v-row>
                      <v-col xl="4" v-for="dItem in developmentItems" :key="dItem.name">
                        <v-card>
                          <v-list two-line>
                            <v-list-item>
                              <v-list-item-avatar>
                                <v-img
                                  src="https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256"
                                  alt
                                />
                              </v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title>
                                  {{
                                  dItem.name
                                  }}
                                </v-list-item-title>

                                <v-list-item-subtitle>
                                  {{
                                  dItem.tag
                                  }}
                                </v-list-item-subtitle>
                                <v-list-item-subtitle class="text--primary">
                                  <a
                                    href="https://github.com/vuejs/vue"
                                    class="text-decoration-none"
                                  >{{ dItem.input }}</a>
                                </v-list-item-subtitle>
                              </v-list-item-content>

                              <v-list-item-action>
                                <v-list-item-action-text>VueJS</v-list-item-action-text>

                                <v-icon v-if="!active" color="grey lighten-1">mdi-trash-can-outline</v-icon>

                                <v-icon v-else color="error">mdi-trash-can</v-icon>
                              </v-list-item-action>
                            </v-list-item>
                          </v-list>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <!-- End Create Development Language -->

                <!-- Create Additional Dependencies -->
                <v-row class="mt-5">
                  <v-col cols="12" xl="2">
                    <span class style="opacity: 1; font-size: 1.2em">Additional Dependencies</span>
                    <p style="opacity: 0.7" class="subtitle-2">This contains something here etc.</p>
                  </v-col>
                  <v-col cols="12" xl="6">
                    <v-autocomplete
                      cache-items
                      v-model="dependencyInput"
                      :items="items"
                      :loading="isLoading"
                      :search-input.sync="searchDependency"
                      outlined
                      return-object
                      dense
                      multiple
                      chips
                      item-text="name"
                      label="Main Language"
                    >
                      <template v-slot:item="{ item }">
                        <v-list-item-avatar
                          color="indigo"
                          class="headline font-weight-light white--text"
                        >{{ item.name.charAt(0) }}</v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title v-text="item.name"></v-list-item-title>
                          <v-list-item-subtitle v-text="item.author"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-icon>mdi-bitcoin</v-icon>
                        </v-list-item-action>
                      </template>
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="12" xl="2">
                    <v-autocomplete
                      cache-items
                      v-model="depedencyTags"
                      :items="tags"
                      :loading="isLoading"
                      outlined
                      dense
                      item-text="name"
                      label="Tag"
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" xl="2">
                    <v-btn
                      color="primary"
                      block
                      @click="addDepLanguage(dependencyInput, depedencyTags)"
                    >Add</v-btn>
                  </v-col>
                </v-row>

                <v-row class>
                  <v-col cols="12" xl="2"></v-col>
                  <v-col cols="12" xl="10">
                    <v-row>
                      <v-col xl="4" v-for="depItem in dependencyItems" :key="depItem.index">
                        <v-card>
                          <v-list two-line>
                            <v-list-item>
                              <v-list-item-avatar>
                                <v-img
                                  src="https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256"
                                  alt
                                />
                              </v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title>VueJS</v-list-item-title>

                                <v-list-item-subtitle>Frontend Framework</v-list-item-subtitle>
                                <v-list-item-subtitle class="text--primary">
                                  <a
                                    href="https://github.com/vuejs/vue"
                                    class="text-decoration-none"
                                  >https://github.com/vuejs/vue</a>
                                </v-list-item-subtitle>
                              </v-list-item-content>

                              <v-list-item-action>
                                <v-list-item-action-text>VueJS</v-list-item-action-text>

                                <v-icon v-if="!active" color="grey lighten-1">mdi-trash-can-outline</v-icon>

                                <v-icon v-else color="error">mdi-trash-can</v-icon>
                              </v-list-item-action>
                            </v-list-item>
                          </v-list>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <!-- End Create Additional Dependencies -->

                <v-row class="mt-5">
                  <v-col cols="12" xl="2">
                    <span class style="opacity: 1; font-size: 1.2em">Database Engine</span>
                    <p style="opacity: 0.7" class="subtitle-2">This contains something here etc.</p>
                  </v-col>
                  <v-col cols="12" xl="4">
                    <v-autocomplete
                      cache-items
                      :items="items"
                      :loading="isLoading"
                      outlined
                      dense
                      v-model="stack_database"
                      multiple
                      chips
                      item-text="name"
                      label="Main Language"
                    >
                      <template v-slot:item="{ item }">
                        <v-list-item-avatar
                          color="indigo"
                          class="headline font-weight-light white--text"
                        >{{ item.name.charAt(0) }}</v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title v-text="item.name"></v-list-item-title>
                          <v-list-item-subtitle v-text="item.author"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-icon>mdi-bitcoin</v-icon>
                        </v-list-item-action>
                      </template>
                    </v-autocomplete>
                  </v-col>
                </v-row>

                <v-row class>
                  <v-col cols="12" xl="2">
                    <span class style="opacity: 1; font-size: 1.2em">Hosting/Servers</span>
                    <p style="opacity: 0.7" class="subtitle-2">This contains something here etc.</p>
                  </v-col>
                  <v-col cols="12" xl="4">
                    <v-autocomplete
                      cache-items
                      :items="items"
                      :loading="isLoading"
                      outlined
                      dense
                      chips
                      v-model="stack_server"
                      item-text="name"
                      label="Hosting/Server"
                    >
                      <template v-slot:item="{ item }">
                        <v-list-item-avatar
                          color="indigo"
                          class="headline font-weight-light white--text"
                        >{{ item.name.charAt(0) }}</v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title v-text="item.name"></v-list-item-title>
                          <v-list-item-subtitle v-text="item.author"></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-icon>mdi-bitcoin</v-icon>
                        </v-list-item-action>
                      </template>
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="12" xl="6">
                    <v-text-field
                      outlined
                      label="Endpoint/Domain name"
                      dense
                      v-model="stack_endpoint"
                      prefix="https://"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-btn @click="createProject()" color="primary">Create Project</v-btn>
                <v-btn text @click="e6 = e6 - 1">Back</v-btn>
              </v-stepper-content>
            </v-stepper>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <v-dialog v-model="deleteDialog" width="500">
      <v-card class="px-5 py-5" dark color="red">
        <v-row>
          <v-col>
            <h3>Are you sure you want to delete?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-btn class="float-right ml-5" outlined>Confirm</v-btn>
            <v-btn class="float-right" plain>Cancel</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>

    <!-- Snackbar -->
    <v-snackbar v-model="snackbar" right :color="snack_color" vertical>
      <h3>{{snack_message}}</h3>
      {{snack_details}}
      <template v-slot:action="{ attrs }">
        <v-btn label text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
    <!-- //Snackbar -->
  </div>
</template>

<script>
import Vuelidate from 'vuelidate'
import moment from 'moment'

import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import axios from 'axios'
import ThreeLineCardActions from '../../components/ThreeLineCardActions.vue'
import { mapState } from 'vuex'
import AsideProjects from '../../components/AsideProjects.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    ThreeLineCardActions,
    AsideProjects
  },
  // Call get_projects on store
  async fetch({ store }) {
    await store.dispatch('projects/get_projects')
    await store.dispatch('projects/get_stacks')
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
      // Test
      message: 'Hello world',
      project_index: 0,

      // Form Inputs
      project_type: '',
      project_name: '',
      project_category: '',
      project_client: '',
      project_tag: '',
      project_description: '',
      project_start: new Date().toISOString().substr(0, 10),
      project_deadline: new Date().toISOString().substr(0, 10),
      project_dateadded: '',
      project_status: '',
      project_logo: '',

      depedencyTags: '',
      stack_database: '',
      stack_endpoint: '',
      stack_server: '',
      dependencyInput: '',
      searchDependency: '',

      // Validators
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 5) || 'Project Name must be atleast 5 characters'
      ],
      categoryRules: [v => !!v || 'Project Category is required'],
      typeRules: [v => !!v || 'Project Type is required'],

      //   Show
      deleteDialog: false,
      snack_message: '',
      snack_details: '',
      snack_color: '',

      isLoading: false,
      items: [],
      viewMain: [],
      viewSub: [],
      viewDep: [],
      category: [
        'Finance & Accounting',
        'Game Development',
        'HR Management',
        'Real-Estate',
        'Project Management'
      ],
      input_tags: ['Personal ', 'Freelance ', 'Work'],

      developmentItems: [],
      dependencyItems: [],
      people: [
        {
          actions: '15 min',
          subheading: 'Mobile Developer',
          subheader: `@aliconnors`,
          title: 'Ali Connors',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
        },
        {
          actions: '2 hr',
          subheading: 'Frontend Developer',
          subheader: `@scrottjennifer`,
          title: 'Scrott Jennifer',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
        },
        {
          actions: '6 hr',
          subheading: 'Backend Developer',
          subheader: '@sandraadams',
          title: 'Sandra Adams',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
        },
        {
          actions: '12 hr',
          subheading: 'Backend Developer',
          subheader: '@trevorhansen',
          title: 'Trevor Hansen',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
        },
        {
          actions: '18hr',
          subheading: 'Web Designer',
          subheader: '@briannaholt',
          title: 'Britta Holt',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
        }
      ],
      cards: [
        { title: 'Frontend', image: 'something' },
        { title: 'Backend', image: 'something' }
      ],
      tags: ['Frontend Framework', 'Backend Framework'],
      model: null,
      search: null,
      searchLanguage: null,
      searchFrontDep: null,
      tab: null,
      e6: 1,
      languageInput: null,
      snackbar: false,
      languageTags: null,
      newDialog: false
    }
  },
  mounted() {},
  methods: {
    validateGeneral() {
      if (this.$refs.form.validate()) {
        this.e6 = 3
      }
    },
    check() {
      console.log(this.developmentItems)
    },
    loadProject2(id) {
      const self = this
      const index = this.projects.map(el => el.project_id).indexOf(id)
      this.project_index = index

      // this.viewMain = []
      // this.viewSub = []
      // this.viewDep = []

      // this.stacks.forEach(element => {
      //   if (id == element.stack_project && element.stack_category == 'main') {
      //     self.viewMain.push({
      //       ...element
      //     })
      //   }
      //   if (id == element.stack_project && element.stack_category == 'sub') {
      //     self.viewSub.push({
      //       ...element
      //     })
      //   }
      //   if (id == element.stack_project && element.stack_category == 'dep') {
      //     self.viewDep.push({
      //       ...element
      //     })
      //   }
      // })
    },
    createProject() {
      var date = new Date()
      const self = this

      axios
        .post('http://localhost:6969/projects', {
          project_name: this.project_name,
          project_category: this.project_category,
          project_client: this.project_client,
          project_tag: this.project_tag,
          project_description: this.project_description,
          project_start: this.project_start,
          project_deadline: this.project_deadline,
          project_type: this.project_type,
          project_logo: this.project_logo,
          project_dateadded: date,
          project_status: 'Pending'
        })
        .then(function(response) {
          console.log(response)
          self.$store.commit('projects/ADD_PROJECT', response.data.payload)

          self.$refs.form.reset()
          self.snack_message = 'Success'
          self.snack_details = 'Project successfully created!'
          self.snack_color = 'primary'
          self.snackbar = true

          self.newDialog = false

          self.developmentItems.forEach(element => {
            console.log(element)
            axios
              .post('http://localhost:6969/stacks', {
                stack_name: element.name,
                stack_git: element.github,
                stack_author: element.username,
                stack_tag: element.tag,
                stack_category: 'main',
                stack_database: '',
                stack_server: '',
                stack_hosting: '',
                stack_endpoint: '',
                stack_type: 'main',
                stack_project: response.data.insert_id
              })
              .then(function(res) {
                console.log(res)
              })
              .catch(function(err) {
                console.log(err)
              })
          })

          axios
            .post('http://localhost:6969/stacks', {
              stack_name: '',
              stack_git: '',
              stack_author: '',
              stack_tag: '',
              stack_category: 'sub',
              stack_database: self.stack_database,
              stack_server: self.stack_server,
              stack_hosting: '',
              stack_endpoint: self.stack_endpoint,
              stack_type: 'sub',
              stack_project: response.data.insert_id
            })
            .then(function(res) {
              console.log(res)
            })
            .catch(function(err) {
              console.log(err)
            })

          self.dependencyItems.forEach(element => {
            console.log(element)
            axios
              .post('http://localhost:6969/stacks', {
                stack_name: element.name,
                stack_git: element.github,
                stack_author: element.username,
                stack_tag: element.tag,
                stack_category: 'dep',
                stack_database: '',
                stack_server: '',
                stack_hosting: '',
                stack_endpoint: '',
                stack_type: 'dep',
                stack_project: response.data.insert_id
              })
              .then(function(res) {
                console.log(res)
              })
              .catch(function(err) {
                console.log(err)
              })
          })
        })
        .catch(function(error) {
          console.log(error)
          self.snack_message = 'Failed'
          self.snack_details = 'Project unsuccessfully created!'
          self.snack_color = 'danger'
          self.snackbar = true
        })
    },
    chooseCategory(projType) {
      this.projectType = projType
      this.e6 = 2
      console.log(this.projectType)
    },
    addDevLanguage(x, y) {
      console.log(x[0])
      var dependency = x[0].name
      var git = x[0].links.repository
      //   var git = x.links.repository
      var user = x[0].publisher.username
      this.developmentItems.push({
        name: dependency,
        github: git,
        username: user,
        tag: y
      })
      this.languageInput = null
      this.languageTags = null
      //   console.log(this.developmentItems)
    },
    addDepLanguage(x, y) {
      console.log(x[0])
      var dependency = x[0].name
      var git = x[0].links.repository
      //   var git = x.links.repository
      var user = x[0].publisher.username
      this.dependencyItems.push({
        name: dependency,
        github: git,
        username: user,
        tag: y
      })
      this.languageInput = null
      this.languageTags = null
    },
    testFunction() {
      alert('asd')
    }
  },
  watch: {
    searchLanguage(val) {
      // Items have already been loaded
      const self = this
      this.isLoading = true
      // Lazily load input items
      axios
        .get('https://api.npms.io/v2/search?q=' + val)
        .then(function(response) {
          // handle success
          let asd = response.data.results
          asd.forEach(element => {
            self.items.push(element.package)
          })
          console.log(self.items)
        })
        .catch(function(error) {
          // handle error
          console.log(error)
        })
        .finally(() => (this.isLoading = false))
    },
    searchFrontDep(val) {
      // Items have already been loaded
      const self = this
      this.items = []
      this.isLoading = true
      // Lazily load input items
      axios
        .get('https://api.npms.io/v2/search?q=' + val)
        .then(function(response) {
          // handle success
          let asd = response.data.results
          asd.forEach(element => {
            self.items.push(element.package)
          })
          console.log(self.items)
        })
        .catch(function(error) {
          // handle error
          console.log(error)
        })
        .finally(() => (this.isLoading = false))
    }
  }
}
</script>
