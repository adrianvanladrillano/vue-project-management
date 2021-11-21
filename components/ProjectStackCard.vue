<template>
  <div>
    <v-list-item v-for="stack in stackLoad" :key="stack.stack_id" link>
      <v-list-item-avatar>
        <v-avatar
          :color="stack.stack_name == 'vue' ? 'green' : 'primary'"
          size="62"
        >
          <span class="white--text headline">{{
            stack.stack_name.charAt(0).toUpperCase()
          }}</span>
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ stack.stack_name }}</v-list-item-title>
        <v-list-item-subtitle>{{ stack.stack_author }}</v-list-item-subtitle>
        <v-list-item-subtitle class="text--primary">
          <a :href="stack.stack_git" class="text-decoration-none">
            {{ stack.stack_git }}
          </a>
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-list-item-action-text>{{ stack.stack_id }}</v-list-item-action-text>

        <v-btn @click="$emit('showDeleteDialog')" fab plain>
          <v-icon color="red darken-3">mdi-trash-can-outline</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
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
      viewMain: []
    }
  },
  // Assign get_projects on store
  computed: {
    ...mapState({
      stacks: state => {
        return state.projects.stacks
      }
    }),
    stackLoad() {
      this.viewMain = []
      // console.log(this.viewMain)
      this.stacks.forEach(element => {
        if (
          this.project == element.stack_project &&
          element.stack_category == 'main'
        ) {
          this.viewMain.push({
            ...element
          })
        } else {
          console.log('asdasd')
        }
      })
      return this.viewMain
    }
  },
  mounted() {
    // const index = this.stacks.filter(stack => stack.stack_project = 28);
  }
}
</script>
