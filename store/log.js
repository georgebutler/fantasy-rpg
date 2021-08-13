export const state = () => ({
  messages: []
})

export const mutations = {
  addMessage (state, payload) {
    state.messages.push({ text: payload.text, timestamp: Date.now() })
  }
}

export const actions = {
  add ({ commit, state }, { text }) {
    return new Promise((resolve, reject) => {
      commit('addMessage', { text })
      resolve()
    })
  }
}
