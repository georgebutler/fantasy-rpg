<template>
  <figure v-tooltip="`${item.name} x${item.amount}`" class="image is-64x64">
    <img :alt="item.name" :src="item.icon" class="icon">
    <!--
    <button v-if="item.sellable" @click="sellItem(item)">
        Sell x1 - {{ calculateItemValue(item) }}
    </button>
    -->
  </figure>
</template>

<script>
export default {
  name: 'ItemIcon',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
