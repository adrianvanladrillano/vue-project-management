<template>
  <div>
    <input
      type="text"
      @keyup.enter="addTodo"
      placeholder="What needs to be done?"
    />
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input
          :checked="todo.done"
          @change="toggle(todo)"
          type="checkbox"
          :id="todo.id"
        />
        <label :class="{ done: todo.done }" :for="todo.id">{{
          todo.text
        }}</label>
        <button @click="removeTodo(todo)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos() {
      return this.$store.state.todos.list
    },
  },
  methods: {
    addTodo(event) {
      this.$store.commit('todos/add', event.target.value)
      event.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle',
    }),
    removeTodo(todo) {
      this.$store.commit('todos/remove', todo)
    },
  },
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
