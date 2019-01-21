<template>
  <article>
    <!-- Hero Banner -->
    <section class='banner banner-poseidon mb-8'>
      <span class='banner-chevron-down border-grey-lighter'></span>
    </section>
    <!-- Project Details -->
    <section class='container py-4'>
      <ul class='flex flex-wrap list-reset'>
        <li class='font-bold rounded-full text-blue text-grey text-sm uppercase'>
          Vue &middot; PHP &middot; Drupal 7
        </li>
      </ul>
      <h1>Patch</h1>
      <section class='my-6'>
        <h3>About Patch</h3>
        <p>
          <a href='https://patch.com' target='_blank' rel='noopener noreferrer'>Patch.com</a> is a
          hyper-local news website. It acts both as a plublisher and a platform, where user's can find relevant
          local news and also share community events and announcements with their neighbors.
        </p>
      </section>
      <section class='my-6'>
        <h3>Project Goal</h3>
        <p>
          Patch was keen to expand their user-generated content and wanted to attract more people to post on their "Patch",
          the local community where they live. However the entire posting experience exists on a separate site, their CMS <a href='https://my.patch.com' target='_blank' rel='noopener noreferrer'>MyPatch</a>.
          They wanted to introduce an easier and quicker solution that existed on their local Patch page so users could share what was happening around them.
        </p>
      </section>
    </section>
    <!-- Pic -->
    <figure class='py-8'>
      <Pic
        zoomable
        :src='images.topBlock'
        alt='Quickpost prompt'
        class='block'
      />
      <figcaption class='mt-2 text-center text-grey-dark text-sm'>
        Introducing Quickpost
      </figcaption>
    </figure>
    <!-- Solution -->
    <!-- <section class='container py-4'>
      <h2>Solution</h2>
      <section class='my-6'>
        <h3>Tech Stack</h3>
        <p>
          One of the goals of the app was to be used as a mobile app so users can quickly access from their devices.
          They also wanted to take advantage of device capabilities such as fingerprint authentication. They also wanted
          the app to be used on the web as they wanted it to slowly take over their existing Poseidon Live web portal. As such
          we decided to go forward creating the new app using Angular and the Ionic Framework. This provided a robust framework,
          mobile ready components, as well as the capability to build one app that can run on any device and use native features with Cordova. The ascent of progressive web apps in the last couple
          of years had already caught up in Ionic and they provided service workers and other tools to make the app a pwa from the get go.
        </p>
      </section>
      <section class='my-6'>
        <p>
          We made use of Firebase for authentication purposes, cloud storage, cloud messaging, hosting, and we also tested out their recently released Firestore database.
          To display large amounts of datasets we tried various charting libraries such as amCharts, Plotly, Fusion Charts, and Google Charts but ended up going
          with Highcharts as a suitable replacement for the old jqPlot. For the mobile version we added support for CodePush (now part of App Center) so users can access the most recent version
          without having to update the app from the store.
        </p>
      </section>
    </section> -->
    <!-- Plot Annotations -->
    <!-- <section class='container py-4'>
      <h2>Plot Annotations &amp; Event Timeline</h2>
      <figure class='my-6'>
        <Pic
          zoomable
          :src='images.plotPage'
          alt='Poseidon Plot Page'
          class='block'
        />
        <figcaption class='mt-2 text-center text-grey-dark text-sm'>
          Plot View
        </figcaption>
      </figure>
      <section class='my-6'>
        <p>
          A new feature for the plots was the ability to attach events to them such as weather, device maintenance,
          monitoring alarms, or general user comments. Files could also be attached to events containing generated reports
          and other data. Events would also have the ability to be shared with others. Either by adding custom collaborators
          with read and/or write access, or by giving a company read and/or write access which would trickle down that access
          to the company users.
        </p>
      </section>
      <section class='my-6'>
        <p>
          To create the custom events we added two ways. Creating the event first and entering the necessary information.
          Then the user would link the event to any assets or locations (which linked events to the assets in said location).
          The second event creation tool was accessed by pressing the edit icon in a plot which allowed the user to enter annotation mode.
          From there they would just need to tap on the location they want the event created (in a time series chart).
          Thus linking assets or locations first then entering event details.
        </p>
      </section>
      <section class='my-6'>
        <p>
          We displayed the event information in different ways. The most visible was in the plots themselves. We have vertical lines
          at the date and time the event occurred. The line had the event categories color and icon as well as the title. Hovering over the
          line shows a tooltip that takes the user to that specific events page when pressed. We also have a timeline of events for the user.
          The timeline can be accessed in the timeline page but each plot page also has a preview timeline with events associated with the plot's assets.
        </p>
      </section>
    </section> -->
    <!-- Pic -->
    <!-- <figure class='py-8'>
      <Pic
        zoomable
        :src='images.event'
        alt='Poseidon Event Creation Pages'
        class='block'
      />
      <figcaption class='mt-2 text-center text-grey-dark text-sm'>
        Creating an event &amp; Event View
      </figcaption>
    </figure> -->
    <!-- Parting Thoughts -->
    <!-- <section class='container py-4'>
      <h2>Parting Thoughts</h2>
      <section class='my-6'>
        <p>
          Working on Poseidon was a tremendous experience. This was a long term project that took many months to work on and
          it allowed me to go further than I had ever gone with. I wasn't just working on a web app or a mobile app, but an app
          that had to function as both. An app for Android, iOS, and the web be it mobile or desktop. I was able to learn much about progressive web apps,
          performance, hybrid app tools and their constraints, data visualization and many other aspects working on other features that are too numerous to mention here.
          Taking a working product and completely recreating it with new technology and improving it with new features was an arduous but fulfilling task and I am glad that
          I was a part of the new Poseidon Live.
        </p>
      </section>
    </section> -->
  </article>
</template>

<style scoped>
  .banner-poseidon {
    background-image: url('~assets/images/patch/patch_hero.png');
  }
</style>

<script>
  // Assets
  import QuickPostTopBlock from '~/assets/images/patch/qp_top_block.png';
  import ImageEvent from '~/assets/images/poseidon/screens/event.jpg';
  import ImagePlots from '~/assets/images/poseidon/screens/plots.jpg';
  import ImagePlotPage from '~/assets/images/poseidon/screens/plot page.jpg';

  import Pic from '~/components/Pic.vue';

  export default {
    components: {
      Pic,
    },
    computed: {
      images() {
        return {
          topBlock: QuickPostTopBlock,
          plots: ImagePlots,
          event: ImageEvent,
          plotPage: ImagePlotPage,
        };
      },
    },
    head() {
      return {
        title: 'Erick Sauri – Patch Media',
      }
    },
  }
</script>
