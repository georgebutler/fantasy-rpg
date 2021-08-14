<template>
  <div>
    <h1>Fantasy RPG</h1>

    <Forest />

    <Inventory />

    <div>
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
  </div>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    messages () {
      return this.$store.state.log.messages
    }
  },
  methods: {
    addLogMessage () {
      this.$store.dispatch('log/add', {
        text: 'Hello world!'
      })
    }
  }
}
</script>
