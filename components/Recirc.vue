<template>
  <section v-if='projects.length' class='flex flex-col md:flex-row'>
    <Card
      v-for='project in projects'
      recirc
      :key='project.id'
      :columns='projects.length'
      :project='project'
    />
  </section>
</template>

<script>
  import FontAwesomeIcon from '~/components/FontAwesomeIcon';
  import Card from '~/components/Card';
  import Pic from '~/components/Pic';

  export default {
    components: {
      FontAwesomeIcon,
      Pic,
      Card,
    },
    computed: {
      /**
       * Returns projects
       *
       */
      projects() {
        // Get current route name
        const routeName = this.$route.name;

        // If home page no recirc
        if (routeName === 'index') return [];

        // Filter out current page from recirc
        return this.$store.getters.projectList.filter(project => project.alias !== routeName);
      },
    },
  }
</script>

