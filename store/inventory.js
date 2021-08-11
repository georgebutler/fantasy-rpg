export const state = () => ({
  items: []
})

export const mutations = {
  add (state, object) {
    const index = state.items.findIndex(i => i.id === object.item.id)

    if (index >= 0) {
      state.items[index].amount = state.items[index].amount + object.amount
    } else {
      state.items.push({
        ...object.item,
        amount: object.amount
      })
    }

    if (object.callback) {
      object.callback()
    }
  },

  take (state, object) {
    const index = state.items.findIndex(i => i.id === object.item.id)

    if (index >= 0) {
      if (state.items[index].amount - object.amount >= 0) {
        state.items[index].amount = state.items[index].amount - object.amount

        if (state.items[index].amount === 0) {
          state.items.splice(state.items.indexOf(state.items[index]), 1)
        }

        if (object.callback) {
          object.callback()
        }
      }
    }
  },

  remove (state, { item }) {
    state.items.splice(state.items.indexOf(item), 1)
  }
}
