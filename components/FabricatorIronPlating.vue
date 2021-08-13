<template>
  <button @click="activated">
    Iron x{{ consume }} -> Plating x{{ give }}
  </button>
</template>

<script>
import Iron from '~/data/items/Iron'
import IronPlating from '~/data/items/IronPlating'

export default {
  name: 'ExtractorIron',
  data () {
    return {
      consume: 1,
      give: 1
    }
  },
  methods: {
    activated () {
      this.$store.dispatch('inventory/take', {
        item: Iron,
        amount: this.consume
      })
        .then((result) => {
          this.$store.dispatch('inventory/give', {
            item: IronPlating,
            amount: this.give
          })
        })
    }
  }
}
</script>
