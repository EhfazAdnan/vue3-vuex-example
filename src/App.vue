<template>
  <p>{{ $store.state.counter }}</p>
  <IncrementCounter />

  <br>
  <hr/>

  <p>{{ $store.state.counter }}</p>
  <IncrementCounter />
</template>

<script>
import IncrementCounter from "@/components/incrementCounter.vue";
export default {
  components: {IncrementCounter}
}
</script>

<style scoped>
</style>
