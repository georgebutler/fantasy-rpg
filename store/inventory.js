export const state = () => ({
  items: []
})

export const mutations = {
  addItem (state, payload) {
    state.items.push({ ...payload.item, amount: payload.amount })
  },

  setItemAmount (state, payload) {
    state.items[payload.index].amount = state.items[payload.index].amount + payload.amount
  }
}

export const actions = {
  give ({ commit, state }, { item, amount }) {
    return new Promise((resolve, reject) => {
      const index = state.items.findIndex(current => current.id === item.id)

      if (index >= 0) {
        commit('setItemAmount', { index, amount })
        resolve()
      } else {
        commit('addItem', { item, amount })
        resolve()
      }

      reject(new Error('Something went wrong.'))
    })
  },

  take ({ commit, state }, { item, amount }) {
    return new Promise((resolve, reject) => {
      const index = state.items.findIndex(current => current.id === item.id)

      if (index >= 0) {
        const found = state.items[index]

        if (found.amount + amount >= 0) {
          commit('setItemAmount', { index, amount })
          resolve()
        }

        reject(new Error('Not enough.'))
      }

      reject(new Error('Item does not exist in inventory.'))
    })
  }
}
