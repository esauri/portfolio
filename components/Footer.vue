<template>
  <footer class='footer text-center'>
    <section class='footer-left'>
      <span class='font-sans m-0 py-4'>&copy; Erick Sauri {{ currentYear }}</span>
    </section>
    <ul class='bg-white footer-right list-reset md:py-16'>
      <li class='py-4'>
        <a rel='noopener noreferrer' :href='emailUrl'>ericksaurisyl[at]gmail.com</a>
      </li>
      <li class='py-4'>
        <a rel='noopener noreferrer' target='_blank' :href='socialMediaUrls.github'>Github</a>
      </li>
      <li class='py-4'>
        <a rel='noopener noreferrer' target='_blank' :href='socialMediaUrls.linkedIn'>LinkedIn</a>
      </li>
    </ul>
  </footer>
</template>

<script>
  export default {
    computed: {
      emailUrl() {
        return `mailto:${this.$store.getters.socialMediaUrls.email}`;
      },
      currentYear() {
        return new Date().getFullYear();
      },
      socialMediaUrls() {
        return this.$store.getters.socialMediaUrls;
      }
    },
  }
</script>

<style scoped>
  @media screen and (min-width: 768px) {
    .footer {
      display: flex;
      justify-content: center;
      /* Grid override */
      display: grid;
      align-items: center;
      grid-template-columns: 30vw 70vw;
    }

    .footer-left {
      flex-basis: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .footer-right {
      flex-basis: 50%;
      /* Grid override */
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
