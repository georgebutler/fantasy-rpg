<template>
  <div>
    <div class="subtitle">
      Log
    </div>
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
  name: 'Log',
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
