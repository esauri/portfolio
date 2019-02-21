<template>
  <span>
    <span class='line' :class='[ darkTheme ? "bg-white" : "bg-black" ]'></span>
    <span class='line' :class='[ darkTheme ? "bg-white" : "bg-black" ]'></span>
    <span class='line' :class='[ darkTheme ? "bg-white" : "bg-black" ]'></span>
  </span>
</template>

<style scoped>
.line {
  display: block;
  width: 24px;
  height: 2px;
  border-radius: 4px;
  position: relative;
  margin-bottom: 4px;
  color: inherit;
  padding-top: 2px;
}

.line:last-of-type {
  margin-bottom: 0;
}
</style>

<script>
export default {
  computed: {
    darkTheme() {
      return this.$store.getters.theme === 'dark';
    },
  },
}
</script>
