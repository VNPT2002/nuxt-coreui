import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['loggedUser']),
  data () {
    return {
      checkedItems: [],
      isCheckedItem: false,
      currentPage: 1,
      perPage: 20,
      editItem: {},
      items: []
    }
  },
  methods: {
    async loadData () {
      try {
        const header = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${loggedUser}`
        }
        let res = await this.$axios.get(this.apiUrl, {headers: header})
        this.items = res
      } catch (error) {
        throw error
      }
    }
  },
  mounted() {
    this.loadData()
  }
}
