<template>
  <img
    v-bind='$attrs'
    ref='image'
    :sizes='imageSizes'
    :src='imageSrc'
    :srcset='imageSrcset'
  />
</template>

<script>
import WhiteBG from '~/assets/images/misc/white-bg.jpg';

export default {
  inheritAttrs: false,
  props: {
    lazy: {
      default: false,
      type: Boolean,
    },
    zoomable: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      lazyLoaded: !this.lazy,
    };
  },
  computed: {
    /**
     * If lazy loading use the actual image sizes attribute when it has loaded
     *
     */
    imageSizes: function () {
      if (!this.lazy) return this.$attrs.sizes;

      return this.lazy && this.lazyLoaded ? this.$attrs.sizes : null;
    },
    /**
     * If lazy loading use the actual image src attribute when it has loaded
     *
     */
    imageSrc: function () {

      if (!this.lazy) return this.$attrs.src;

      return this.lazy && this.lazyLoaded ? this.$attrs.src : WhiteBG;
    },
    /**
     * If lazy loading use the actual image srcset attribute when it has loaded
     *
     */
    imageSrcset: function () {
      if (!this.lazy) return this.$attrs.srcset;

      return this.lazy && this.lazyLoaded ? this.$attrs.srcset : null;
    },
    /**
     * Returns zooming instance from store
     *
     */
    zooming() {
      return this.$store.getters.zooming;
    }
  },
  mounted() {
    // If zoomable
    if (this.zoomable) {
      // Listen for zooming
      this.zooming.listen(this.$refs.image);
    }

    // If lazy loading
    if (this.lazy) {
      // Handle lazy loading
      this.handleLazyLoad();
    }
  },
  methods: {
    /**
     * Handles lazy loading
     *
     */
    handleLazyLoad() {
      // If IntersectionObserver is not available
      if (!'IntersectionObserver' in window) {
        // Just lazy load it
        this.lazyLoaded = true;
        // Exit
        return;
      }

      // "Intersect" certain pixels before actual top
      const observerOptions = {
        rootMargin: '0px 0px 50px 0px',
      };

      // Create IntersectionObserver
      const imageObserver = new IntersectionObserver((images, observer) => {
        images.forEach((image) => {
          // If element is intersecting
          if (image.isIntersecting) {
            // Get target
            var element = image.target;
            // Lazy load
            this.lazyLoaded = true;

            // Unobserve target
            observer.unobserve(element);
          }
        });
      }, observerOptions);

      // Observe image
      imageObserver.observe(this.$refs.image);
    }
  },
}
</script>

