<template>
  <div>
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
            <v-btn dark text @click="newDialog = false"> Save </v-btn>
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
                  <v-col
                    cols="12"
                    xl="3"
                    v-for="card in cards"
                    :key="card.title"
                  >
                    <v-card
                      justify-center
                      align-center
                      class=""
                      elevation="0"
                      style="border: 1px solid #e3e3e3"
                    >
                      <v-list-item two-line>
                        <v-list-item-avatar style="" size="100">
                          <img
                            src="https://thumbs.dreamstime.com/b/back-end-linear-icon-modern-outline-back-end-logo-concept-wh-back-end-linear-icon-modern-outline-back-end-logo-concept-white-133526061.jpg"
                            alt=""
                            style="height: 100%"
                          />
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>Backend</v-list-item-title>
                          <v-list-item-subtitle
                            >Secondary text</v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-col>

                  <v-col
                    cols="6"
                    xl="3"
                    v-for="card in cards"
                    :key="card.title"
                  >
                    <v-card
                      justify-center
                      align-center
                      class="px-5 py-5"
                      elevation="0"
                      style="border: 1px solid #e3e3e3"
                    >
                      <v-img
                        src="https://thumbs.dreamstime.com/b/back-end-linear-icon-modern-outline-back-end-logo-concept-wh-back-end-linear-icon-modern-outline-back-end-logo-concept-white-133526061.jpg"
                        alt=""
                        style="width: 100%"
                      />
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
                    <v-btn text> Cancel </v-btn>
                  </v-col>
                </v-row>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 2" step="2">
                General Information
                <small>Summarize if needed</small>
              </v-stepper-step>

              <v-stepper-content step="2">
                <v-row>
                  <v-col cols="12" xl="9">
                    <v-row class="mt-2">
                      <v-col cols="12" xs="12" lg="8" xl="8">
                        <v-text-field
                          label="Project name"
                          placeholder="E.G. Project Management System"
                          outlined
                          dense
                          value="Bearsfood Incorporated Checker"
                        ></v-text-field>
                      </v-col>

                      <v-col xl="4">
                        <v-text-field
                          label="Project Category"
                          placeholder="E.G. Project Management System"
                          outlined
                          dense
                          value="Finance & Accounting"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col xl="6">
                        <v-text-field
                          label="Client"
                          placeholder="E.G. Project Management System"
                          outlined
                          dense
                          value="Work"
                        ></v-text-field>
                      </v-col>
                      <v-col xl="6">
                        <v-text-field
                          label="Tags"
                          placeholder="E.G. Project Management System"
                          outlined
                          dense
                          value="Work"
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
                        ></v-text-field>
                      </v-col>
                      <v-col xl="6">
                        <v-text-field
                          type="date"
                          outlined
                          label="Deadline"
                          dense
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col xl="12">
                        <v-textarea
                          outlined
                          label="Project Description"
                          value="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, consectetur aperiam enim nisi obcaecati perferendis explicabo reprehenderit quia officiis aliquid. Sapiente illo facilis tempora nostrum impedit. Repellendus ullam deleniti quisquam?"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col xl="3">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQkDJ0qJQANcAN2orNEoVuOPeOutZxAC84lIcphcq4_Lu3oWQ-RB60RECglODL_JovyeQ&usqp=CAU"
                      alt=""
                      style="width: 100%"
                    />
                  </v-col>
                </v-row>
                <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
                <v-btn text> Cancel </v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 3" step="3">
                Create project stack
                <small>Lorem ipsum dolor sit amet.</small>
              </v-stepper-step>

              <v-stepper-content step="3">
                <!-- Create Development Language -->
                <v-row class="mt-2">
                  <v-col cols="12" xl="2">
                    <span class="" style="opacity: 1; font-size: 1.2em"
                      >Development Language</span
                    >
                    <p style="opacity: 0.7" class="subtitle-2">
                      This contains something here etc.
                    </p>
                  </v-col>
                  <v-col cols="12" xl="6">
                    <v-autocomplete
                      cache-items
                      v-model="FrontendDep"
                      :items="items"
                      :loading="isLoading"
                      :search-input.sync="searchFront"
                      outlined
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
                        >
                          {{ item.name.charAt(0) }}
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.name"
                          ></v-list-item-title>
                          <v-list-item-subtitle
                            v-text="item.author"
                          ></v-list-item-subtitle>
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
                      v-model="FrontendDep"
                      :items="items"
                      :loading="isLoading"
                      :search-input.sync="searchFront"
                      outlined
                      chips
                      dense
                      multiple
                      item-text="name"
                      label="Tag"
                    >
                      <template v-slot:item="{ item }">
                        <v-list-item-avatar
                          color="indigo"
                          class="headline font-weight-light white--text"
                        >
                          {{ item.name.charAt(0) }}
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.name"
                          ></v-list-item-title>
                          <v-list-item-subtitle
                            v-text="item.author"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-icon>mdi-bitcoin</v-icon>
                        </v-list-item-action>
                      </template>
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="12" xl="2">
                    <v-btn color="primary" block @click="addDevLanguage()"
                      >Add</v-btn
                    >
                  </v-col>
                </v-row>

                <v-row class="">
                  <v-col cols="12" xl="2"> </v-col>
                  <v-col cols="12" xl="10">
                    <v-row>
                      <v-col
                        xl="4"
                        v-for="dItem in developmentItems"
                        :key="dItem.index"
                      >
                        <v-card>
                          <v-list two-line>
                            <v-list-item>
                              <v-list-item-avatar>
                                <v-img
                                  src="https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256"
                                  alt=""
                                />
                              </v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title>VueJS</v-list-item-title>

                                <v-list-item-subtitle
                                  >Frontend Framework</v-list-item-subtitle
                                >
                                <v-list-item-subtitle class="text--primary"
                                  ><a
                                    href="https://github.com/vuejs/vue"
                                    class="text-decoration-none"
                                    >https://github.com/vuejs/vue</a
                                  ></v-list-item-subtitle
                                >
                              </v-list-item-content>

                              <v-list-item-action>
                                <v-list-item-action-text
                                  >VueJS</v-list-item-action-text
                                >

                                <v-icon v-if="!active" color="grey lighten-1">
                                  mdi-trash-can-outline
                                </v-icon>

                                <v-icon v-else color="error">
                                  mdi-trash-can
                                </v-icon>
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
                    <span class="" style="opacity: 1; font-size: 1.2em"
                      >Additional Dependencies</span
                    >
                    <p style="opacity: 0.7" class="subtitle-2">
                      This contains something here etc.
                    </p>
                  </v-col>
                  <v-col cols="12" xl="6">
                    <v-autocomplete
                      cache-items
                      v-model="FrontendDep"
                      :items="items"
                      :loading="isLoading"
                      :search-input.sync="searchFront"
                      outlined
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
                        >
                          {{ item.name.charAt(0) }}
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.name"
                          ></v-list-item-title>
                          <v-list-item-subtitle
                            v-text="item.author"
                          ></v-list-item-subtitle>
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
                      v-model="FrontendDep"
                      :items="items"
                      :loading="isLoading"
                      :search-input.sync="searchFront"
                      outlined
                      chips
                      dense
                      multiple
                      item-text="name"
                      label="Tag"
                    >
                      <template v-slot:item="{ item }">
                        <v-list-item-avatar
                          color="indigo"
                          class="headline font-weight-light white--text"
                        >
                          {{ item.name.charAt(0) }}
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.name"
                          ></v-list-item-title>
                          <v-list-item-subtitle
                            v-text="item.author"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-icon>mdi-bitcoin</v-icon>
                        </v-list-item-action>
                      </template>
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="12" xl="2">
                    <v-btn color="primary" block @click="addDepLanguage()"
                      >Add</v-btn
                    >
                  </v-col>
                </v-row>

                <v-row class="">
                  <v-col cols="12" xl="2"> </v-col>
                  <v-col cols="12" xl="10">
                    <v-row>
                      <v-col
                        xl="4"
                        v-for="depItem in dependencyItems"
                        :key="depItem.index"
                      >
                        <v-card>
                          <v-list two-line>
                            <v-list-item>
                              <v-list-item-avatar>
                                <v-img
                                  src="https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256"
                                  alt=""
                                />
                              </v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title>VueJS</v-list-item-title>

                                <v-list-item-subtitle
                                  >Frontend Framework</v-list-item-subtitle
                                >
                                <v-list-item-subtitle class="text--primary"
                                  ><a
                                    href="https://github.com/vuejs/vue"
                                    class="text-decoration-none"
                                    >https://github.com/vuejs/vue</a
                                  ></v-list-item-subtitle
                                >
                              </v-list-item-content>

                              <v-list-item-action>
                                <v-list-item-action-text
                                  >VueJS</v-list-item-action-text
                                >

                                <v-icon v-if="!active" color="grey lighten-1">
                                  mdi-trash-can-outline
                                </v-icon>

                                <v-icon v-else color="error">
                                  mdi-trash-can
                                </v-icon>
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
                    <span class="" style="opacity: 1; font-size: 1.2em"
                      >Database Engine</span
                    >
                    <p style="opacity: 0.7" class="subtitle-2">
                      This contains something here etc.
                    </p>
                  </v-col>
                  <v-col cols="12" xl="4">
                    <v-autocomplete
                      cache-items
                      v-model="FrontendDep"
                      :items="items"
                      :loading="isLoading"
                      :search-input.sync="searchFront"
                      outlined
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
                        >
                          {{ item.name.charAt(0) }}
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.name"
                          ></v-list-item-title>
                          <v-list-item-subtitle
                            v-text="item.author"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-icon>mdi-bitcoin</v-icon>
                        </v-list-item-action>
                      </template>
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="12" xl="3">
                    <v-file-input
                      accept="image/*"
                      label="Database File"
                      outlined
                      dense
                    ></v-file-input>
                  </v-col>

                  <v-col cols="12" xl="3">
                    <v-file-input
                      accept="image/*"
                      label="Schema"
                      dense
                      outlined
                    ></v-file-input>
                  </v-col>
                </v-row>

                <v-row class="">
                  <v-col cols="12" xl="2">
                    <span class="" style="opacity: 1; font-size: 1.2em"
                      >Hosting/Servers</span
                    >
                    <p style="opacity: 0.7" class="subtitle-2">
                      This contains something here etc.
                    </p>
                  </v-col>
                  <v-col cols="12" xl="4">
                    <v-autocomplete
                      cache-items
                      v-model="FrontendDep"
                      :items="items"
                      :loading="isLoading"
                      :search-input.sync="searchFront"
                      outlined
                      dense
                      multiple
                      chips
                      item-text="name"
                      label="Hosting/Server"
                    >
                      <template v-slot:item="{ item }">
                        <v-list-item-avatar
                          color="indigo"
                          class="headline font-weight-light white--text"
                        >
                          {{ item.name.charAt(0) }}
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.name"
                          ></v-list-item-title>
                          <v-list-item-subtitle
                            v-text="item.author"
                          ></v-list-item-subtitle>
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
                      prefix="https://"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
                <v-btn text> Cancel </v-btn>
              </v-stepper-content>

              <v-stepper-step step="4">
                Add Collaborators
                <small>Lorem ipsum dolor sit amet.</small>
              </v-stepper-step>
              <v-stepper-content step="4">
                <v-row class="mt-2">
                  <v-col cols="12" xl="9">
                    <v-autocomplete
                      cache-items
                      v-model="FrontendDep"
                      :items="items"
                      :loading="isLoading"
                      :search-input.sync="searchFront"
                      outlined
                      dense
                      multiple
                      item-text="name"
                      label="Invite/Add Collaborator"
                    >
                      <template v-slot:item="{ item }">
                        <v-list-item-avatar
                          color="indigo"
                          class="headline font-weight-light white--text"
                        >
                          {{ item.name.charAt(0) }}
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.name"
                          ></v-list-item-title>
                          <v-list-item-subtitle
                            v-text="item.author"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-icon>mdi-bitcoin</v-icon>
                        </v-list-item-action>
                      </template>
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="12" xl="3">
                    <v-btn color="primary" block>Invite</v-btn>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-list two-line>
                      <v-list-item-group active-class="blue--text" multiple>
                        <template v-for="(person, index) in people">
                          <v-list-item :key="person.title">
                            <template v-slot:default="{ active }">
                              <v-list-item-avatar>
                                <v-img :src="person.avatar" alt="" />
                              </v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title
                                  v-text="person.title"
                                ></v-list-item-title>

                                <v-list-item-subtitle
                                  class="text--primary"
                                  v-text="person.headline"
                                ></v-list-item-subtitle>

                                <v-list-item-subtitle
                                  v-text="person.subtitle"
                                ></v-list-item-subtitle>
                              </v-list-item-content>

                              <v-list-item-action>
                                <v-list-item-action-text
                                  v-text="person.action"
                                ></v-list-item-action-text>

                                <v-icon v-if="!active" color="grey lighten-1">
                                  mdi-star-outline
                                </v-icon>

                                <v-icon v-else color="yellow darken-3">
                                  mdi-star
                                </v-icon>
                              </v-list-item-action>
                            </template>
                          </v-list-item>

                          <v-divider
                            v-if="index < person.length - 1"
                            :key="index"
                          ></v-divider>
                        </template>
                      </v-list-item-group>
                    </v-list>
                  </v-col>
                </v-row>
                <v-btn color="primary" @click="newDialog = false"> Save </v-btn>
                <v-btn text> Cancel </v-btn>
              </v-stepper-content>
            </v-stepper>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: {
    showDialog: {
      type: Boolean,
    },
  },
  data() {
    return {
      e6: 1,
      newDialog: true,
      model: null,
      search: null,
      searchFront: null,
      searchFrontDep: null,
      FrontendDep: null,
      isLoading: false,
      items: [],
      test: [
        {
          title: 'VueJS',
          subheading: 'Frontend Framework',
          subheader: 'https://github.com/vuejs/vue',
          subheader_link: 'https://github.com/vuejs/vue',
          actions: 'VueJS',
          avatar:
            'https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256',
        },
        {
          title: 'VueJS',
          subheading: 'Frontend Framework',
          subheader: 'https://github.com/vuejs/vue',
          subheader_link: 'https://github.com/vuejs/vue',
          actions: 'VueJS',
          avatar:
            'https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256',
        },
        {
          title: 'VueJS',
          subheading: 'Frontend Framework',
          subheader: 'https://github.com/vuejs/vue',
          subheader_link: 'https://github.com/vuejs/vue',
          actions: 'VueJS',
          avatar:
            'https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256',
        },
        {
          title: 'VueJS',
          subheading: 'Frontend Framework',
          subheader: 'https://github.com/vuejs/vue',
          subheader_link: 'https://github.com/vuejs/vue',
          actions: 'VueJS',
          avatar:
            'https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256',
        },
      ],
      developmentItems: [],
      dependencyItems: [],
      people: [
        {
          actions: '15 min',
          subheading: 'Mobile Developer',
          subheader: `@aliconnors`,
          title: 'Ali Connors',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        },
        {
          actions: '2 hr',
          subheading: 'Frontend Developer',
          subheader: `@scrottjennifer`,
          title: 'Scrott Jennifer',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        },
        {
          actions: '6 hr',
          subheading: 'Backend Developer',
          subheader: '@sandraadams',
          title: 'Sandra Adams',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        },
        {
          actions: '12 hr',
          subheading: 'Backend Developer',
          subheader: '@trevorhansen',
          title: 'Trevor Hansen',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        },
        {
          actions: '18hr',
          subheading: 'Web Designer',
          subheader: '@briannaholt',
          title: 'Britta Holt',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
      ],
      cards: [1, 2, 3, 4],
    }
  },
  computed: {},
  mounted() {
    console.log(this.showDialog)
  },
  watch: {
    searchFront(val) {
      // Items have already been loaded
      const self = this
      this.items = []
      this.isLoading = true
      // Lazily load input items
      axios
        .get('https://api.npms.io/v2/search?q=' + val)
        .then(function (response) {
          // handle success
          let asd = response.data.results
          asd.forEach((element) => {
            self.items.push(element.package)
          })
          console.log(self.items)
        })
        .catch(function (error) {
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
        .then(function (response) {
          // handle success
          let asd = response.data.results
          asd.forEach((element) => {
            self.items.push(element.package)
          })
          console.log(self.items)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .finally(() => (this.isLoading = false))
    },
  },
}
</script>
