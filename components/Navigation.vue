/**
 * Desktop Navigation
 *
 */
<template>
  <section>
    <ul class='flex list-reset'>
      <li class='flex items-center justify-center'>
        <nuxt-link class='antialiased font-light nav-link no-underline hover:no-underline px-4 text-lg ' :class='[ darkTheme ? "text-white" : "text-black" ]'' to='about'>
          About
        </nuxt-link>
      </li>
      <li class='flex items-center justify-center'>
        <button
          class='antialiased font-light link nav-link no-underline hover:no-underline px-4 focus:outline-none relative text-lg ' :class='[ darkTheme ? "text-white" : "text-black" ]''
          @mouseenter='handleDropdown(true)'
          @mouseleave='handleMouseLeave'
          @touchstart='handleDropdown(!showDropdown)'
        >
          <span>Work</span>
          <!-- Dropdown -->
          <section v-if='showDropdown' class='dropdown-nav z-10'>
            <section class='bg-grey-darker dropdown-arrow' />
            <!-- Projects -->
            <section v-if='projects.length' class='bg-grey-darker pb-2 pt-4 px-4 rounded-t-lg text-left'>
              <h2 class='text-grey'>Projects</h2>
              <ul class='flex flex-wrap list-reset'>
                <li v-for='project in projects' :key='project.id' class='my-3 w-1/2'>
                  <nuxt-link class='block no-underline hover:no-underline text-white' :to='project.alias'>
                    <ListItem>
                      <template slot='image'>
                        <img class='rounded-full w-12' :src='project.assets.icon.src' :alt='project.assets.icon.description'>
                      </template>
                      <template slot='title'>
                        <h3 class='p-0 text-white'>{{ project.name }}</h3>
                      </template>
                      <!-- <template slot='description'>
                        <p class='font-hairline font-sans text-base'>{{ project.description }}</p>
                      </template> -->
                    </ListItem>
                  </nuxt-link>
                </li>
              </ul>
            </section>
            <!-- Playground -->
            <section v-if='playground.length' class='bg-grey-darker pt-2 pb-4 px-4 rounded-b-lg text-left'>
              <h2 class='text-grey'>Playground</h2>
              <ul class='flex flex-wrap list-reset'>
                <li v-for='playgroundItem in playground' :key='playgroundItem.id' class='my-3 w-1/2'>
                  <nuxt-link class='block no-underline hover:no-underline text-white' :to='playgroundItem.alias'>
                    <ListItem>
                      <template slot='image'>
                        <img class='rounded-full w-10' :src='playgroundItem.assets.icon.src' :alt='playgroundItem.assets.icon.description' />
                      </template>
                      <template slot='title'>
                        <h3 class='p-0 text-white'>{{ playgroundItem.name }}</h3>
                      </template>
                    </ListItem>
                  </nuxt-link>
                </li>
              </ul>
            </section>
          </section>
          <!-- End Dropdown -->
        </button>
      </li>
      <li class='flex items-center justify-center'>
        <a class='antialiased font-light nav-link no-underline hover:no-underline px-4 text-lg ' :class='[ darkTheme ? "text-white" : "text-black" ]'' rel='noopener noreferrer' target='_blank' :href='socialMediaUrls.github'>
          Github
        </a>
      </li>
      <li class='flex items-center justify-center'>
        <a class='antialiased font-light nav-link no-underline hover:no-underline px-4 text-lg ' :class='[ darkTheme ? "text-white" : "text-black" ]'' rel='noopener noreferrer' target='_blank' :href='socialMediaUrls.resume'>
          Resume
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  import ListItem from '~/components/ListItem';

  export default {
    components: {
      ListItem,
    },
    data() {
      return {
        showDropdown: false,
      };
    },
    computed: {
      darkTheme() {
        return this.$store.getters.theme === 'dark';
      },
      projects() {
        return this.$store.getters.projectList;
      },
      playground() {
        return this.$store.getters.playgroundList;
      },
      socialMediaUrls() {
        return this.$store.getters.socialMediaUrls;
      }
    },
    methods: {
      /**
       * Handles dropdown
       *
       * @param {bool} show
       */
      handleDropdown(show) {
        this.showDropdown = show;
      },
      /**
       * Handles mouse leave
       *
       */
      handleMouseLeave() {
        // Hide after a few milliseconds
        setTimeout(() => this.handleDropdown(false), 50);
      },
    },
    watch: {
      /**
       * Hides dropdown when route changes
       *
       */
      $route () {
        this.showDropdown = false;
      }
    },
  }
</script>

<style scoped>
  .nav-link p,
  .nav-link h3 {
    color: inherit !important;
  }

  .nav-link:hover {
    text-decoration: none;
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

  .dropdown-nav {
    animation: dropdown-reveal 0.2s ease-in;
    padding: 1em;
    width: 550px;
    position: absolute;
    transform: translateX(-46%);
    z-index: 5;
  }

  .dropdown-arrow {
    position: absolute;
    width: 1em;
    height: 1em;
    top: 1.1em;
    left: 50%;
    border-radius: 4px;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  @keyframes dropdown-reveal {
    0% {
      opacity: 0;
      transform: translate(-46%, 25px);
    }

    100% {
      opacity: 1;
      transform: translate(-46%, 0);
    }
  }
</style>
