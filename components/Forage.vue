<template>
  <button @click="activated">
    Forage
  </button>
</template>

<script>
import Grass from '~/data/items/Grass'

export default {
  name: 'Forage',
  data () {
    return {
      amount: 1
    }
  },
  methods: {
    activated () {
      this.$store.dispatch('inventory/give', {
        item: Grass,
        amount: this.amount
      })
    }
  }
}
</script>
