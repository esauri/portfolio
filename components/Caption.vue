<template>
  <figcaption class='mt-2 text-center text-sm' :class='[darkTheme ? "text-grey-lighter" : "text-grey-dark"]'>
    <slot></slot>
  </figcaption>
</template>

<script>
export default {
  computed: {
    darkTheme() {
      return this.$store.getters.theme === 'dark';
    },
  },
}
</script>

