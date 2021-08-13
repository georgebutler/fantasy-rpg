<template>
  <button @click="activated">
    Iron Ore x{{ amount }}
  </button>
</template>

<script>
import IronOre from '~/data/items/IronOre'

export default {
  name: 'ExtractorIron',
  data () {
    return {
      amount: 1
    }
  },
  methods: {
    activated () {
      this.$store.dispatch('inventory/give', {
        item: IronOre,
        amount: this.amount
      })
    }
  }
}
</script>
