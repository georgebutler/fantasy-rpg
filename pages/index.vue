<template>
  <div>
    <Location name="Forest">
      <Forage />
    </Location>
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <Inventory />
        </div>
        <div class="column">
          <Log />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>
