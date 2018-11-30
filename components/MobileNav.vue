/**
 * Mobile Navigation
 *
 */
<template>
  <section class='flex justify-center relative'>
    <button class='text-white focus:outline-none' @click='toggleMenu'>
      <HamburgerIcon />
    </button>
    <!-- Menu -->
    <section v-if='showMenu' class='fixed h-screen pin overflow-y-scroll z-40'>
      <!-- Header -->
      <section class='bg-black container flex justify-between py-3'>
        <!-- Logo -->
        <Logo />
        <!-- Close button -->
        <button class='text-white focus:outline-none' @click='toggleMenu'>
          <span class='close'></span>
        </button>
      </section>
      <!-- Nav -->
      <section class='bg-grey-darker mobile-nav'>
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
      Logo,
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
  .close{
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
    overflow: hidden;
  }

  .close::before,
  .close::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: currentColor;
    border-radius: 4px;
  }

  .close::before {
    transform: rotate(45deg);
  }
  .close::after {
    transform: rotate(-45deg);
  }

  .mobile-nav {
    animation: pop 0.2s;
  }

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

  @keyframes pop {
    0% {
      transform: scale(0.95);
    }

    50% {
      transform: scale(1.05);
    }

    100% {
      transform: scale(1);
    }
  }
</style>
