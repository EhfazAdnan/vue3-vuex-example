<template>
  <button @click="increment">Increment</button>
  <button @click="incrementByNumber">Increment By 10</button>
</template>

<script>
export default {
  methods: {
    increment(){
      this.$store.commit('increment')
    },
    incrementByNumber(){
      this.$store.commit('incrementByNumber', 10)
    }
  }
}
</script>

<style scoped>
</style>
