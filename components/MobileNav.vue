/**
 * Mobile Navigation
 *
 */
<template>
  <section class='flex justify-center'>
    <button class='text-white focus:outline-none' @click='toggleMenu'>
      <HamburgerIcon />
    </button>

    <section v-if='showMenu' class='fixed bg-grey-darker pin'>
      <section>
        <!-- Close button -->
        <section class='bg-grey-darkest flex justify-end max-w-2xl mx-auto px-8 py-5'>
          <Logo />
          <button class='text-white focus:outline-none' @click='toggleMenu'>Close</button>
        </section>
        <!-- Projects -->
        <section v-if='projects.length' class='pb-2 pt-4 px-4'>
          <h3 class='text-grey'>Projects</h3>
          <ul class='flex flex-col list-reset'>
            <li v-for='(project, index) in projects' :key='index' class='my-3'>
              <nuxt-link class='block no-underline text-white' :to='project.alias'>
                <ListItem>
                  <template slot='image'>
                    <img class='rounded-full w-12' :src='project.assets.icon.src' :alt='project.assets.icon.description'>
                  </template>
                  <template slot='title'>
                    <h3>{{ project.name }}</h3>
                  </template>
                </ListItem>
              </nuxt-link>
            </li>
          </ul>
        </section>
        <!-- General -->
        <section class='pb-2 pt-4 px-4'>
          <h3 class='text-grey'>General</h3>
          <ul class='flex flex-wrap list-reset'>
            <li class='w-1/2'>
              <nuxt-link class='antialiased block font-light no-underline pl-0 p-4 text-lg text-white' to='/'>Home</nuxt-link>
            </li>
            <li class='w-1/2'>
              <nuxt-link class='antialiased block font-light no-underline pl-0 p-4 text-lg text-white' to='/about'>About</nuxt-link>
            </li>
            <li class='w-1/2'>
              <a class='antialiased block font-light no-underline pl-0 p-4 text-lg text-white' rel='noopener noreferrer' target='_blank' :href='socialMediaUrls.github'>Github</a>
            </li>
            <li class='w-1/2'>
              <a class='antialiased block font-light no-underline pl-0 p-4 text-lg text-white' rel='noopener noreferrer' target='_blank' :href='socialMediaUrls.resume'>Resume</a>
            </li>
          </ul>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue';
  import ListItem from '~/components/ListItem.vue';
  import HamburgerIcon from '~/components/HamburgerIcon.vue';

  export default {
    components: {
      ListItem,
      HamburgerIcon,
    },
    data() {
      return {
        showMenu: false,
      };
    },
    computed: {
      projects() {
        const { playgroundList, projectList } = this.$store.getters;
        return [...projectList, ...playgroundList];
      },
      socialMediaUrls() {
        return this.$store.getters.socialMediaUrls;
      }
    },
    methods: {
      /**
       * Handles menu
       *
       */
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
    },
    watch: {
      /**
       * Hides menu when route changes
       *
       */
      $route () {
        this.showMenu = false;
      }
    },
  }
</script>

<style scoped>
  .nav-link::after {
    display: block;
    content: '';
    border-bottom: 2px solid currentColor;
    transform: scaleX(0);
    transition: transform 0.2s;
  }

  .nav-link:hover::after {
    transform: scaleX(1);
  }

  .dropdown-nav {
    animation: dropdown-reveal 0.2s;
    padding: 1em;
    width: 400px;
    position: absolute;
    transform: translateX(-45%);
    z-index: 5;
  }

  .dropdown-arrow {
    position: absolute;
    width: 1em;
    height: 1em;
    top: 1em;
    left: 50%;
    border-radius: 4px;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  @keyframes dropdown-reveal {
    0% {
      opacity: 0;
      transform: perspective(600px) rotateX(-30deg) translateX(-45%);
    }

    100% {
      opacity: 1;
      transform: rotateX(0) translateX(-45%);
    }
  }
</style>
