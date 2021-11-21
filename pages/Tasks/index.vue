<template>
  <div>
    <Snackbar color="red" v-show="snackbar == 'success'" />
    <Snackbar color="red" v-show="snackbar == 'failed'" />
    <v-row style="background: #f3f3f4" class="pb-7">
      <v-col cols="12" xl="3" style="padding: 0; z-index: 99">
        <Snackbar />

        <aside-projects
          @loadProject2="loadProject2"
          heading="Tasks"
          subheading="Lorem ipsum dolor sit"
        />
      </v-col>
      <v-col cols="12" xl="9" style="padding: 0">
        <v-card class="px-2 py-5" flat style="border-bottom: 2px solid #e3e3e3">
          <v-row>
            <v-col>
              <v-list-item two-line>
                <v-list-item-avatar size="72">
                  <v-img
                    :src="this.projects[this.project_index].project_logo"
                    alt
                  />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="headline">{{
                    this.projects[this.project_index].project_name
                  }}</v-list-item-title>
                  <v-list-item-subtitle class="subtitle">{{
                    this.projects[this.project_index].project_category
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>

            <v-col>
              <v-list-item two-line class="float-right mt-5">
                <v-list-item-content>
                  <v-list-item-subtitle class="subtitle"
                    >Date Created</v-list-item-subtitle
                  >
                  <v-list-item-title class="headline">
                    {{ this.projects[this.project_index].project_dateadded }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
          <v-row class="mx-5">
            <v-col>
              <v-avatar color="primary" size="48">
                <span class="white--text">AV</span>
              </v-avatar>

              <v-avatar color="error" size="48" style="margin-left: -18px">
                <span class="white--text">AD</span>
              </v-avatar>

              <v-avatar color="warning" size="48" style="margin-left: -18px">
                <span class="white--text">DC</span>
              </v-avatar>
              <v-btn
                class="float-right"
                color="primary"
                @click="newTaskDialog = true"
                >New Task +</v-btn
              >
            </v-col>
          </v-row>
        </v-card>

        <v-row class="mx-5 mt-7">
          <v-col xl="3">
            <v-row>
              <v-col>
                <card-heading heading="Backlogs" />
              </v-col>
            </v-row>
            <TaskBacklogs
              @TaskView="TaskView"
              :project="parseInt(projects[project_index].project_id)"
            />
          </v-col>
          <v-col xl="3">
            <v-row>
              <v-col>
                <card-heading heading="Pending" />
              </v-col>
            </v-row>
            <TaskPending
              @TaskView="TaskView"
              :project="parseInt(projects[project_index].project_id)"
            />
          </v-col>
          <v-col xl="3">
            <v-row>
              <v-col>
                <card-heading heading="Ongoing" />
              </v-col>
            </v-row>
            <TaskOngoing
              @TaskView="TaskView"
              :project="parseInt(projects[project_index].project_id)"
            />
          </v-col>
          <v-col xl="3">
            <v-row>
              <v-col>
                <card-heading heading="Completed" />
              </v-col>
            </v-row>
            <TaskCompleted
              @TaskView="TaskView"
              :project="parseInt(projects[project_index].project_id)"
            />
          </v-col>
          <!-- <TaskBacklogs :project="parseInt(projects[project_index].project_id)" /> -->
        </v-row>
      </v-col>
    </v-row>

    <v-dialog
      v-model="taskDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <ViewTodoDialog :task_id="parseInt(this.task_id)" />
    </v-dialog>

    <v-dialog
      v-model="newTaskDialog"
      hide-overlay
      width="700px"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="newTaskDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>New Task</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="createTask()">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-container>
          <v-row class="pt-5">
            <v-col cols="12" xl="12">
              <v-text-field
                dense
                outlined
                v-model="task_name"
                label="Task Group Name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xl="12">
              <v-autocomplete
                outlined
                dense
                v-model="task_type"
                label="Task Type"
                :items="typeSelect"
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" xl="6">
              <v-text-field
                type="date"
                dense
                outlined
                v-model="task_start"
                label="Start Date"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xl="6">
              <v-text-field
                type="date"
                dense
                outlined
                v-model="task_end"
                label="End Date"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xl="12">
              <v-textarea
                outlined
                label="Description"
                v-model="task_desc"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>
        <v-container>
          <v-row class="pt-5">
            <v-col cols="12" xl="12">
              <v-text-field
                dense
                outlined
                label="Task name"
                v-model="todo_name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xl="12">
              <v-text-field
                outlined
                dense
                label="Task Description"
                v-model="todo_desc"
              ></v-text-field>
            </v-col>
            <v-col cols="12" xl="12">
              <v-btn color="primary" block @click="createTodo()"
                >Add Task +</v-btn
              >
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-list three-line subheader>
                <v-subheader>General</v-subheader>
                <v-list-item v-for="todo in todo_array" :key="todo.todo_name">
                  <v-list-item-action>
                    <v-checkbox></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>{{ todo.todo_name }}</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ todo.todo_desc }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import Calendar from '../../components/Calendar.vue'
import CardHeading from '../../components/CardHeading.vue'
import CardTitle from '../../components/CardTitle.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  components: { CardTitle, CardHeading },
  mounted() {
    const self = this

    axios
      .get('http://localhost:6969/todos')
      .then(function(response) {
        // handle success
        self.array_todos = response.data
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
      .then(function() {
        // always executed
      })

    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
  },
  data() {
    CardHeading, Calendar
    return {
      // Form Inputs
      task_name: '',
      task_desc: '',
      task_name: '',
      task_type: '',
      task_start: '',
      task_end: '',
      todo_desc: '',
      todo_name: '',
      typeSelect: ['Pending', 'Ongoing', 'Completed', 'Backlogs'],

      // Array containers
      show_pending: [],
      show_backlog: [],
      show_progress: [],
      show_completed: [],
      show_task: [],
      show_todos: [],

      // Showers
      show_id: 0,
      show_avatar: '',
      show_title: '',
      show_type: '',
      project_index: 0,
      task_index: 0,
      task_id: 0,

      // Component states
      snackbar: '',
      newTaskDialog: false,
      taskDialog: false,

      // Temporary data
      array_tasks: [],
      todo_array: [],
      items: [{ title: 1 }, { title: 2 }, { title: 3 }, { title: 4 }],
      interval: {},
      value: 0
    }
  },
  // Call get_projects on store
  async fetch({ store }) {
    await store.dispatch('projects/get_projects')
    await store.dispatch('projects/get_tasks')
    await store.dispatch('projects/get_todos')
  },
  // Assign get_projects on store
  computed: {
    ...mapState({
      projects: state => {
        return state.projects.projects
      },
      tasks: state => {
        return state.projects.tasks
      },
      todos: state => {
        return state.projects.todos
      }
    })
  },
  methods: {
    TaskView(id) {
      this.task_id = id
      console.log('asd')
      console.log(id)
      console.log('asd')
      console.log('asd')
      this.taskDialog = true

      // const self = this
      // const index = this.tasks.map(el => el.task_id).indexOf(id)
      // this.task_index = index
      // this.taskDialog = true

      // this.show_todos = []

      // this.todos.forEach(todo => {
      //   if (this.tasks[index].task_id == todo.todo_task) {
      //     self.show_todos.push(todo)
      //   }
      //   s
      // })
    },
    loadProject2(id) {
      const self = this
      // console.log(id)
      const index = this.projects.map(el => el.project_id).indexOf(id)
      this.project_index = index

      // this.show_backlog = []
      // this.show_pending = []
      // this.show_progress = []
      // this.show_completed = []

      // this.tasks.forEach(task => {
      //   if (id == task.task_project && task.task_type == 'Backlogs') {
      //     self.show_backlog.push(task)
      //     console.log('hit')
      //   }
      //   if (id == task.task_project && task.task_type == 'Pending') {
      //     self.show_pending.push(task)
      //     console.log('hit')
      //   }
      //   if (id == task.task_project && task.task_type == 'Ongoing') {
      //     self.show_progress.push(task)
      //     console.log('hit')
      //   }
      //   if (id == task.task_project && task.task_type == 'Completed') {
      //     self.show_completed.push(task)
      //     console.log('hit')
      //   }
      // })
    },
    createTask() {
      console.log('Task Created')

      var today = new Date()
      const self = this

      axios
        .post('http://localhost:6969/tasks', {
          task_desc: this.task_desc,
          task_start: this.task_start,
          task_end: this.task_end,
          task_type: this.task_type,
          task_name: this.task_name,

          task_status: 'Diko alam',

          task_dateadded: today,
          task_last_updated: today,

          task_project: this.projects[this.project_index].project_id
        })
        .then(response => {
          console.log('----PAYLOAD----')
          console.log(response)
          console.log('----PAYLOAD----')
          this.$store.commit('projects/ADD_TASK', response.data.payload)

          const status = response.data.payload.task_type
          if (status == 'Pending') {
            this.show_pending.push(response.data.payload)
          }
          if (status == 'Ongoing') {
            this.show_progress.push(response.data.payload)
          }
          if (status == 'Backlogs') {
            this.show_backlog.push(response.data.payload)
          }
          if (status == 'Completed') {
            this.show_completed.push(response.data.payload)
          }

          this.todo_array.forEach(todo => {
            axios
              .post('http://localhost:6969/todos', {
                todo_name: todo.todo_name,
                todo_desc: todo.todo_desc,
                todo_dateadded: today,
                todo_task: response.data.insert_id,
                todo_status: 'false'
              })
              .then(function(response) {
                console.log(response)
              })
              .catch(function(error) {
                console.log(error)
              })
          })
        })
        .catch(function(error) {
          console.log(error)
        })

      this.newTaskDialog = false
      this.snackbar = 'success'
    },
    createTodo() {
      console.log('Add todo')
      this.todo_array.push({
        todo_name: this.todo_name,
        todo_desc: this.todo_desc
      })

      this.todo_name = ''
      this.todo_desc = ''
    }
  }
}
</script>
