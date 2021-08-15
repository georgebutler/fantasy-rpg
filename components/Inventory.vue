<template>
  <div>
    <h2>Inventory</h2>
    <h5>Currency</h5>
    <div>
      <div>Gold: {{ gold }}</div>
    </div>
    <h5>Items</h5>
    <div class="inventory">
      <div v-for="item in items" :key="item.id" class="item">
        <!-- <span>{{ item.name }} x{{ item.amount }}</span>
        <button v-if="item.sellable" @click="sellItem(item)">
          Sell x1 - {{ calculateItemValue(item) }}
        </button>
        -->
        <img class="icon" :alt="item.name" :src="item.icon">
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
