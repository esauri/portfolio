<template>
  <article class='wrapper'>
    <section class='mt-4 w-full'>
        <!-- Intro -->
        <section class='max-w-md mx-auto p-4'>
          <ul class='flex flex-wrap list-reset'>
            <li class='font-bold rounded-full text-blue text-grey text-sm uppercase'>
              Front-End Developer
            </li>
          </ul>
          <h1>Erick Sauri</h1>
          <p>
            Hi there, I'm Erick, a front-end developer  who works on web and mobile apps.
          </p>
          <nuxt-link
            to='quickpost'
            class='bg-red-light btn font-semibold hover:bg-red hover:text-white hover:shadow-lg inline-block my-4 px-8 py-3 rounded shadow-md text-white'
          >
            <span>View featured project</span>
            <span class='icon'>
              <FontAwesomeIcon icon='angle-right'></FontAwesomeIcon>
            </span>
          </nuxt-link>
        </section>
    </section>

    <section class='flex flex-col md:flex-row flex-wrap'>
      <Card
        v-for='project in projects'
        :key='project.id'
        :columns='projects.length'
        :project='project'
      />
    </section>
  </article>
</template>

<script>
  import FontAwesomeIcon from '~/components/FontAwesomeIcon';
  import Card from '~/components/Card';
  import Pic from '~/components/Pic';

  export default {
    components: {
      FontAwesomeIcon,
      Card,
      Pic,
    },
    computed: {
      /**
       * Returns projects
       *
       */
      projects() {
        // Don't show quickposts here for now
        return this.$store.getters.projectList;
      }
    },
  }
</script>

<style scoped>
  .wrapper {
    @apply max-w-wrapper mx-auto;
  }

  .banner-featured {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 400px;
    z-index: 0;

    background-position: center;
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('~assets/images/tiptap/tiptap_banner.jpg');
  }

  @media only screen and (min-width: 768px) {
    .banner-featured {
      height: 100%;
    }
  }
</style>
