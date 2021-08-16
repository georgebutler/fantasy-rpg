<template>
  <div>
    <Location name="Forest">
      <Forage />
    </Location>

    <div>
      <div>
        <h2>Tower</h2>
        <Furnace />
      </div>

      <div>
        <Inventory />
      </div>

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
