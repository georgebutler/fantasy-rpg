<template>
  <button @click="activated">
    Forage
  </button>
</template>

<script>
import Wood from '~/data/items/Wood'

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
        item: Wood,
        amount: this.amount
      })
    }
  }
}
</script>
