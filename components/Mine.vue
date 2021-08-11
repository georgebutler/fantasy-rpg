<template>
  <button @click="activated">
    Mine
  </button>
</template>

<script>
import IronOre from '~/items/IronOre'

export default {
  methods: {
    activated () {
      this.$store.commit('inventory/add', {
        item: IronOre,
        amount: 1
      })
    }
  }
}
</script>
