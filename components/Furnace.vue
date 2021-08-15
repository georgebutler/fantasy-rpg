<template>
  <div>
    <h4>Furnace</h4>
    <div>
      <img :src="charcoalIcon" @click="craftCharcoal">
    </div>
  </div>
</template>

<script>
import Wood from '~/data/items/Wood'
import Charcoal from '~/data/items/Charcoal'

export default {
  name: 'Furnace',
  data () {
    return {
      consume: 1,
      give: 1
    }
  },
  computed: {
    charcoalIcon () {
      return Charcoal.icon
    }
  },
  methods: {
    craftCharcoal () {
      this.$store.dispatch('inventory/take', {
        item: Wood,
        amount: this.consume
      }).then(() => {
        this.$store.dispatch('inventory/give', {
          item: Charcoal,
          amount: this.give
        })
      })
    }
  }
}
</script>
