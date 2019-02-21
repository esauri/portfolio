<template>
  <section class='card-container overflow-hidden text-white' :class='{ "md:mt-32": (!recirc && !alignmentClass), "md:w-1/4": (recirc && (columns > 3)), "md:w-1/3": (recirc && !(columns > 3)), "md:pb-8 w-full md:px-4 md:w-1/2": !recirc }' >
    <nuxt-link
      :to='project.alias'
      class='block card hover:text-white overflow-hidden text-white w-full'
    >
      <!-- Image -->
      <section
        class='card-thumbnail'
        :style='project.assets.thumbnail.src | background'
      ></section>
      <!-- Label -->
      <section class='card-label mb-4 w-full' :class='textAlignmentClass'>
      <h2 class='text text-shadow'>
        {{ project.name }}
        <span v-if='recirc' class='icon'>
          <FontAwesomeIcon icon='angle-right'></FontAwesomeIcon>
        </span>
      </h2>
      <h4 class='blurb text-shadow' :class='{ "md:hidden": !recirc }'>
        {{ project.description }}
      </h4>
    </section>
    </nuxt-link>

  <h4 v-if='!recirc' class='card-subtitle hidden md:block mt-2 w-full' :class='[textAlignmentClass, darkTheme ? "text-white" : "text-black"]'>
    <span>view project</span>
    <span class='icon'>
      <FontAwesomeIcon icon='angle-right'></FontAwesomeIcon>
    </span>
  </h4>
  </section>
</template>


<style scoped>
  .card-container {
    min-height: 375px;
  }

  .card {
    position: relative;
    height: 375px;
    z-index: 0;
  }

  .card:hover .card-thumbnail {
    transform: scale(1);
  }

  .card-thumbnail {
    position: relative;
    height: 100%;
    transform: scale(1.25);
    transition: transform 0.2s;
    background-size: cover;
  }

  .card-label {
    bottom: 0;
    position: absolute;
    padding: 0 1.11rem;
  }

  .card-subtitle {
    opacity: 0;
    transform: translateY(100%);
    transition: opacity 0.2s, transform 0.2s, -webkit-transform 0.2s;
  }

  .card:hover + .card-subtitle {
    opacity: 1;
    transform: translateY(0);
  }

  .text-shadow {
    text-shadow: 0.5px 0.5px 0.5px black
  }

  @media only screen and (min-width: 760px) {
    .card-container {
      min-height: 475px;
    }

    .card {
      height: 475px;
    }
  }
</style>

<script>
  import FontAwesomeIcon from '~/components/FontAwesomeIcon';
  import Pic from '~/components/Pic';

  export default {
    props: {
      columns: {
        default: 4,
        type: Number,
      },
      project: {
        required: true,
        type: Object,
      },
      recirc: {
        default: false,
        type: Boolean,
      },
    },
    components: {
      FontAwesomeIcon,
      Pic,
    },
    computed: {
      /**
       * Returns alignment class
       *
       */
      alignmentClass() {
        return this.project.id % 2 === 0;
      },
      darkTheme() {
        return this.$store.getters.theme === 'dark';
      },
      /**
       * Returns text-alignment class
       *
       */
      textAlignmentClass() {
        if (this.recirc) return '';

        return this.project.id % 2 === 0 ? 'md:text-right' : 'md:text-left';
      }
    },
    filters: {
      background(src) {
        return `background: url('${src}') no-repeat center center; backgroundSize: cover`;
      },
    },
  }
</script>
