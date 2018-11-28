<template>
  <span>
    <span class='line'></span>
    <span class='line'></span>
    <span class='line'></span>
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
  background: currentColor;
  color: inherit;
  padding-top: 2px;
}

.line:last-of-type {
  margin-bottom: 0;
}
</style>

