import { getCategories } from '@/graphql'

export default {
  state: () => ({
    categories: [],
  }),

  getters: {
    getCategories (state) {
      return state.categories
    },
  },

  mutations: {
    SET_CATEGORIES (state, categories) {
      state.categories = categories
    },
  },

  actions: {
    async fetchMenuCategories ({ commit }) {
      try {
        commit('SET_CATEGORIES', await getCategories())
      } catch (e) {
        // @todo: Handle error better, trigger red alert
        console.error(e)
      }
    },
  },
}
