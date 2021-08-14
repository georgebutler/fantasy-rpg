export const state = () => ({
  credits: 0
})

export const mutations = {
  addCurrency (state, payload) {
    state.credits = Math.max(state.credits + payload.amount, 0)
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
