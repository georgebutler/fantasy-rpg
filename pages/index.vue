<template>
  <div>
    <h2>Extractors</h2>
    <ExtractorIron />

    <h2>Refiners</h2>
    <RefinerIron />

    <h2>Inventory</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        <span>{{ item.name }} x{{ item.amount }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    items () {
      return this.$store.state.inventory.items
    }
  }
}
</script>
