<template>
  <main>
    <!-- Header -->
    <header>
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

.btn {
  transition: all .15s ease;
}

.btn:hover {
  text-decoration: none;
  transform: translateY(-1px);
}

h1 {
  @apply py-4 text-3xl;
}

h2 {
 @apply py-2 text-2xl;
}

h3 {
  @apply py-2 text-lg;
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

@media only screen and (min-width: 768px) {
  p, .p {
    line-height: 1.8;
    @apply text-xl;
  }
}

/* Sample `apply` at-rules with Tailwind CSS */
.container {
  @apply max-w-container mx-auto px-5;
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

export default {
  components: {
    Logo,
    Footer,
    MobileNav,
    Navigation
  }
};
</script>