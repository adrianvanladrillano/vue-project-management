import axios from 'axios'

export const state = () => ({
  stacks: [],
  stack: [],
})

export const mutations = {
  SET_STACKS(state, stacks) {
    state.stacks = stacks
  },
  SET_STACK(state, stack) {
    state.stacks = stack
  },
}

export const actions = {
  async get_stacks({ commit }) {
    
    axios
      .get('http://localhost:6969/stacks')
      .then(function (response) {
        // handle success
        console.log(response)
        console.log(response)
        console.log(response)
        console.log(response)
        console.log(response)
        commit('SET_STACKS', response.data)
        
        console.log("-----STACKS-----")
        console.log(response.data)
        console.log("-----STACKS-----")
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
