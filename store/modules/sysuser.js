
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
  
}

const mutations = {
  SET_ITEMS: function (state, payload) {
    state.items = payload
  }
}

const actions = {
  async loadData() {
    try {
      console.log("===================================")
      
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