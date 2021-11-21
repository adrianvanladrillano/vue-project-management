import axios from 'axios'

export const state = () => ({
    posts: [],
    post: [],
  })
  
  export const mutations = {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    SET_POST(state, post) {
      state.post = post
    },
  }
  
  export const actions = {
    async get_posts({ commit }) {
      axios
        .get('http://localhost:6969/projects')
        .then(function (response) {
          // handle success
          commit('SET_POSTS', response.data)
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
  