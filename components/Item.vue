<template>
  <div v-tooltip="`${item.name} x${item.amount}`" class="item">
    <img :alt="item.name" :src="item.icon" class="icon">
    <!--
    <button v-if="item.sellable" @click="sellItem(item)">
        Sell x1 - {{ calculateItemValue(item) }}
    </button>
    -->
  </div>
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
