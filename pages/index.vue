<template>
  <article class='flex flex-col md:flex-row'>
    <!-- Featured project banner -->
    <nuxt-link to='tiptap' class='hidden md:block w-screen md:w-1/3 lg:w-1/2'>
      <figure class='thumbnail-figure h-full'>
        <aside class='thumbnail banner-featured'></aside>
      </figure>
    </nuxt-link>
    <!-- Right -->
    <section class='mt-4 w-full md:w-2/3 lg:w-1/2'>
        <!-- Intro -->
        <section class='border-b border-grey-lighter max-w-md mx-auto p-4'>
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
            to='tiptap'
            class='bg-red-light btn font-semibold hover:bg-red hover:text-white hover:shadow-lg inline-block my-4 px-8 py-3 rounded shadow-md text-white'
          >
            <span>View featured project</span>
            <span class='icon'>
              <FontAwesomeIcon icon='angle-right'></FontAwesomeIcon>
            </span>
          </nuxt-link>
        </section>
        <!-- Projects -->
        <section
          v-for='project in projects'
          :key='project.id'
          class='border-b border-grey-lighter flex flex-col-reverse md:flex-row items-center max-w-md mx-auto'
        >
          <section class='w-full md:w-1/2 p-4'>
            <h1>{{ project.name }}</h1>
            <p>
              {{ project.description }}
            </p>
            <nuxt-link
              :to='project.alias'
              class='bg-grey-lightest btn font-semibold hover:bg-white hover:shadow-lg inline-block my-2 px-8 py-3 rounded shadow-md text-red'
            >
              <span>View project</span>
              <span class='icon'>
                <FontAwesomeIcon icon='angle-right'></FontAwesomeIcon>
              </span>
            </nuxt-link>
          </section>
          <nuxt-link
            :to='project.alias'
            class='block w-full md:w-1/2 md:p-4'
          >
            <figure class='thumbnail-figure md:rounded'>
              <Pic
                class='thumbnail w-full'
                :alt='project.assets.thumbnail.description'
                :src='project.assets.thumbnail.src'
              />
            </figure>
          </nuxt-link>
        </section>
    </section>
  </article>
</template>

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
        return this.$store.getters.projectList;
      }
    },
  }
</script>

<style scoped>
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
