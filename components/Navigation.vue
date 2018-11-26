<template>
  <nav>
  <!-- Mobile -->
  <section />
  <!-- Desktop -->
  <section>
    <ul class='flex list-reset'>
      <li class='flex items-center justify-center'>
        <nuxt-link class='antialiased font-light nav-link no-underline px-4 text-lg text-white' to='about'>
          About
        </nuxt-link>
      </li>
      <li class='flex items-center justify-center'>
        <button
          class='antialiased font-light link nav-link no-underline px-4 outline-none relative text-lg text-white'
          @mouseenter='handleDropdown(true)'
          @mouseleave='handleMouseLeave'
          @touchstart='handleDropdown(!showDropdown)'
        >
          Work

          <!-- Dropdown -->
          <section v-if='showDropdown' class='dropdown-nav'>
            <section class='bg-grey-darker dropdown-arrow' />
            <!-- Projects -->
            <section v-if='projects.length' class='bg-grey-darker pb-2 pt-4 px-4 rounded-t-lg text-left'>
              <h3 class='text-grey'>Projects</h3>
              <ul class='flex flex-col list-reset'>
                <li v-for='project in projects' :key='project.id'>
                  <nuxt-link class='flex no-underline text-white' :to='project.alias'>
                    <section class='w-1/4'>
                      <img class='rounded-circle' :src='project.assets.icon.src' :alt='project.assets.icon.description'>
                    </section>
                    <section class='flex flex-col w-5/6'>
                      <h3 class='py-2 w-full'>{{ project.name }}</h3>
                      <p class='w-full'>{{ project.description }}</p>
                    </section>
                  </nuxt-link>
                </li>
              </ul>
            </section>
            <!-- Playground -->
            <section v-if='playground.length' class='bg-grey-darker pt-2 pb-4 px-4 rounded-b-lg text-left'>
              <h3 class='text-grey'>Playground</h3>
            </section>
          </section>
          <!-- End Dropdown -->
        </button>
      </li>
      <li class='flex items-center justify-center'>
        <a class='antialiased font-light nav-link no-underline px-4 text-lg text-white' target='_blank' :href='socialMediaUrls.github'>
          Github
        </a>
      </li>
      <li class='flex items-center justify-center'>
        <a class='antialiased font-light nav-link no-underline px-4 text-lg text-white' target='_blank' :href='socialMediaUrls.resume'>
          Resume
        </a>
      </li>
    </ul>
  </section>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        showDropdown: false,
      };
    },
    computed: {
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
