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
      <h1>Quickpost</h1>
      <section class='my-6'>
        <h3>About Patch</h3>
        <p>
          <a href='https://patch.com' target='_blank' rel='noopener noreferrer'>Patch.com</a> is a
          hyper-local news website. It acts both as a publisher and a platform, where users can find relevant
          local news and also share community events and announcements with their neighbors.
        </p>
      </section>
      <section class='my-6'>
        <h3>Project Goal</h3>
        <p>
          Patch was keen to expand their user-generated content and wanted to attract more people to post on their <em>patch</em>,
          the local community where they live. However the entire posting experience exists on a separate site, their CMS <a href='https://my.patch.com' target='_blank' rel='noopener noreferrer'>MyPatch</a>.
          Thus as a goal, they wanted to introduce an easier and quicker posting solution that existed on their local Patch page so users could share what was happening around them.
        </p>
      </section>
    </section>
    <!-- Pic -->
    <figure class='py-8'>
      <Pic
        zoomable
        :src='images.topBlock'
        alt='Quickpost prompt'
        class='block mx-auto'
      />
      <Caption class='mt-2 text-center text-grey-dark text-sm'>
        Introducing Quickpost
      </Caption>
    </figure>
    <!-- Solution -->
    <section class='container py-4'>
      <h2>Solution</h2>
      <section class='my-6'>
        <h3>MVP</h3>
        <p>
          In order to achieve this goal Patch decided to introduce an entirely new content creation tool, internally named, <strong>Quickpost</strong>.
          With quickpost we would take advantage of modern client-side libraries and tools to create a clean, responsive, and reactive user interface
          that would utilize our API endpoints to create new pieces of content from Patch's main client-facing site.
        </p>
      </section>
      <section class='my-6'>
        <p>
          This way users could ask questions or share news tips without having to leave the comfort of their local home page. To keep things local
          posters were allowed to only create new posts in their home community.
          In addition to creating posts they could also reply to other posts and they didn't have the locality restriction when replying to posts.
        </p>
      </section>
      <figure class='py-8'>
        <Pic
          zoomable
          :src='images.thread'
          alt='Quickpost thread'
          class='block mx-auto'
        />
        <Caption class='mt-2 text-center text-grey-dark text-sm'>
          Post with replies
        </Caption>
      </figure>
      <section class='my-6'>
        <h3>Rollout</h3>
        <p>
          Patch wanted to experiment and tweak the experience, so quickposts were initially released in three patches, all with distinct active users and
          activity. Slowly expanding to more patches throughout the nation. During the wildfire situation in California,
          quickposting was enabled in the entire state so that users could communicate and share information for safety reasons.
        </p>
      </section>
      <section class='my-6'>
        <h3>Iteration</h3>
        <p>
          We also did various UI tweaks so that the posting prompt stood out more and was readily available for users. Initially the posting interface
          expanded itself inline, but it only stayed at the top of the page so if a user scrolled they couldn't access the post field. We thus moved the
          interface to a modal which would always open in the center of the screen and added a floating action button so that the modal could be triggered
          even after a user scrolls down the page.
        </p>
      </section>
      <section class='my-6'>
        <h3>Moderation</h3>
        <p>
          Initially posters could alert our moderators of any suspicious posts by flagging a post. This however didn't give much context
          as to why a user might have flagged a post. Therefore flagging was expanded to include several options to categorize posts as
          <em>spam</em>, <em>offensive</em>, or <em>non-local</em>.
        </p>
        <figure class='py-8'>
          <Pic
            zoomable
            :src='images.flags'
            alt='Quickpost flagging'
            class='block mx-auto'
          />
          <Caption class='mt-2 text-center text-grey-dark text-sm'>
            Users can indicate why they flagged a post
          </Caption>
        </figure>
      </section>
      <section class='my-6'>
        <h3>Images</h3>
        <p>
          Several months after releasing our MVP and doing various iterations, we rolled out our biggest update for quickposting.
          The ability for users to add images alongside their posts. We wanted to make sure users couldn't post inappropriate
          images so we utilized Google Vision to analyze and block any adult images and send those it found racy to our moderation queue
          so we could take action if the image was suggestive. We allowed users to upload up to 5 images to their post, and even expanded replies
          so that user's could add an image in their reply. We also took the opportunity to add new functionality for our images so that visitors could
          zoom into the images and applied this new feature to the rest of the posts in the site.
        </p>
        <figure class='py-8'>
          <Pic
            zoomable
            :src='images.imageUploader'
            alt='Quickpost image uploader'
            class='block mx-auto'
          />
          <Caption class='mt-2 text-center text-grey-dark text-sm'>
            Image Upload
          </Caption>
        </figure>
      </section>
    </section>
    <!-- Parting Thoughts -->
    <section class='container py-4'>
      <h2>Parting Thoughts</h2>
      <section class='my-6'>
        <p>
          Working with the product and other developers to create the quickposting experience was a momentous task.
          It was a great and informative project. It allowed me to delve even deeper and push my limits as I participated in
          ideation, design, front-end and also back-end development. We were able to deliver a solid product that was made pleasant
          thanks to libraries like Vue. We also saw the different ways people have begin to interact with this product and the types
          of posts that drive people to share with their communities.
        </p>
      </section>
      <!-- Pic -->
      <figure class='py-8'>
        <Pic
          zoomable
          :src='images.dog'
          alt='Quickpost dog post'
          class='block mx-auto'
        />
        <Caption class='mt-2 text-center text-grey-dark text-sm'>
          Post with image
        </Caption>
      </figure>
    </section>
  </article>
</template>

<style scoped>
  .banner-poseidon {
    background-image: url('~assets/images/patch/qp_banner.jpg');
  }
</style>

<script>
  // Assets
  import QuickPostDog from '~/assets/images/patch/qp_dog.jpg';
  import QuickPostFlags from '~/assets/images/patch/qp_flags.jpg';
  import QuickPostThread from '~/assets/images/patch/qp_thread.jpg';
  import QuickPostTopBlock from '~/assets/images/patch/qp_top_block.jpg';
  import QuickPostImageUploader from '~/assets/images/patch/qp_image_upload.jpg';

  import Caption from '~/components/Caption.vue';
  import Pic from '~/components/Pic.vue';

  export default {
    components: {
      Caption,
      Pic,
    },
    computed: {
      images() {
        return {
          dog: QuickPostDog,
          thread: QuickPostThread,
          topBlock: QuickPostTopBlock,
          flags: QuickPostFlags,
          imageUploader: QuickPostImageUploader,
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
