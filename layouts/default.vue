<template>
  <div class='bg-black text-white'>
    <header class='bg-grey-darker'>
      <section class='bg-grey-darkest flex items-center justify-between max-w-2xl mx-auto px-8 py-3'>
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
  </div>
</template>

<style>
html {
  background: #020202;
  box-sizing: border-box;
  color: #fff;
  font-family: -apple-system, ".SFNSText-Regular", "Avenir Next",
    "San Francisco", "Roboto", "Lato", sans-serif;
  font-size: 16px;
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

a:hover,
.link:hover {
  animation: rainbow-color 1s infinite;
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
import Logo from "~/components/Logo.vue";
import MobileNav from "~/components/MobileNav.vue";
import Navigation from "~/components/Navigation.vue";

export default {
  components: {
    Logo,
    MobileNav,
    Navigation
  }
};
</script>