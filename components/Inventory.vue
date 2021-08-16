<template>
  <div>
    <div class="subtitle">
      Inventory
    </div>
    <div>
      <div>{{ gold }}g</div>
    </div>
    <div class="columns is-gapless is-multiline is-mobile is-vcentered">
      <div v-for="item in items" :key="item.id" class="column is-narrow">
        <Item :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inventory',
  computed: {
    gold () {
      return this.$store.state.currency.gold
    },
    items () {
      return this.$store.state.inventory.items
    }
  },
  methods: {
    calculateItemValue (item) {
      return item.value
    },
    sellItem (item) {
      this.$store.dispatch('inventory/take', {
        item,
        amount: 1
      })
        .then(() => {
          this.$store.dispatch('currency/give', {
            amount: item.value
          })
        })
    }
  }
}
</script>
