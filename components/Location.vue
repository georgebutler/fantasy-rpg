<template>
  <div class="location">
    <h2>{{ name }}</h2>
    <h5>Actions</h5>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Location',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
