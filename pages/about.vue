<template>
  <article>
    <!-- Picture Section -->
    <figure class='container my-4'>
      <!-- Profile Picture -->
      <Pic
        zoomable
        :src='profileImageSrc'
        class='block mx-auto w-64 h-64 rounded-full'
        alt='Picture of Erick Sauri'
      />
      <figcaption class='mt-2 text-center text-grey-dark text-sm'>
        Moi
      </figcaption>
    </figure>
    <!-- About Me -->
    <section class='container py-4'>
      <header class='header my-6'>
        <h1 class='title'>About me</h1>
      </header>
      <p class='my-4'>
        Hey! I’m Erick Sauri a front end developer originally from Puerto Rico but currently
        living in Brooklyn. I'm a graduate from Rochester Institute of Technology
        with a Bachelor's in New Media Interactive Development and a minor
        in Mobile App Development. I enjoy working on web and mobile applications as well
        as making games in my spare time. Feel free to email me at <a :href='emailUrl'>ericksaurisyl[at]gmail.com</a>.
      </p>
    </section>
    <!-- Work -->
    <section class='container py-4'>
      <header class='header my-6'>
        <h1 class='title'>Work</h1>
      </header>
      <section class='flex flex-wrap'>
        <!-- Patch -->
        <section class='pb-4 w-full'>
          <h2>Patch Media</h2>
          <h3>New York, NY &middot; March 2018 - Present</h3>
          <ul class='flex flex-wrap list-reset py-4'>
            <li class='border border-grey mr-2 px-3 py-1 rounded-full text-grey text-sm'>Front End Developer</li>
            <li class='border border-grey mr-2 px-3 py-1 rounded-full text-grey text-sm'>Full-time</li>
          </ul>
          <ul class='pl-5'>
            <li class='p'>
              Optimized images using <strong>Fastly Pic Optimization</strong>, implemented responsive images, and lazy loading for images below the fold
            </li>
            <li class='p'>
              Implemented a new, quicker content posting and replying experience for users to share what's happening in their local community
            </li>
            <li class='p'>
              Maintained and implemented new functionality for site and its CMS built on <strong>PHP</strong> and <strong>Drupal</strong>
            </li>
            <li class='p'>
              Created new features using <strong>Vue</strong> and used APIs such as <strong>Google Analytics</strong>, <strong>DoubleClick</strong>, and <strong>Stripe</strong>
            </li>
            <li class='p'>
              Participated in A/B and multivariate testing, utilizing tools such as <strong>Google Optimize</strong>
            </li>
            <li class='p'>
              Created email templates for various newsletter campaigns
            </li>
          </ul>
        </section>
        <!-- Poseidon -->
        <section class='pb-4 w-full'>
          <h2>Poseidon Systems</h2>
          <h3>Rochester, NY &middot; May 2017 - Jan 2018</h3>
          <ul class='flex flex-wrap list-reset py-4'>
            <li class='border border-grey mr-2 px-3 py-1 rounded-full text-grey text-sm'>Software Engineer</li>
            <li class='border border-grey mr-2 px-3 py-1 rounded-full text-grey text-sm'>Co-op</li>
          </ul>
          <ul class='pl-5'>
            <li class='p'>
              Participated in redesign for a hybrid mobile and progressive web app
            </li>
            <li class='p'>
              Developed app front end using <strong>Angular</strong> and <strong>Ionic Framework</strong>
            </li>
            <li class='p'>
              Utilized libraries such as <strong>Highcharts</strong> for oil monitoring data visualization
            </li>
            <li class='p'>
              Performed back end tasks using <strong>Firebase</strong> for authentication, storage, cloud messaging, and database needs
            </li>
          </ul>
        </section>
        <!-- CACI -->
        <section class='pb-4 w-full'>
          <h2>CACI</h2>
          <h3>Rome, NY &middot; Summer 2016</h3>
          <ul class='flex flex-wrap list-reset py-4'>
            <li class='border border-grey mr-2 px-3 py-1 rounded-full text-grey text-sm'>Web Developer</li>
            <li class='border border-grey mr-2 px-3 py-1 rounded-full text-grey text-sm'>Co-op</li>
          </ul>
          <ul class='pl-5'>
            <li class='p'>
              Tasked with maintaining and implementing admin features for a web app
            </li>
            <li class='p'>
              Utilized <strong>Node</strong> for server-side and an internal framework based on the MVC paradigm
            </li>
            <li class='p'>
              Performed database tasks with <strong>PostgreSQL</strong>
            </li>
            <li class='p'>
              Created unit and end to end tests using libraries like <strong>Mocha</strong> and <strong>Selenium</strong>
            </li>
          </ul>
        </section>
      </section>
    </section>
    <!-- Education -->
    <section class='container py-4'>
      <header class='header my-6'>
        <h1 class='title'>Education</h1>
      </header>
      <h2>Rochester Institute of Technology</h2>
      <h3>Rochester, NY (2013 - 2017)</h3>
      <h4 class='my-3'>Bachelor's of Science</h4>
      <ul class='flex flex-wrap list-reset py-4'>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>New Media Interactive Dev<span class='hidden md:inline'>elopment</span></li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Mobile App Development</li>
      </ul>
    </section>
    <!-- Skills -->
    <section class='container py-4'>
      <header class='header my-6'>
        <h1 class='title'>Skills &amp; Tools</h1>
      </header>
      <ul class='flex flex-wrap list-reset py-4'>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>HTML5</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>CSS3</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>SASS</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>LESS</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Node</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Express</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Vue</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>React</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>React Native</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Redux</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Angular</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Rxjs</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Ionic</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>PHP</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Drupal</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Swift</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>C#</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>MySQL</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>PostgreSQL</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Unity</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Sketch</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Photoshop</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Illustrator</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Fastly</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Sailthru</li>
        <li class='border border-grey mb-3 mr-2 px-3 py-1 rounded-full text-grey text-sm'>Google Optimize</li>

      </ul>
    </section>
    <!-- CTA -->
    <section class='bg-grey-darker mt-8'>
      <section class='container py-20 text-center text-white'>
        <h3 class='my-3'>Looking for a PDF of printable version of my resume?</h3>
        <a
          :href='socialMediaUrls.resume'
          class='bg-grey-lightest btn font-semibold hover:bg-white hover:shadow-lg inline-block px-8 py-3 rounded shadow-md text-red'
          target='_blank'
          rel='noopener noreferrer'
        >Resume</a>
      </section>
    </section>
  </article>
</template>

<script>
  import ProfileImage from '~/assets/images/misc/me.jpg';
  import Pic from '~/components/Pic.vue';

  export default {
    components: {
      Pic,
    },
    computed: {
      /**
       * Returns email url
       *
       */
      emailUrl() {
        return `mailto:${this.socialMediaUrls.email}`;
      },
      /**
       * Returns profile Pic src
       *
       */
      profileImageSrc() {
        return ProfileImage;
      },
      /**
       * Returns social media urls
       */
      socialMediaUrls() {
        return this.$store.getters.socialMediaUrls;
      }
    },
  }
</script>

<style scoped>
  .header {
    position: relative;
    overflow: hidden;
  }

  .title::after {
    content: '';
    width: 100%;
    height: 100%;
    margin-left: 1em;
    position: absolute;
    top: calc(50% - 0.5px);
    border-top: 1px solid #74777c;
  }
</style>
