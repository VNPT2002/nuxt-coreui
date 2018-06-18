import Cookie from 'js-cookie'

const state = {
  authUser: null
}

const getters = {
  isAuthenticated (state) {
    return !!state.authUser
  },
  loggedUser (state) {
    return state.authUser
  }
}

const mutations = {
  SET_USER (state, user) {
    state.authUser = user
  }
}

const actions = {
  // // nuxtServerInit is called by Nuxt.js before server-rendering every page
  // nuxtServerInit({ commit }, { req }) {
  //   if (req.session && req.session.authUser) {
  //     commit('SET_USER', req.session.authUser)
  //   }
  // },
  async login ({ commit }, { user, pwd }) {
    try {
      let pars = JSON.stringify({
        username: user,
        password: pwd
      })

      let res = await this.$axios.post('/auth', pars, {
        headers: {
          'Content-Type': 'application/json'
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
  },
  async logout ({ commit }) {
    try {
      Cookie.remove('jwt')
      commit('SET_USER', null)
      this.$router.push('/pages/login')
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  }
}

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions
}
