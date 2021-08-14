export const state = () => ({
  gold: 0
})

export const mutations = {
  addCurrency (state, payload) {
    state.gold = state.gold + payload.amount
  }
}

export const actions = {
  give ({ commit, state }, { amount }) {
    return new Promise((resolve, reject) => {
      commit('addCurrency', { amount })
      resolve()
    })
  }
}
