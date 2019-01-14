<template>
  <article>
    <!-- Hero Banner -->
    <section class='banner banner-trump-card mb-8'>
      <span class='banner-chevron-down'></span>
    </section>
    <!-- Introduction -->
    <section class='container py-4'>
      <ul class='flex flex-wrap list-reset'>
        <li class='font-bold rounded-full text-blue text-grey text-sm uppercase'>
          Swift
        </li>
      </ul>
      <h1>Trump Card</h1>
      <section class='my-6'>
        <p>
          Trump Card is an iOS app I developed for my Mobile App Dev class.
          In the game the player takes the role of Donald J. Trump as the Presidential
          nominee. The setting is a press conference where players are asked questions
          by the press and each question has two choices, one choice is generally a response a
          calmer, and subdued Donald Trump would give while the second choice is an off-the-cuff
          answer an agitated Trump would say. Each choice is actually a direct quote or a paraphrased
          version of an actual Trump quote. There is also a list with all the Trump quotes used in the
          game and they are all referenced and some have audio clips attached that play when a card swipe is made.
        </p>
      </section>
      <section class='my-6'>
        <h3>Goal</h3>
        <p>
          The goal of the game is to end the press conference with enough favorability with voters to gain their vote
          on election day. Voters are divided into five blocs: African-Americans, Asian-Americans, Latinos, White college
          educated, and White non-college educated voters. Each response by Trump has an individual effect on these voting
          groups and this affects the players favorability. The players favorability is measured by voting groups based on
          their makeup of the electorate. If by the end of the press conference there favorability is
          above 50% then the player wins otherwise they lose.
        </p>
      </section>
    </section>
    <!-- Game mechanics -->
    <section class='container py-4'>
      <h2>Game Mechanics</h2>
      <section class='my-6'>
        <!-- Question -->
        <section class='flex flex-col items-center md:flex-row-reverse'>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.question'
              :srcset='imagesSrcSet.question'
              sizes='(max-width: 480px) 480px, (max-width: 768px) 760px, 960px'
              alt='Trump Card Game View'
              class='block mx-auto md:mr-0 md:ml-auto'
            />
            <figcaption class='mt-2 text-center text-grey-dark text-sm'>
              Question view
            </figcaption>
          </figure>
          <section class='w-full md:mr-3 md:w-3/4'>
            <p>
              Trump Card is a simple game where the player acts as then Presidential candidate Donald Trump and is asked numerous
              questions during a press conference. The player has the opportunity to swipe left or right to give an answer. The player's
              goal is then to have a high enough favorability rating to win the presidency.
              On every swipe head icons representing the different demographic groups will appear showing their reaction to the answer. If the group found the answer damaging.
            </p>
          </section>
        </section>
        <!-- Left Swipe -->
        <section class='flex flex-col items-center md:flex-row'>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.leftSwipe'
              :srcset='imagesSrcSet.leftSwipe'
              sizes='(max-width: 480px) 480px, (max-width: 768px) 760px, 960px'
              alt='Trump Card Game View After Left Drag'
              class='block mx-auto md:ml-0 md:mr-auto'
            />
            <figcaption class='mt-2 text-center text-grey-dark text-sm'>
              Left drag
            </figcaption>
          </figure>
          <section class='w-full md:ml-3 md:w-3/4'>
            <p>
              Once the player begins dragging a card to the left or right corner Trump's answer will appear on the card.
              If the player drags the card to a corner and lets go of the card that answer is given otherwise the player can choose the other
              answer. The left choice is Trump's more subdued answer while the right one is his irate answer.
            </p>
          </section>
        </section>
        <!-- Right Swipe -->
        <section class='flex flex-col items-center md:flex-row-reverse'>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.rightSwipe'
              :srcset='imagesSrcSet.rightSwipe'
              sizes='(max-width: 480px) 480px, (max-width: 768px) 760px, 960px'
              alt='Trump Card Game View After Right Drag'
              class='block mx-auto md:mr-0 md:ml-auto'
            />
            <figcaption class='mt-2 text-center text-grey-dark text-sm'>
              Right drag
            </figcaption>
          </figure>
          <section class='w-full md:mr-3 md:w-3/4'>
            <p>
              In order to avoid the player from
              always choosing the left answer, the Trump-o-meter comes into play. As seen in the screenshot it is a bar that dictates Trump's temperament.
              Ranging from happy to angry, every left swipe causes Trump to get angrier and once in reaches a certain point Trump will be too angry and the player
              will be unable to swipe left. In order for Trump to calm down the player needs to swipe right a couple of times.
              This way players can gauge if a right choice won't be too damaging to Trump's favorables so they can save their left swipes to avoid
              giving really damaging answers.
            </p>
          </section>
        </section>
        <!-- Game over -->
        <section class='w-full'>
          <p class='mt-6'>
            Upon finishing the press conference the results of the election will dictate whether Donald Trump wins the election
            and a message will pop-up congratulating or attacking him. The player can then dismiss the alert and they will be brought back to the main
            view where they can play again or check the references page where they can find the Trump quotes with sources and in some cases audio.
          </p>
        </section>
      </section>
    </section>
    <!-- Parting Thoughts -->
    <section class='container py-4'>
      <h2>Parting Thoughts</h2>
      <section class='my-6'>
        <p>
          Trump Card was an exciting app since it was my first Swift project
          and I was able to implement the features I wanted with ease. I liked the idea
          of using a politician's actual quotes and statements without having to make some up.
          I hope to continue this project and add other politicians as well so the game isn't centered
          around one particular person but players can choose which candidate they want to play as making
          the experience more varied.
        </p>
      </section>
    </section>
  </article>
</template>

<style scoped>
  .banner-trump-card {
    background-image: url('~assets/images/trumpcard/public/medium/banner.jpg');
  }

  @media only screen and (min-width: 768px) {
    .banner-trump-card {
      background-image: url('~assets/images/trumpcard/public/large/banner.jpg');
    }
  }
</style>

<script>
  // Assets
  // Small
  import SmImageGameView from '~/assets/images/trumpcard/public/small/gameView.png';
  import SmImageLeftSwipe from '~/assets/images/trumpcard/public/small/leftSwipe.png';
  import SmImageRightSwipe from '~/assets/images/trumpcard/public/small/rightSwipe.png';
  // import SmImageGameWin from '~/assets/images/trumpcard/public/small/gameWin.png';
  // import SmImageGameLoss from '~/assets/images/trumpcard/public/small/gameLoss.png';
  // import SmImageStartView from '~/assets/images/trumpcard/public/small/startView.png';

  // Medium
  import MdImageGameView from '~/assets/images/trumpcard/public/medium/gameView.png';
  import MdImageLeftSwipe from '~/assets/images/trumpcard/public/medium/leftSwipe.png';
  import MdImageRightSwipe from '~/assets/images/trumpcard/public/medium/rightSwipe.png';
  // import MdImageGameWin from '~/assets/images/trumpcard/public/medium/gameWin.png';
  // import MdImageGameLoss from '~/assets/images/trumpcard/public/medium/gameLoss.png';
  // import MdImageStartView from '~/assets/images/trumpcard/public/medium/startView.png';

  // Large
  import ImageGameView from '~/assets/images/trumpcard/public/large/gameView.png';
  import ImageLeftSwipe from '~/assets/images/trumpcard/public/large/leftSwipe.png';
  import ImageRightSwipe from '~/assets/images/trumpcard/public/large/rightSwipe.png';
  // import ImageGameWin from '~/assets/images/trumpcard/public/large/gameWin.png';
  // import ImageGameLoss from '~/assets/images/trumpcard/public/large/gameLoss.png';
  // import ImageStartView from '~/assets/images/trumpcard/public/large/startView.png';

  import Pic from '~/components/Pic.vue';

  export default {
    components: {
      Pic,
    },
    computed: {
      images() {
        return {
          question: ImageGameView,
          leftSwipe: ImageLeftSwipe,
          rightSwipe: ImageRightSwipe,
          // gameLoss: ImageGameLoss,
          // gameWin: ImageGameWin,
          // startView: ImageStartView,
        };
      },
      imagesSrcSet() {
        return {
          question: `${SmImageGameView} 480w, ${MdImageGameView} 760w, ${ImageGameView} 960w`,
          leftSwipe: `${SmImageLeftSwipe} 480w, ${MdImageLeftSwipe} 760w, ${ImageLeftSwipe} 960w`,
          rightSwipe: `${SmImageRightSwipe} 480w, ${MdImageRightSwipe} 760w, ${ImageRightSwipe} 960w`,
          // gameWin: `${SmImageGameWin} 480w, ${MdImageGameWin} 760w, ${ImageGameWin} 960w`,
          // gameLoss: `${SmImageGameLoss} 480w, ${MdImageGameLoss} 760w, ${ImageGameLoss} 960w`,
          // startView: `${SmImageStartView} 480w, ${MdImageStartView} 760w, ${ImageStartView} 960w`,
        };
      },
    },
  }
</script>
