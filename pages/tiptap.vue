<template>
  <article>
    <!-- Hero Banner -->
    <section class='pb-8'>
      <Pic
        :src='images.banner'
        alt='TipTap Banner'
      />
    </section>
    <!-- Project Details -->
    <section class='container flex flex-col justify-center py-4'>
      <ul class='flex flex-wrap list-reset'>
        <li class='font-bold rounded-full text-blue text-grey text-sm uppercase'>
          React Native
        </li>
      </ul>
      <h1>TipTap</h1>
      <section class='my-6'>
        <p>
          TipTap is a quick and easy tipping calculator.
          Simply enter an amount and you'll instantly get a
          tip amount and a total bill amount.
          You can also set your preferred tips so you can quickly
          swap between them when entering an amount.
          Want to see all your tips and their totals for a certain
          amount? Simply press the Calculate button and you can
          view a detailed list of tips.
          TipTap also allows you to split the bill with up to 11
          other people.
        </p>
      </section>
    </section>
    <!-- Pic -->
    <section class='pt-8'>
      <Pic
        lazy
        zoomable
        :src='images.promo'
        alt='TipTap Promo'
        class='block'
      />
    </section>
    <!-- CTA -->
    <section class='bg-grey-darker'>
      <section class='container py-20 text-center text-white'>
        <h3 class='my-3'>Download the App now!</h3>
        <a
          href='https://itunes.apple.com/us/app/tiptap-tip-calculator/id1360335414'
          class='bg-grey-lightest btn font-semibold hover:bg-white hover:shadow-lg inline-block px-8 py-3 rounded shadow-md text-red'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon :icon="['fab', 'apple']" />
          <span>App Store</span>
        </a>

        <a
          href='https://play.google.com/store/apps/details?id=com.tiptap'
          class='bg-grey-lightest btn font-semibold hover:bg-white hover:shadow-lg inline-block px-8 py-3 rounded shadow-md text-red'
          target='_blank'
          rel='noopener noreferrer'
        >
        <FontAwesomeIcon :icon="['fab', 'android']"  />
          <span>Play Store</span>
        </a>
        <p class='font-sans text-sm py-4'>Made in collaboration with <a href='http://goodhombres.blogspot.com' rel='noopener noreferrer' target='_blank'>Christian Medina</a></p>
      </section>
    </section>
  </article>
</template>

<script>
  import TipTapBanner from '~/assets/images/tiptap/tiptap_banner.jpg';
  import TipTapPromoImage from '~/assets/images/tiptap/tiptap_promo.jpg';
  import FontAwesomeIcon from '~/components/FontAwesomeIcon';
  import Pic from '~/components/Pic.vue';

  export default {
    components: {
      FontAwesomeIcon,
      Pic,
    },
    computed: {
      /**
       * Returns profile Pic src
       *
       */
      images() {
        return {
          banner: TipTapBanner,
          promo: TipTapPromoImage,
        };
      },
    },
  }
</script>

