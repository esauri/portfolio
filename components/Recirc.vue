<template>
  <section v-if='projects.length' class='flex flex-col md:flex-row'>
    <nuxt-link
      v-for='project in projects'
      :key='project.id'
      :to='project.alias'
      class='card text-white'
      :class='[projects.length > 3 ? "md:w-1/4" : "md:w-1/3"]'
    >
      <!-- Image -->
      <section
        class='card-thumbnail'
        :style='project.assets.thumbnail.src | background'
      ></section>
      <!-- Label -->
      <section class='card-label mb-4'>
      <h2>
        {{ project.name }}
        <span class='icon'>
          <FontAwesomeIcon icon='angle-right'></FontAwesomeIcon>
        </span>
      </h2>
      <h4 className='blurb'>
        {{ project.description }}
      </h4>
    </section>
    </nuxt-link>
  </section>
</template>

<style scoped>
  .card {
    position: relative;
    width: 100%;
    height: 375px;
    overflow: hidden;
    z-index: 0;
  }

  .card:hover {
    color: white;
    animation: none;
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

  @media only screen and (min-width: 760px) {
    .card {
      margin: 0;
      height: 475px;
    }
  }
</style>

<script>
  import FontAwesomeIcon from '~/components/FontAwesomeIcon';
  import Pic from '~/components/Pic';

  export default {
    components: {
      FontAwesomeIcon,
      Pic
    },
    computed: {
      /**
       * Returns projects
       *
       */
      projects() {
        // Get current route name
        const routeName = this.$route.name;

        // If home page no recirc
        if (routeName === 'index') return [];

        // Filter out current page from recirc
        return this.$store.getters.projectList.filter(project => project.alias !== routeName);
      },
    },
    filters: {
      background(src) {
        return `background: url('${src}') no-repeat center center; backgroundSize: cover`;
      },
    },
  }
</script>

