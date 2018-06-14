import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'


Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      authUser: null
    },
    getters: {
      isAuthenticated(state) {
        return !!state.authUser
      },
      loggedUser(state) {
        return state.authUser
      }
    },
    mutations: {
      SET_USER: function (state, user) {       
        state.authUser = user
      }
    },
    actions: {
      // nuxtServerInit is called by Nuxt.js before server-rendering every page
      nuxtServerInit({ commit }, { req }) {
        if (req.session && req.session.authUser) {
          commit('SET_USER', req.session.authUser)
        }
      },
      async login({ commit }, { user, pwd }) {
        try {
          let pars = JSON.stringify({
            username: user,
            password: pwd
          })

          let res = await this.$axios.post('/auth', pars, {
            headers: {
              'Content-Type': 'application/json',
            }
          })
          Cookie.set('jwt', res.data.token)
          commit('SET_USER', res.data.token)
          this.$router.push('/')                  
        } catch (error) {
          if (error.response && error.response.status === 401) {
            throw new Error('Bad credentials')
          }
          throw error
        }
      }
    }
  })
}
export default createStore
