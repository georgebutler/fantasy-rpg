<template>
  <div>
    <h1>Fantasy RPG</h1>

    <h2>Extractors</h2>
    <ExtractorIronOre />

    <h2>Refiners</h2>
    <RefinerIron />

    <h2>Fabricators</h2>
    <FabricatorIronPlating />

    <h2>Inventory</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        <span>{{ item.name }} x{{ item.amount }}</span>
        <button v-if="item.sellable">
          Sell x1 - {{ calculateItemValue(item) }}
        </button>
      </li>
    </ul>

    <h2>Log</h2>
    <button @click="addLogMessage">
      Add Log Message
    </button>
    <ul>
      <li v-for="message in messages" :key="message.timestamp">
        <span>{{ message.text }}</span>
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
    },
    messages () {
      return this.$store.state.log.messages
    },
    itemPrice (item) {
      return item.basePrice
    }
  },
  methods: {
    addLogMessage () {
      this.$store.dispatch('log/add', {
        text: 'Hello world!'
      })
    },
    calculateItemValue (item) {
      return item.value
    }
  }
}
</script>
