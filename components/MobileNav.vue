/**
 * Mobile Navigation
 *
 */
<template>
  <section class='flex justify-center relative'>
    <button class='focus:outline-none' @click='toggleMenu'>
      <HamburgerIcon />
    </button>
    <!-- Menu -->
    <section v-if='showMenu' class='bg-grey-darker fixed h-screen mobile-nav pin overflow-y-scroll z-40'>
      <!-- Header -->
      <section class='container flex justify-between py-3'>
        <!-- Logo -->
        <Logo white />
        <!-- Close button -->
        <button class='text-white focus:outline-none' @click='toggleMenu'>
          <span class='close'></span>
        </button>
      </section>
      <!-- Nav -->
      <section class='mobile-nav-projects'>
        <!-- Projects -->
        <section v-if='projects.length' class='pb-2 pt-4 px-4'>
          <h2 class='text-grey'>Projects</h2>
          <ul class='flex flex-col list-reset'>
            <li v-for='(project, index) in projects' :key='index' class='my-3'>
              <nuxt-link class='block nav-link no-underline hover:no-underline text-white' :to='project.alias'>
                <ListItem>
                  <template slot='image'>
                    <img class='rounded-full w-12' :src='project.assets.icon.src' :alt='project.assets.icon.description'>
                  </template>
                  <template slot='title'>
                    <h3 class='p-0 text-white'>{{ project.name }}</h3>
                  </template>
                </ListItem>
              </nuxt-link>
            </li>
          </ul>
        </section>
        <!-- General -->
        <section class='pb-2 pt-4 px-4'>
          <h2 class='text-grey'>General</h2>
          <ul class='flex flex-wrap list-reset'>
            <li class='w-1/2'>
              <nuxt-link class='antialiased block font-light no-underline hover:no-underline pl-0 p-4 text-lg text-white' to='/'>Home</nuxt-link>
            </li>
            <li class='w-1/2'>
              <nuxt-link class='antialiased block font-light no-underline hover:no-underline pl-0 p-4 text-lg text-white' to='/about'>About</nuxt-link>
            </li>
            <li class='w-1/2'>
              <a class='antialiased block font-light no-underline hover:no-underline pl-0 p-4 text-lg text-white' rel='noopener noreferrer' target='_blank' :href='socialMediaUrls.github'>Github</a>
            </li>
            <li class='w-1/2'>
              <a class='antialiased block font-light no-underline hover:no-underline pl-0 p-4 text-lg text-white' rel='noopener noreferrer' target='_blank' :href='socialMediaUrls.resume'>Resume</a>
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
    animation: fade 0.2s ease-in;
  }

  .mobile-nav-projects {
    animation: slide-up 0.3s ease-in-out;
  }

  .nav-link p,
  .nav-link h3 {
    color: inherit !important;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
