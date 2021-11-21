import axios from 'axios'

export const state = () => ({
  projects: [],
  project: [],
  stacks: [],
  tasks: [],
  todos: [],
  total_projects: 0,
  total_todo: 0,
  total_tasks: 0,
})

export const mutations = {
  TOGGLE_TODO(state, payload) {
    // alert(payload)
    console.log("TANGINA ETO YUNG PAYLOAD PRE")
    console.log(payload)
    console.log("TANGINA ETO YUNG PAYLOAD PRE")
    const index = state.todos.map(el => el.todo_id).indexOf(payload.todo_id)
    // alert(payload.todo_name);
    // alert(index);
    state.todos.splice(index, 0);
    // state.todos.splice(index, 0, payload);
    state.todos[index] =
    {
      todo_dateadded: payload.todo_dateadded,
      todo_desc: payload.todo_desc,
      todo_id: payload.todo_id,
      todo_name: payload.todo_name,
      todo_status: payload.todo_status == 'false' ? 'true' : 'false',
      todo_task: payload.todo_task
    };

    // {
    //   todo_dateadded: payload.todo_dateadded,
    //   todo_desc: payload.todo_desc,
    //   todo_id: payload.todo_id,
    //   todo_name: payload.todo_name,
    //   todo_status: payload.todo_status == 'false' ? 'true' : 'false',
    //   todo_task: payload.todo_task
    // }
    console.log(state.todos)

  },
  SORT_PROJECT(state, value) {

    console.log(value.prop)
    console.log(value.sortBy)

    const prop = value.prop;

    if (value.sortBy == 'asc') {
      state.projects.sort((a, b) =>
        a[prop].toLowerCase() > b[prop].toLowerCase() ? -1 : 1
      )
    }
    else {
      state.projects.sort((a, b) =>
        a[prop].toLowerCase() < b[prop].toLowerCase() ? -1 : 1
      )
    }


    // if (s === this.sortBy) {
    //   this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    //   state.projects.sort((a, b) =>
    //     a.project_name < b.project_name ? -1 : 1
    //   )
    // }

  },
  SORT_PROJECTS_DESC(state, prop) {
    state.projects.sort((a, b) =>
      a.project_name > b.project_name ? -1 : 1
    )
  },
  GET_TOTAL_PROJECTS(state) {
    state.total_projects = state.projects.length
  },
  GET_TOTAL_TASKS(state) {
    state.total_tasks = state.tasks.length
  },
  GET_TOTAL_TODO(state) {
    state.total_todo = state.todos.length
  },
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
  SET_PROJECT(state, project) {
    state.project = project
  },
  SET_STACKS(state, stacks) {
    state.stacks = stacks
  },
  SET_TASKS(state, tasks) {
    state.tasks = tasks
  },
  SET_TODOS(state, todos) {
    state.todos = todos
  },
  ADD_PROJECT(state, payload) {
    state.projects.unshift(payload)
  },
  ADD_TASK(state, payload) {
    state.tasks.push(payload)
  },
}

// export const getters = {

// },

export const actions = {
  async get_tasks({ commit }) {
    axios
      .get('http://localhost:6969/tasks')
      .then(function (response) {
        // handle success
        commit('SET_TASKS', response.data)
        commit('GET_TOTAL_TASKS')
        console.log('-----TASKS-----')
        console.log(response.data)
        console.log('-----TASKS-----')
      })
      .catch(function (error) {
        // handle error
        console.log('-----TASKS-----')
        console.log(error)
        console.log('-----TASKS-----')
      })
      .then(function () {
        // always executed
      })
  },
  async get_stacks({ commit }) {
    axios
      .get('http://localhost:6969/stacks')
      .then(function (response) {
        // handle success
        commit('SET_STACKS', response.data)
        console.log('-----STACKS-----')
        console.log(response.data)
        console.log('-----STACKS-----')
      })
      .catch(function (error) {
        // handle error
        console.log('-----STACKS-----')
        console.log(error)
        console.log('-----STACKS-----')
      })
      .then(function () {
        // always executed
      })
  },
  async get_projects({ commit }) {
    await axios
      .get('http://localhost:6969/projects')
      .then(function (response) {
        // handle success
        commit('SET_PROJECTS', response.data)
        commit('GET_TOTAL_PROJECTS')
        commit('GET_RECENT_PROJECTS')

      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  },
  async get_todos({ commit }) {
    await axios
      .get('http://localhost:6969/todos')
      .then(function (response) {
        // handle success
        commit('SET_TODOS', response.data)
        commit('GET_TOTAL_TODO')
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  },
  async get_proj({ commit }) {
    await axios
      .get('http://localhost:6969/projects')
      .then(function (response) {
        // handle success
        commit('SET_PROJECTS', response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  },
}
