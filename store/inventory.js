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
  },

  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  }
}
