<template>
  <main>
    <!-- Header -->
    <header class='bg-white header w-screen z-50' :class='{ "fixed pin-t shadow sticky-nav": (stickyHeader && !isHomePage) }'>
      <section class='container flex items-center justify-between py-3'>
        <Logo/>
        <nav>
          <section class='sm:hidden'>
            <MobileNav/>
          </section>
          <section class='hidden sm:block'>
            <Navigation/>
          </section>
        </nav>
      </section>
    </header>
    <nuxt/>
    <Recirc />
    <Footer />
  </main>
</template>

<style>
html {
  box-sizing: border-box;
  font-family: -apple-system, ".SFNSText-Regular", "Avenir Next",
    "San Francisco", "Roboto", "Lato", sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  color: #e74c3c;
  text-decoration: none;
}

a:hover,
.link:hover {
  color: #e74c3c;
  text-decoration: underline;
}

h1 {
  @apply py-2 text-3xl;
}

h2 {
 @apply py-2 text-2xl;
}

h3 {
  @apply py-2 text-xl text-grey-light;
}

p, .p {
  line-height: 1.6;
  /* margin-bottom: 1em; */
  letter-spacing: -0.004em;
  overflow-wrap: break-word;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
  word-break: break-word;
  @apply font-serif font-normal text-lg;
}

.sticky-nav {
  animation: slide-down 0.2s ease-in-out;
}

.header {
  height: 70px;
}

.banner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  min-height: 400px;
  height: calc(100vh - 70px);
  z-index: 0;

  background-position: center;
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;
}

.banner-chevron-down {
  position: absolute;
  left: 50%;
  bottom: 1em;
	width: 20px;
	height: 20px;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-radius: 0 0 4px;
  transform-origin: 0 100%;
  transform: rotate(45deg) translateX(-50%);
  animation: signal 1s ease-out infinite;
}

.btn {
  transition: all .15s ease;
}

.btn:hover {
  text-decoration: none;
  transform: translateY(-1px);
}

/* Sample `apply` at-rules with Tailwind CSS */
.container {
  @apply max-w-container mx-auto px-5;
}

@supports(padding: max(0px)) {
  .container {
    padding-left: max(1.25rem, env(safe-area-inset-left));
    padding-right: max(1.25rem, env(safe-area-inset-right));
  }
}

.icon {
  @apply inline-block;
  transition: transform 0.2s ease;
}

.thumbnail-figure {
  overflow: hidden;
}

.thumbnail {
  @apply block;
  position: relative;
  transform: scale(1.25);
  transition: transform 0.2s ease;
}

a:hover .icon {
  transform: translateX(4px);
}

a:hover .thumbnail {
  transform: scale(1);
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s
}

.page-enter, .page-leave-active {
  opacity: 0
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}

@media only screen and (min-width: 768px) {
  p, .p {
    line-height: 1.8;
    @apply text-xl;
  }

  .banner {
    background-attachment: fixed;
  }
}

@keyframes slide-down {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes signal {
  0% {
    bottom: 4em;
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    bottom: 1em;
  }
}

@keyframes rainbow-color {
  0% {
    color: #f66b34;
  }

  20% {
    color: #f1b340;
  }

  40% {
    color: #7dcf85;
  }

  60% {
    color: #5480f1;
  }

  80% {
    color: #b062ea;
  }

  100% {
    color: #e74c3c;
  }
}
</style>

<script>
  import Logo from '~/components/Logo.vue';
  import Footer from '~/components/Footer.vue';
  import MobileNav from '~/components/MobileNav.vue';
  import Navigation from '~/components/Navigation.vue';
  import Recirc from '~/components/Recirc.vue';

  export default {
    components: {
      Logo,
      Footer,
      MobileNav,
      Navigation,
      Recirc,
    },
    computed: {
      isHomePage() {
        return this.$route.name === 'index';
      }
    },
    data() {
      return {
        stickyHeader: false,
        windowHeight: window.innerHeight - 70,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        // Get current y position
        const currentYPosition = window.pageYOffset;

        // If scrolled past the window height make it sticky
        this.stickyHeader = currentYPosition > this.windowHeight;
      },
    },
  };
</script>