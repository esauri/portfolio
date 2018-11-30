<template>

  <article>
    <!-- Picture Section -->
    <section class='container flex justify-center my-4'>
      <!-- Profile Picture -->
      <img class='w-64 h-64 rounded-full' src='~/assets/images/misc/me.jpg' alt='Picture of Erick Sauri' />
    </section>
    <!-- About Me -->
    <section class='container py-4'>
      <header class='header my-6'>
        <h2 class='title'>About me</h2>
      </header>
      <p class='my-4'>
        Hey! I’m Erick Sauri a front end developer originally from Puerto Rico but currently
        living in Brooklyn. I'm a graduate from Rochester Institute of Technology
        with a Bachelor's in New Media Interactive Development and a minor
        in Mobile App Development. I enjoy working on web and mobile applications as well
        as making games in my spare time. Feel free to email me at <a href='mailto:ejs3863@rit.edu'>ejs3863 at rit.edu</a>.
      </p>
    </section>
    <!-- Work -->
    <section class='container py-4'>
      <header class='header my-6'>
        <h2 class='title'>Work</h2>
      </header>
      <section class='flex flex-wrap'>
        <!-- Patch -->
        <section class='mb-4 w-full'>
          <h3 class='my-3'>Patch Media</h3>
          <h4>New York, NY (March 2018 - Present)</h4>
          <ul class='flex flex-wrap list-reset py-4'>
            <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Front End Developer</li>
            <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Full-time</li>
          </ul>
          <ul class='pl-5'>
            <li class='leading-normal py-2'>
              Optimized images using Fastly Image Optimization, implemented responsive images, and lazy loading for images below the fold
            </li>
            <li class='leading-normal py-2'>
              Implemented a new, quicker content posting and replying experience for users to share what's happening in their local community
            </li>
            <li class='leading-normal py-2'>
              Maintained and implemented new functionality for site and its CMS built on <strong>PHP</strong> and <strong>Drupal</strong>
            </li>
            <li class='leading-normal py-2'>
              Created new features using <strong>Vue</strong> and used APIs such as <strong>Google Analytics</strong>, <strong>DoubleClick</strong>, and <strong>Stripe</strong>
            </li>
            <li class='leading-normal py-2'>
              Participated in A/B and multivariate testing, utilizing tools such as <strong>Google Optimize</strong>
            </li>
            <li class='leading-normal py-2'>
              Created email templates for <em>daily newsletter</em>, <em>breaking news</em>, and weekly <em>community calendar events</em> campaigns
            </li>
          </ul>
        </section>
        <!-- Poseidon -->
        <section class='mb-4 w-full md:w-1/2'>
          <h3 class='my-3'>Poseidon Systems</h3>
          <h4>Rochester, NY (May 2017 - Jan 2018)</h4>
          <ul class='flex flex-wrap list-reset py-4'>
            <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Software Engineer</li>
            <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Co-op</li>
          </ul>
          <ul class='pl-5'>
            <li class='leading-normal py-2'>
              Participated in redesign for a hybrid mobile and progressive web app
            </li>
            <li class='leading-normal py-2'>
              Developed app front end using <strong>Angular</strong> and <strong>Ionic Framework</strong>
            </li>
            <li class='leading-normal py-2'>
              Utilized libraries such as <strong>Highcharts</strong> for oil monitoring data visualization
            </li>
            <li class='leading-normal py-2'>
              Performed back end tasks using <strong>Firebase</strong> for authentication, storage, cloud messaging, and database needs
            </li>
          </ul>
        </section>
        <!-- CACI -->
        <section class='mb-4 md:pl-2 w-full md:w-1/2'>
          <h3 class='my-3'>CACI</h3>
          <h4>Rome, NY (Summer 2016)</h4>
          <ul class='flex flex-wrap list-reset py-4'>
            <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Web Developer</li>
            <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Co-op</li>
          </ul>
          <ul class='pl-5'>
            <li class='leading-normal py-2'>
              Tasked with maintaining and implementing admin features for a web app
            </li>
            <li class='leading-normal py-2'>
              Utilized <strong>Node</strong> for server-side and an internal framework based on the MVC paradigm
            </li>
            <li class='leading-normal py-2'>
              Performed database tasks with <strong>PostgreSQL</strong>
            </li>
            <li class='leading-normal py-2'>
              Created unit and end to end tests using libraries like <strong>Mocha</strong> and <strong>Selenium</strong>
            </li>
          </ul>
        </section>
      </section>
    </section>
    <!-- Education -->
    <section class='container py-4'>
      <header class='header my-6'>
        <h2 class='title'>Education</h2>
      </header>
      <h3 class='my-3'>Rochester Institute of Technology</h3>
      <h4>Rochester, NY (2013 - 2017)</h4>
      <h5 class='my-3'>Bachelor's of Science</h5>
      <ul class='flex flex-wrap list-reset py-4'>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>New Media Interactive Dev<span class='hidden md:inline'>elopment</span></li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Mobile App Development</li>
      </ul>
    </section>
    <!-- Skills -->
    <section class='container py-4'>
      <header class='header my-6'>
        <h2 class='title'>Skills &amp; Tools</h2>
      </header>
      <ul class='flex flex-wrap list-reset py-4'>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>HTML5</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>CSS3</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>SASS</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>LESS</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Node</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Express</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Vue</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>React</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>React Native</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Redux</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Angular</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Rxjs</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Ionic</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>PHP</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Drupal</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Swift</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>C#</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>MySQL</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>PostgreSQL</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Unity</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Sketch</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Photoshop</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Illustrator</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Fastly</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Sailthru</li>
        <li class='border border-grey rounded-full text-grey mr-3 mb-3 px-3 py-1'>Google Optimize</li>

      </ul>
    </section>
    <!-- CTA -->
    <section class='bg-grey-darker flex flex-col justify-center py-20 text-center'>
      <h3 class='my-3'>Looking for a PDF of printable version of my resume?</h3>
      <a :href='socialMediaUrls.resume' target='_blank' rel='noopener noreferrer'>Resume</a>
    </section>
  </article>
</template>

<script>
  export default {
    computed: {
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
