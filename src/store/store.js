Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    edit: false
  },
  mutations: {
    openEdit(state) {
      state.edit = true
    },
    closeEdit(state) {
      state.edit = false
    }
  }
})
