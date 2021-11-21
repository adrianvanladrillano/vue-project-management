<template>
  <div>
    <v-card
      color="grey lighten-4"
      flat
      style="height: 100vh; position: fixed; overflow-y: auto"
      tile
    >
      <v-toolbar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Task View</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-col>
        <v-row>
          <v-col cols="12" xl="9">
            <v-card class="px-12 py-10 mx-5 my-5">
              <v-row>
                <v-col cols="12" xl="12">
                  <v-list-item-subtitle>
                    <h2 class="font-weight-medium text--secondary">
                      PROJECT NAME HERE
                    </h2>
                  </v-list-item-subtitle>
                  <h1>
                    {{ tasks[mapTask].task_name }}
                    <v-chip
                      class="px-15 ml-2 red--text float-right"
                      medium
                      label
                      color="red lighten-4"
                      >H I G H</v-chip
                    >
                  </h1>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <p>{{ tasks[mapTask].task_desc }}</p>
                </v-col>
              </v-row>

              <v-row>
                <v-col xl="12">
                  <v-list-item two-line style="padding: 0">
                    <v-list-item-content>
                      <v-list-item-subtitle>
                        <h2 class="font-weight-medium text--secondary">
                          CHECKLIST
                        </h2>
                      </v-list-item-subtitle>
                      <v-list-item-title>
                        <h1
                          class="float-right font-weight-regular text--secondary"
                        >
                          5/10 Completed
                        </h1>
                        <h1 class>General Tasks</h1>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" xl="12">
                  <v-data-iterator
                    :items="todoLoad"
                    :items-per-page.sync="itemsPerPage"
                    :page.sync="page"
                    :search="search"
                    :sort-by="sortBy.toLowerCase()"
                    :sort-desc="sortDesc"
                    hide-default-footer
                  >
                    <template v-slot:header>
                      <v-toolbar elevation="0" light color="white" class="mb-5">
                        <v-text-field
                          v-model="search"
                          clearable
                          flat
                          solo-inverted
                          hide-details
                          prepend-inner-icon="mdi-magnify"
                          label="Search"
                        ></v-text-field>
                        <template v-if="$vuetify.breakpoint.mdAndUp">
                          <v-spacer></v-spacer>
                          <v-select
                            v-model="sortBy"
                            flat
                            solo-inverted
                            hide-details
                            :items="keys"
                            prepend-inner-icon="mdi-magnify"
                            label="Sort by"
                          ></v-select>
                          <v-spacer></v-spacer>
                          <v-btn-toggle v-model="sortDesc" mandatory>
                            <v-btn
                              outlined
                              large
                              depressed
                              color="blue"
                              :value="false"
                            >
                              <v-icon>mdi-arrow-up</v-icon>
                            </v-btn>
                            <v-btn
                              outlined
                              large
                              depressed
                              color="blue"
                              :value="true"
                            >
                              <v-icon>mdi-arrow-down</v-icon>
                            </v-btn>
                          </v-btn-toggle>
                        </template>
                      </v-toolbar>
                    </template>

                    <template v-slot:default="todo">
                      <v-row>
                        <v-col
                          v-for="todo in todoLoad"
                          :key="todo.todo_id"
                          cols="12"
                          sm="12"
                          md="12"
                          lg="12"
                          class="px-7 py-2"
                        >
                          <v-card elevation="0" style="background: #f2f2f2">
                            <v-list-item
                              link
                              class="px-5 py-2"
                              @click="UpdateTodo(todo)"
                            >
                              <template v-slot:default="{ active }">
                                <v-list-item-action>
                                  <v-checkbox
                                    :input-value="
                                      todo.todo_status == 'true' ? 'true' : ''
                                    "
                                  ></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                  <v-list-item-title>
                                    <h3 class="title">{{ todo.todo_name }}</h3>
                                  </v-list-item-title>
                                  <v-list-item-subtitle>{{
                                    todo.todo_desc
                                  }}</v-list-item-subtitle>
                                </v-list-item-content>
                              </template>
                            </v-list-item>
                          </v-card>
                        </v-col>
                      </v-row>
                    </template>

                    <template v-slot:footer>
                      <v-row class="mt-2 px-7" align="center" justify="center">
                        <span class="grey--text">Items per page</span>
                        <v-menu offset-y>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              dark
                              text
                              small
                              color="primary"
                              class="ml-2"
                              v-bind="attrs"
                              v-on="on"
                            >
                              {{ itemsPerPage }}
                              <v-icon>mdi-chevron-down</v-icon>
                            </v-btn>
                          </template>
                          <v-list>
                            <v-list-item
                              v-for="(number, index) in itemsPerPageArray"
                              :key="index"
                              @click="updateItemsPerPage(number)"
                            >
                              <v-list-item-title>{{
                                number
                              }}</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>

                        <v-spacer></v-spacer>

                        <span class="mr-4 grey--text"
                          >Page {{ page }} of {{ numberOfPages }}</span
                        >
                        <v-btn
                          small
                          fab
                          dark
                          color="blue darken-3"
                          class="mr-1"
                          @click="formerPage"
                        >
                          <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn
                          small
                          fab
                          dark
                          color="blue darken-3"
                          class="ml-1"
                          @click="nextPage"
                        >
                          <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                      </v-row>
                    </template>
                  </v-data-iterator>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col>
            <v-row>
              <v-col>
                <v-card class="mx-5 my-5 px-5 py-5">
                  <h3>Information</h3>
                  <v-list-item two-line style="padding: 0">
                    <v-list-item-content>
                      <v-list-item-title>Two-line item</v-list-item-title>
                      <v-list-item-subtitle
                        >Secondary text</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item two-line style="padding: 0">
                    <v-list-item-content>
                      <v-list-item-title>Two-line item</v-list-item-title>
                      <v-list-item-subtitle
                        >Secondary text</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item two-line style="padding: 0">
                    <v-list-item-content>
                      <v-list-item-title>Two-line item</v-list-item-title>
                      <v-list-item-subtitle
                        >Secondary text</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item two-line style="padding: 0">
                    <v-list-item-content>
                      <v-list-item-title>Two-line item</v-list-item-title>
                      <v-list-item-subtitle
                        >Secondary text</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card class="mx-5 my-5 px-5 py-5">
                  <h3>Issues</h3>
                  <v-list-item two-line style="padding: 0">
                    <v-list-item-content>
                      <v-list-item-title>Two-line item</v-list-item-title>
                      <v-list-item-subtitle
                        >Secondary text</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item two-line style="padding: 0">
                    <v-list-item-content>
                      <v-list-item-title>Two-line item</v-list-item-title>
                      <v-list-item-subtitle
                        >Secondary text</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item two-line style="padding: 0">
                    <v-list-item-content>
                      <v-list-item-title>Two-line item</v-list-item-title>
                      <v-list-item-subtitle
                        >Secondary text</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item two-line style="padding: 0">
                    <v-list-item-content>
                      <v-list-item-title>Two-line item</v-list-item-title>
                      <v-list-item-subtitle
                        >Secondary text</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    task_id: {
      type: Number
    }
  },
  // Call get_projects on store
  data() {
    return {
      check: false,
      viewTodos: [],
      itemsPerPageArray: [4, 8, 12],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: 'name',
      keys: [
        'Name',
        'Calories',
        'Fat',
        'Carbs',
        'Protein',
        'Sodium',
        'Calcium',
        'Iron'
      ],
      items: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]
    }
  },
  // Assign get_projects on store
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
    filteredKeys() {
      return this.keys.filter(key => key !== 'Name')
    },
    ...mapState({
      tasks: state => {
        return state.projects.tasks
      },
      todos: state => {
        return state.projects.todos
      }
    }),
    mapTask() {
      // console.log(this.viewMain)
      const index = this.tasks.map(el => el.task_id).indexOf(this.task_id)
      return index
    },
    todoLoad() {
      this.viewTodos = []
      // console.log(this.viewMain)
      this.todos.forEach(element => {
        if (this.task_id == element.todo_task) {
          console.log('hit')
          this.viewTodos.push({
            ...element
          })
        } else {
          console.log('asdasd')
        }
      })
      return this.viewTodos
    }
  },
  methods: {
    UpdateTodo(payload) {
      // Update muna sa database
      // .Then
      this.$store.commit('projects/TOGGLE_TODO', payload)
    },
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number
    },
    handleClick(id) {
      this.$emit('TaskView', id)
    }
  },
  mounted() {
    console.log(this.task_id)
    // const index = this.stacks.filter(stack => stack.stack_project = 28);
  }
}
</script>
