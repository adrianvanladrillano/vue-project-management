<template>
  <div>
    <v-row v-for="task in taskLoad" :key="task.task_id">
      <v-col cols="12" xl="12">
        <v-card class="px-5 mb-5" @click="handleClick(task.task_id)">
          <v-row class="fill-height">
            <v-col>
              <v-list-item two-line style="padding: 0">
                <v-list-item-content>
                  <v-list-item-title>
                    <h3 class>
                      <span class="font-weight-medium">{{task.task_name}}</span>
                    </h3>
                  </v-list-item-title>
                  <v-list-item-subtitle>29 Tasks completed</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>

            <v-col>
              <v-chip color="red lighten-5 px-5 mt-4 float-right">
                <span class="red--text font-weight-bold">HIGH</span>
              </v-chip>
            </v-col>
          </v-row>

          <v-row style="margin-top: 0;">
            <v-col cols="12" xl="6">
              <v-img
                style="width: 100%;"
                src="https://i.pinimg.com/originals/22/99/5f/22995ff113ffad2c41e939a939659866.png"
              ></v-img>
            </v-col>

            <v-col cols="12" xl="6">
              <v-img
                style="width: 100%"
                src="https://speckyboy.com/wp-content/uploads/2020/03/admin-dashboard-panel-free-template-ui-04.jpg"
              ></v-img>
            </v-col>

            <!-- <v-col>
              <span class="font-weight-medium text--">Task Completed: 27/100</span>
            </v-col>-->
            <!-- <v-col>
              <span class="font-weight-bold float-right">27%</span>
            </v-col>-->
          </v-row>

          <v-row style="margin-top: 0;">
            <v-col>
              <div>
                <v-progress-linear
                  :color="task.task_name == 'Dashboard' ? 'red' : 'green'"
                  stream
                  height="15"
                  style="border-radius: 12px;"
                  :value="task.task_name == 'Dashboard' ? '25' : '70'"
                ></v-progress-linear>
              </div>
            </v-col>
          </v-row>

          <p
            class="text--secondary mt-5"
            style="
            display: block;/* or inline-block */
            text-overflow: ellipsis;
            word-wrap: break-word;
            overflow: hidden;
            max-height: 4.5em;
            line-height: 1.5em;"
          >{{task.task_desc}}</p>

          <v-row>
            <v-col>
              <v-list-item two-line style="padding: 0;">
                <v-list-item-content>
                  <v-list-item-subtitle>Created</v-list-item-subtitle>
                  <v-list-item-title class="font-weight-medium">{{task.task_start}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>

            <v-col>
              <v-list-item two-line style="padding: 0;">
                <v-list-item-content>
                  <v-list-item-subtitle>Deadline</v-list-item-subtitle>
                  <v-list-item-title class="font-weight-medium">{{task.task_start}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    project: {
      type: Number
    }
  },
  // Call get_projects on store
  data() {
    return {
      viewPending: []
    }
  },
  // Assign get_projects on store
  computed: {
    ...mapState({
      tasks: state => {
        return state.projects.tasks
      }
    }),
    taskLoad() {
      this.viewPending = []
      // console.log(this.viewMain)
      this.tasks.forEach(element => {
        if (
          this.project == element.task_project &&
          element.task_type == 'Pending'
        ) {
          console.log('hit')
          this.viewPending.push({
            ...element
          })
        } else {
          console.log('asdasd')
        }
      })
      return this.viewPending
    }
  },
  methods: {
    handleClick(id) {
      this.$emit('TaskView', id)
    }
  },
  mounted() {
    console.log(this.project)
    // const index = this.stacks.filter(stack => stack.stack_project = 28);
  }
}
</script>
