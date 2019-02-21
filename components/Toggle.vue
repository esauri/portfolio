<template>
  <div class='toggle' :class='{ "toggle--checked": checked }'>
    <label :for='toggleId' class='block relative toggle-track' :class='[darkTheme ? "bg-white" : "bg-grey-darkest"]'>
      <div class='flex items-end h-full toggle-track-check'>
        <slot name='toggle-track-checked'></slot>
      </div>
      <div class='flex items-end h-full toggle-track-x'>
        <slot name='toggle-track-x'></slot>
      </div>
    </label>
    <label :for='toggleId' class='block toggle-thumb' :class='[darkTheme ? "bg-grey-darkest" : "bg-white"]'></label>
    <input
      :aria-label='ariaLabel'
      :checked='checked'
      :id='toggleId'
      class='toggle-screenreader-only'
      type='checkbox'
      @change='handleOnChange'
    >
  </div>
</template>

<style scoped>
/*
 * Copyright (c) 2015 instructure-react
 * Forked from https://github.com/aaronshaf/toggle/
**/

.toggle {
  touch-action: pan-x;

  display: inline-block;
  position: relative;
  cursor: pointer;
  border: 0;
  padding: 0;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

.toggle-screenreader-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.toggle-track {
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.toggle-track-check {
  position: absolute;
  width: 17px;
  left: 5px;
  top: 0px;
  bottom: 0px;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.toggle--checked .toggle-track-check {
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.toggle-track-x {
  position: absolute;
  width: 17px;
  right: 5px;
  top: 0px;
  bottom: 0px;

  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.toggle--checked .toggle-track-x {
  opacity: 0;
}

.toggle-thumb {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
}

.toggle--checked .toggle-thumb {
  left: 27px;
}
</style>

<script>
export default {
  props: {
    ariaLabel: {
      default: null,
      type: String,
    },
    checked: {
      default: false,
      type: Boolean,
    },
    toggleId: {
      required: true,
      type: String,
    },
  },
  computed: {
    darkTheme() {
      return this.$store.getters.theme === 'dark';
    },
  },
  methods: {
    handleOnChange(e) {
      this.$emit('change', e);
    },
  },
};
</script>


