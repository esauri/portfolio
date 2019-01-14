<template>
  <nuxt-link class='block' to='/'>
    <img alt='Erick Sauri Logo' class='w-8' :src='logoURL' />
  </nuxt-link>
</template>

<script>
  import LogoWhite from '~/assets/images/icons/logo.svg';
  import LogoBlack from '~/assets/images/icons/logoblack.svg';

  export default {
    props: {
      white: {
        default: false,
        type: Boolean,
      },
    },
    computed: {
      /**
       * Returns logo url
       *
       */
      logoURL() {
        return this.white ? LogoWhite : LogoBlack;
      }
    },
  }
</script>
