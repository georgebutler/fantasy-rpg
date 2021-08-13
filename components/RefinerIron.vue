<template>
  <button @click="activated">
    Iron Ore x{{ consume }} -> Iron x{{ give }}
  </button>
</template>

<script>
import IronOre from '~/items/IronOre'
import Iron from '~/items/Iron'

export default {
  name: 'RefinerIron',
  data () {
    return {
      consume: 2,
      give: 1
    }
  },
  methods: {
    activated () {
      this.$store.dispatch('inventory/take', {
        item: IronOre,
        amount: this.consume
      })
        .then((result) => {
          this.$store.dispatch('inventory/give', {
            item: Iron,
            amount: this.give
          })
        })
    }
  }
}
</script>
