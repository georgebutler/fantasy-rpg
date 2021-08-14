export const state = () => ({
  credits: 0
})

export const mutations = {
  addCurrency (state, payload) {
    state.credits = state.credits + payload.amount
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
