<template>
  <article>
    <!-- Hero Banner -->
    <section class='pb-8'>
      <Pic
        :src='images.banner'
        :srcset='imagesSrcSet.banner'
        sizes='(max-width: 480px) 480px, (max-width: 768px) 760px, 960px'
        alt='270 Banner'
        class='block w-full'
      />
    </section>
    <!-- Introduction -->
    <section class='container py-4'>
      <ul class='flex flex-wrap list-reset'>
        <li class='font-bold rounded-full text-blue text-grey text-sm uppercase'>
          Angular.js &middot; Ionic Framework
        </li>
      </ul>
      <h1>270</h1>
      <section class='my-6'>
        <p>
          Race to the White House in the U.S. Government and History trivia game <strong>270</strong>.
          Select a party and run as that party's candidate. Travel to important battleground states
          and answer questions in order to obtain enough votes to win the state and get electoral votes
          necessary to become the President of the United States.
        </p>
      </section>
      <section class='my-6'>
        <p>
          In order for the candidate to win the Presidency, they must earn at least <strong>270</strong> electoral votes. Players must then enter a
          state where they have several random trivia to answer. Players earn percentages of a state's vote if they answer trivia correctly.
          In order to get all of the electoral votes in a state their vote percentage must exceed <strong>50%</strong>. Once enough states
          have been won to reach <strong>270</strong> electoral votes the player becomes President-Elect of the United States of America.
        </p>
      </section>
    </section>
    <!-- Mockups -->
    <section class='container py-4'>
      <h2>Mockups</h2>
      <section class='my-6'>
        <section class='pb-6'>
          <Pic
            lazy
            zoomable
            :src='images.mainMockup'
            :srcset='imagesSrcSet.mainMockup'
            sizes='(max-width: 480px) 480px, (max-width: 768px) 760px, 960px'
            alt='Mockup of the home views'
            class='block w-full'
          />
        </section>
        <p>
          These are the first designs of the app views. Not much has changed
          from these views other than the tab bar, which due to time constraints
          had to be limited. The <strong>Messages</strong> tab was intended so that
          the user could receive fake mail from interest groups, super pacs and 501(c)s
          for support and in game currency to be used in the trivia section.
        </p>
        <p class='my-6'>
          The <strong>Statistics</strong> and <strong>Me</strong> tabs were consolidated in
          the final version into one section where users can view their candidate profile
          and their vote percentages in each state. Another aspect that changed was how the
          electoral votes were displayed. Originally, I wasn't going to include vote percentages
          and each trivia question would grant a specific number to electoral votes if answered correctly.
        </p>
      </section>
      <section class='my-6'>
        <section class='pb-6'>
          <Pic
            lazy
            zoomable
            :src='images.triviaMockup'
            :srcset='imagesSrcSet.triviaMockup'
            sizes='(max-width: 480px) 480px, (max-width: 768px) 760px, 960px'
            alt='Mockup of the trivia views'
            class='block w-full'
          />
        </section>
        <p>
          As for the trivia views little changed other than the tab bar with different helpers users could call if they wanted to.
          Players were supposed to use the currency earned in game to purchase these helpers.
        </p>
      </section>
    </section>
    <!-- All Screens -->
    <section class='py-4'>
      <Pic
        lazy
        zoomable
        :src='images.screens'
        :srcset='imagesSrcSet.screens'
        sizes='(max-width: 480px) 480px, (max-width: 768px) 760px, 960px'
        alt='Perspective view of all the app screens'
        class='block w-full'
      />
    </section>
    <!-- Final Product -->
    <section class='container py-4'>
      <h2>Final Product</h2>
      <!-- Home View -->
      <section class='my-6'>
        <h3>Home View</h3>
        <section class='flex flex-col items-center md:flex-row-reverse'>
          <section class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.democrat'
              :srcset='imagesSrcSet.democrat'
              sizes='(max-width: 480px) 480px, (max-width: 768px) 760px, 960px'
              alt='Home screen for the Democratic Party candidate'
              class='block mx-auto md:mr-0 md:ml-auto'
            />
          </section>
          <section class='w-full md:mr-3 md:w-3/4'>
            <p>
              Due to time constraints on the project I decided to make enough trivia for only 10 states. I
              chose ten battleground states according to the results from the 2012 election. These states were: <strong>Colorado</strong>,
              <strong>Florida</strong>, <strong>Iowa</strong>,
              <strong>Nevada</strong>, <strong>New Hampshire</strong>, <strong>North Carolina</strong>,
              <strong>Ohio</strong>, <strong>Pennsylvania</strong>, <strong>Virginia</strong>, and <strong>Wisconsin</strong>.
            </p>
            <p class='mt-6'>
              Since I was excluding 40 other states and the <strong>District of Columbia</strong>, I allotted their
              electoral votes to the candidate that had the best shot at winning them, again based on the 2012 election.
              This gave an edge to the Democrat Presidential Candidate who started with 217 electoral votes while the Republican
              Presidential Candidate began with 191.
            </p>
          </section>
        </section>
        <section class='flex flex-col items-center md:flex-row'>
          <section class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.republican'
              :srcset='imagesSrcSet.republican'
              sizes='(max-width: 480px) 480px, (max-width: 768px) 760px, 960px'
              alt='Home screen for the Republican Party candidate'
              class='block mx-auto md:ml-0 md:mr-auto'
            />
          </section>
          <section class='w-full md:ml-3 md:w-3/4'>
            <p>
              The states with the partisan background represent states that have already been completed while the states with the
              partisan fill are states where the winner hasn't yet been called.
            </p>
            <p class='mt-6'>
              I also removed tabs I had in the mockup designs. <strong>Me</strong> now showed the player's vote totals in each state
              as well as a button to reset the game, where they would go back to the start view and select a party.
              The <strong>How to Play</strong> tab had simple instructions on how the game worked and its several mechanics.
            </p>
          </section>
        </section>
      </section>
      <!-- State View -->
      <section class='flex flex-col items-center md:flex-row-reverse my-6'>
        <section class='w-full md:w-1/4'>
          <Pic
            lazy
            zoomable
            :src='images.stateScreen'
            :srcset='imagesSrcSet.stateScreen'
            sizes='(max-width: 480px) 480px, (max-width: 768px) 760px, 960px'
            alt='270 Republican candidate Iowa State View'
            class='block mx-auto md:mr-0 md:ml-auto'
          />
        </section>
        <section class='w-full md:mr-3 md:w-3/4'>
          <h3>State View</h3>
          <p>
            To get the electoral votes in a state the player has to obtain over 50% of the vote percentage in that state.
            Each state has a certain number of electoral votes based on the actual number during the 2010 - 2020 period,
            as an example Iowa has 6 electoral votes.
          </p>
          <p>
            Each card contains a random question and they vary from easy to difficult based on the amount of votes
            they grant. The higher the vote the harder the question while lower vote percentages have easier questions.
          </p>
          <p>
            The cards and their percentages all vary by state. No two states have the same layout.
            Once a trivia has been answered the card's background changes to the partisan color.
          </p>
        </section>
      </section>
      <!-- Trivia View -->
      <section class='my-6'>
        <h3>Trivia View</h3>
        <section class='flex flex-col items-center md:flex-row-reverse'>
          <section class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.correctTrivia'
              :srcset='imagesSrcSet.correctTrivia'
              sizes='(max-width: 480px) 480px, (max-width: 768px) 760px, 960px'
              alt='View for when trivia has been correctly answered'
              class='block mx-auto md:mr-0 md:ml-auto'
            />
          </section>
          <section class='w-full md:mr-3 md:w-3/4'>
            <p>
              Each trivia question has a category and four possible choices, one of them being the correct
              answer. The choices are all randomly ordered as to not give the player any hints on which might
              be the correct answer.
            </p>
            <p class='mt-6'>
              When choosing an answer, if it is incorrect an overlay will appear over the question with a red background
              telling the player that the answer was wrong and that they don't get any votes.
            </p>
          </section>
        </section>
        <section class='flex flex-col items-center md:flex-row'>
          <section class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.wrongTrivia'
              :srcset='imagesSrcSet.wrongTrivia'
              sizes='(max-width: 480px) 480px, (max-width: 768px) 760px, 960px'
              alt='View for when trivia has been incorrectly answered'
              class='block mx-auto md:ml-0 md:mr-auto'
            />
          </section>
          <section class='w-full md:ml-3 md:w-3/4'>
            <p>
              If the player answers correctly, they will be told by how much did they score increase in that state.
            </p>
            <p class='mt-6'>
              The player can also forfeit the question by tapping on the back key in the top bar. Their opponent will get
              the vote percentage increase for that question.
            </p>
          </section>
        </section>
      </section>
    </section>
    <!-- Gameplay video -->
    <section class='container py-4'>
      <h2>Gameplay</h2>
      <Vimeo
        title='270 Demo'
        src='https://player.vimeo.com/video/183411950'
      />
    </section>
    <!-- Parting Thoughts -->
    <section class='container py-4'>
      <h2>Parting Thoughts</h2>
      <section class='my-6'>
        <p>
          270 was a fun project to work on and the end result was a fun and replayable
          game that can easily be expanded. During the development cycle I learned a lot about
          the technologies I used to make it, which I had no experience with such as
          AngularJS. I also got more experience working with the model-view-controller pattern which made my app's organization clear and effective.
          As a solo project I was also able to get a sense of what it takes to create a minimum viable product
          and learn from appropriately scoping my project. As my first app I feel more excited to delve deeper
          into mobile development, including progressive web apps, hybrid apps, and native apps.
        </p>
      </section>
    </section>
  </article>
</template>

<script>
  // Small
  import SmImageBanner from '~/assets/images/270/public/small/banner.jpg';
  import SmImageScreens from '~/assets/images/270/public/small/thumbnail.jpg';
  import SmImageMockupMain from '~/assets/images/270/public/small/mockupMainScreens.jpg';
  import SmImageMockupTrivia from '~/assets/images/270/public/small/mockupTriviaScreens.jpg';
  import SmImageDemStates from '~/assets/images/270/public/small/demStates.png';
  import SmImageGopStates from '~/assets/images/270/public/small/gopStates.png';
  import SmImageStateScreen from '~/assets/images/270/public/small/state.png';
  import SmImageCorrectTrivia from '~/assets/images/270/public/small/triviaCorrect.png';
  import SmImageWrongTrivia from '~/assets/images/270/public/small/triviaWrong.png';

  // Medium
  import MdImageBanner from '~/assets/images/270/public/medium/banner.jpg';
  import MdImageScreens from '~/assets/images/270/public/medium/thumbnail.jpg';
  import MdImageMockupMain from '~/assets/images/270/public/medium/mockupMainScreens.jpg';
  import MdImageMockupTrivia from '~/assets/images/270/public/medium/mockupTriviaScreens.jpg';
  import MdImageDemStates from '~/assets/images/270/public/medium/demStates.png';
  import MdImageGopStates from '~/assets/images/270/public/medium/gopStates.png';
  import MdImageStateScreen from '~/assets/images/270/public/medium/state.png';
  import MdImageCorrectTrivia from '~/assets/images/270/public/medium/triviaCorrect.png';
  import MdImageWrongTrivia from '~/assets/images/270/public/medium/triviaWrong.png';

  // Large
  import ImageBanner from '~/assets/images/270/public/large/banner.jpg';
  import ImageScreens from '~/assets/images/270/public/large/thumbnail.jpg';
  import ImageMockupMain from '~/assets/images/270/public/large/mockupMainScreens.jpg';
  import ImageMockupTrivia from '~/assets/images/270/public/large/mockupTriviaScreens.jpg';
  import ImageDemStates from '~/assets/images/270/public/large/demStates.png';
  import ImageGopStates from '~/assets/images/270/public/large/gopStates.png';
  import ImageStateScreen from '~/assets/images/270/public/large/state.png';
  import ImageCorrectTrivia from '~/assets/images/270/public/large/triviaCorrect.png';
  import ImageWrongTrivia from '~/assets/images/270/public/large/triviaWrong.png';

  import Pic from '~/components/Pic.vue';
  import Vimeo from '~/components/Vimeo.vue';

  export default {
    components: {
      Pic,
      Vimeo,
    },
    computed: {
      images() {
        return {
          banner: ImageBanner,
          screens: ImageScreens,
          mainMockup: ImageMockupMain,
          triviaMockup: ImageMockupTrivia,
          democrat: ImageDemStates,
          republican: ImageGopStates,
          stateScreen: ImageStateScreen,
          correctTrivia: ImageCorrectTrivia,
          wrongTrivia: ImageWrongTrivia,
        };
      },
      imagesSrcSet() {
        return {
          banner: `${SmImageBanner} 480w, ${MdImageBanner} 760w, ${ImageBanner} 960w`,
          screens: `${SmImageScreens} 480w, ${MdImageScreens} 760w, ${ImageScreens} 960w`,
          mainMockup: `${SmImageMockupMain} 480w, ${MdImageMockupMain} 760w, ${ImageMockupMain} 960w`,
          triviaMockup: `${SmImageMockupTrivia} 480w, ${MdImageMockupTrivia} 760w, ${ImageMockupTrivia} 960w`,
          democrat: `${SmImageDemStates} 480w, ${MdImageDemStates} 760w, ${ImageDemStates} 960w`,
          republican: `${SmImageGopStates} 480w, ${MdImageGopStates} 760w, ${ImageGopStates} 960w`,
          stateScreen: `${SmImageStateScreen} 480w, ${MdImageStateScreen} 760w, ${ImageStateScreen} 960w`,
          correctTrivia: `${SmImageCorrectTrivia} 480w, ${MdImageCorrectTrivia} 760w, ${ImageCorrectTrivia} 960w`,
          wrongTrivia: `${SmImageWrongTrivia} 480w, ${MdImageWrongTrivia} 760w, ${ImageWrongTrivia} 960w`,
        };
      },
    },
  }
</script>