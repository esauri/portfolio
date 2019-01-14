<template>
  <section class='video'>
    <iframe
      class='vimeo'
      :title='title'
      :src='src'
      width='420'
      height='236'
      frameBorder='0'
      allowFullScreen
    />
  </section>
</template>

<script>
  export default {
    props: {
      src: {
        required: true,
        type: String,
      },
      title: {
        required: true,
        type: String,
      },
    },
  }
</script>

<style scoped>
  .video {
    height: 0;
    overflow: hidden;
    position: relative;
    padding-bottom: 56.25%;
  }

  .vimeo {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>

