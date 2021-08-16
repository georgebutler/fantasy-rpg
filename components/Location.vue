<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="title">
          {{ name }}
        </div>
        <div>
          <slot />
        </div>
      </div>
    </div>
  </section>
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
