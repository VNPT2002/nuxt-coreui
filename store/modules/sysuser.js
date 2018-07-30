const state = {
  error: null,
  isLoading: false,
  token: null,
  items: [],
  totalRows: 0,
  perPage: 5,
  currentPage: 1
}

const getters = {
  getToken (state, getters, rootState) {
    return rootState.authUser
  }
}

const mutations = {
  SET_ITEMS: function (state, payload) {
    state.items = payload
  }
}

const actions = {
  loadData ({rootState}) {
    try {
      console.log(rootState)
      console.log(rootState.rootGetters)

      // const header = {
      //   'Content-Type': 'application/json',
      //   Authorization: `Bearer ${loggedUser}`
      // }
      // let res = await this.$axios.get(this.apiUrl, { headers: header })
      // commit('SET_ITEMS', res)
    } catch (error) {
      throw error
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
