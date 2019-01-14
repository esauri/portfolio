<template>
  <article>
    <!-- Hero Banner -->
    <section class='banner banner-venu mb-8'>
      <span class='banner-chevron-down'></span>
    </section>
    <!-- Introduction -->
    <section class='container py-4'>
      <ul class='flex flex-wrap list-reset'>
        <li class='font-bold rounded-full text-blue text-grey text-sm uppercase'>
          React &middot; Redux &middot; Firebase
        </li>
      </ul>
      <h1>VENU</h1>
      <section class='my-6'>
        <p>
          VENU is a wayfinding application created specifically for Imagine RIT, a festival
          of creativity and innovation held every year at Rochester Institute of Technology.
          We recognized that large events like Imagine RIT are hectic and confusing to people.
          Finding a specific facility or booth is frustrating, and other attendees miss out on great
          opportunities during the event.
        </p>
      </section>
      <section class='my-6'>
        <h3>Goal</h3>
        <p>
          With VENU we wanted to create a personalized experience by making recommendations based on interests
          and helping navigate large events such as Imagine RIT. We wanted to test our app on this festival as over 30,000 people attend each year.
        </p>
      </section>
    </section>
    <!-- Project Details -->
    <section class='container py-4'>
      <h2>Project Details</h2>
      <!-- Home View -->
      <section class='my-6'>
        <section class='flex flex-col items-center md:flex-row-reverse'>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.login'
              alt='VENU Login Page'
              class='block mx-auto md:mr-0 md:ml-auto'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Venu Login Page
            </figcaption>
          </figure>
          <section class='w-full md:mr-3 md:w-3/4'>
            <h3>Role</h3>
            <p>
              For this project my main role was working as the developer for the app. After some deliberation with the team over to create
              a mobile or a web app we settled on creating a web app since it was more accessible for users to access it via the browser than having
              to download an app from the store. Since our app was targeted at Imagine RIT, an event held only once a year we figured more people would be
              willing to try it out if we minimized the hassle.
            </p>
          </section>
        </section>
        <section class='flex flex-col items-center md:flex-row'>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.authenticating'
              alt='VENU Login Page while authenticating'
              class='block mx-auto md:ml-0 md:mr-auto'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Venu Authentication Experience
            </figcaption>
          </figure>
          <section class='w-full md:ml-3 md:w-3/4'>
            <h3>Technology</h3>
            <p>
              To create the web app I decided to create the front end with React and manage the state with Redux.
              Since it was my first time working with that library and doing any sort of flux-like state management I decided
              to try out some tutorials to get to know React. For the backend we decided on using Firebase as it allowed us to utilize their
              Authentication and Realtime Database with ease and allowed me to focus on the front-end. We also ended up using their Hosting platform to host the app.
            </p>
          </section>
        </section>
      </section>
    </section>
    <!-- Final Product -->
    <section class='container py-4'>
      <h2>Final Product</h2>
      <!-- Onboarding Process -->
      <section class='my-6'>
        <h3>Onboarding Process</h3>
        <!-- Location -->
        <section class='flex flex-col items-center md:flex-row my-6'>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.onboardingLocation'
              alt='VENU Onboarding Location Tracking Success Page'
              class='block mx-auto md:ml-0 md:mr-auto'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Location Tracking
            </figcaption>
          </figure>
          <section class='w-full md:ml-3 md:w-3/4'>
            <h4>Location</h4>
            <p>
              After the user signs into the app using either their Facebook or Google account, or as a Guest user they will be prompted
              to complete a couple of setup pages. Since the app is meant for wayfinding the first thing we ask is for access to the user's location.
              This step is not obligatory since we still wanted people to use the app even if they didn't want to give out their location.
            </p>
          </section>
        </section>
        <!-- Parking -->
        <section class='flex flex-col items-center md:flex-row-reverse my-6'>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.onboardingParking'
              alt='VENU Onboarding Parking Reminder Page'
              class='block mx-auto md:mr-0 md:ml-auto'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Parking Reminder
            </figcaption>
          </figure>
          <section class='w-full md:mr-3 md:w-3/4'>
            <h4>Parking</h4>
            <p>
              Since our app was meant to complement the Imagine RIT festival we had meetings with the Planning Committee in order to show our what we wanted to do,
              get some feedback, and take any suggestions. One suggestion they had was allowing users to save their parking spot. This came with a slight challenge as
              we weren't guaranteed the user would know of the app before they parked and as such we had two ways of storing parking reminder. First they can set their current
              location as a reminder (geolocation from the previous step was necessary for this), otherwise they could select one of the multiple parking lots at RIT. The second
              option was less accurate but it would still be useful for people to get to those lots if they hadn't been there before. These settings could be changed later in the profile page.
            </p>
          </section>
        </section>
        <!-- Interests -->
        <section class='flex flex-col items-center md:flex-row my-6'>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.onboardingInterests'
              alt='VENU Onboarding Interest Selection Page'
              class='block mx-auto md:ml-0 md:mr-auto'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Interest Selection
            </figcaption>
          </figure>
          <section class='w-full md:ml-3 md:w-3/4'>
            <h4>Interests</h4>
            <p>
              The last process of our setup was interest selection. Since we wanted to personalize the user's experience by recommending exhibits we kept track of their interests.
              Using these recommendations we narrowed down the exhibits users would be most interested in. We also made sure to allow them to edit these interests at a later time.
            </p>
          </section>
        </section>
      </section>
      <!-- Home -->
      <section class='my-6'>
        <h3>Home</h3>
        <section class='my-6'>
          <h4>Pins</h4>
          <p>
            Once onboarding was completed we would dive the user right in the app. The home page had the map of the campus with the user centered in the map and showed the
            nearby booths represented by the orange pin. Since many exhibits were close to each other we applied a clustering technique that looked like merged pins.
            If the number of exhibits clustered were in the single digits, two pins would appear merged, otherwise it would be three. Pressing the clusters would zoom the user in.
          </p>
        </section>
        <section class='flex flex-col items-center md:flex-row-reverse'>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.home'
              alt='VENU Home Page'
              class='block mx-auto md:mr-0 md:ml-auto'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Home View
            </figcaption>
          </figure>
          <section class='w-full md:mr-3 md:w-3/4'>
            <p>
              Exhibits have different states. These are <strong>normal</strong> which are the orange pins, <strong>bookmarked</strong> which are pins the user bookmarks and are represented by a blue color,
              and <strong>visited</strong> which are exhibits the user has marked as visited, they look like normal pins except faded out. Campus facilities also appear on the map and they are distinguished by the
              rounded black diamond with the facility type icon. The facilities were <strong>Dining</strong>, <strong>Restrooms</strong>, <strong>Welcome Centers</strong>, <strong>Information Booths</strong>, <strong>Medical Centers</strong>,
              and transportation such as <strong>Shuttles</strong> and <strong>Cars</strong>.
            </p>
          </section>
        </section>
        <section class='flex flex-col items-center md:flex-row'>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.homeRecommended'
              alt='VENU Home Page Zoomed'
              class='block mx-auto md:ml-0 md:mr-auto'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Zoomed in home view
            </figcaption>
          </figure>
          <section class='w-full md:ml-3 md:w-3/4'>
            <h4>Recommended Exhibits</h4>
            <p>
              The home page had two states. A <strong>Recommended</strong> tab and an <strong>All</strong> tab. Originally the <strong>Recommended</strong> would show only the recommended exhibits
              however this was later changed after some feedback to show all of the exhibits. Instead the cards at the bottom of the screen would change. In the <strong>Recommended</strong> state,
              they would show the recommended exhibits by area. When the card is centered on the screen it would also center the map on the exhibit. On the <strong>All</strong> state the cards
              at the bottom would show bookmarked exhibits.
            </p>
          </section>
        </section>
      </section>
      <!-- Itinerary -->
      <section class='my-6'>
        <section class='flex flex-col items-center md:flex-row-reverse'>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.itinerary'
              alt='VENU Itinerary Page'
              class='block mx-auto md:mr-0 md:ml-auto'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Itinerary View
            </figcaption>
          </figure>
          <section class='w-full md:mr-3 md:w-3/4'>
            <h3>Itinerary</h3>
            <p>
              The second tab of the app was the <strong>Itinerary</strong> page. Here we would show a list of <strong>bookmarked</strong> exhibits as well as exhibits <strong>visited</strong> by the user.
              The <strong>visited</strong> exhibits were displayed last and had a different background differentiating them from bookmarked exhibits.
            </p>
          </section>
        </section>
      </section>
      <!-- Search -->
      <section class='my-6'>
        <h3>Search</h3>
        <section class='my-6'>
          <p>
            The search page has two states. A landing page and a page with search results. The landing page was meant to help people find exhibits quickly and to search for terms. We had the user's interest
            list at the top and then the list of facilities. Pressing any of there would search for those immediately. We also included a list for every festival zone with at least 3 exhibits that matched the user's
            interests.
          </p>
        </section>
        <section class='flex flex-col items-center justify-center md:flex-row'>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.searchHome'
              alt='VENU Search Landing Page'
              class='block mx-auto md:mx-0'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Search View
            </figcaption>
          </figure>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.searchResults'
              alt="VENU Search Page after searching for exhibits with Robot in it's name, description or tag"
              class='block mx-auto md:mx-0'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Search results
            </figcaption>
          </figure>
        </section>
      </section>
      <!-- Profile -->
      <section class='my-6'>
        <section class='flex flex-col items-center md:flex-row'>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.profile'
              alt='VENU Profile Page'
              class='block mx-auto md:ml-0 md:mr-auto'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Profile View
            </figcaption>
          </figure>
          <section class='w-full md:ml-3 md:w-3/4'>
            <h3>Profile</h3>
            <p>
              The profile page was simple and had some stats such as places the user had bookmarked and visited. If also had action to change their interests and update their parking location. It also included a logout button.
            </p>
          </section>
        </section>
      </section>
      <!-- Exhibit Detail -->
      <section class='my-6'>
        <section class='flex flex-col items-center md:flex-row-reverse'>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.detail'
              alt='VENU Exhibit Detail Page'
              class='block mx-auto md:mr-0 md:ml-auto'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Exhibit Detail View
            </figcaption>
          </figure>
          <section class='w-full md:mr-3 md:w-3/4'>
            <h3>Exhibit Detail</h3>
            <p>
              The exhibit page contains all the details available on an exhibit. It would open any time a pin, a card, or a list item on an exhibit (or facility) were pressed.
              The exhibit page contains information we had on an exhibit such as tags, the time it ran, the recommended age for visitors, the festival zone, building and room number.
              It also had a brief exhibit description and a list of people who ran the exhibit. Users could either bookmark the exhibit by pressing the <strong>Save</strong> button or mark
              the exhibit as visited by pressing the <strong>Check In</strong> button.
            </p>
          </section>
        </section>
        <section class='flex flex-col items-center justify-center md:flex-row'>
          <figure class='w-full md:w-1/3'>
            <Pic
              lazy
              zoomable
              :src='images.detailSaved'
              alt='VENU Exhibit Detail Page for Bookmarked Exhibit'
              class='block mx-auto md:mx-0'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Bookmarked Exhibit
            </figcaption>
          </figure>
          <figure class='w-full md:w-1/3'>
            <Pic
              lazy
              zoomable
              :src='images.detailVisited'
              alt='VENU Exhibit Detail Page for Marked as Visited Exhibit'
              class='block mx-auto md:mx-0'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Visited Exhibit
            </figcaption>
          </figure>
          <figure class='w-full md:w-1/3'>
            <Pic
              lazy
              zoomable
              :src='images.detailBottom'
              alt='VENU Exhibit Detail Page Below the fold'
              class='block mx-auto md:mx-0'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Below the fold
            </figcaption>
          </figure>
        </section>
      </section>
      <!-- Directions -->
      <section class='my-6'>
        <section class='flex flex-col items-center md:flex-row'>
          <figure class='w-full md:w-1/4'>
            <Pic
              lazy
              zoomable
              :src='images.directions'
              alt='VENU Directions Page'
              class='block mx-auto md:ml-0 md:mr-auto'
            />
            <figcaption class='text-center text-grey-dark text-sm'>
              Directions View
            </figcaption>
          </figure>
          <section class='w-full md:ml-3 md:w-3/4'>
            <h3>Directions</h3>
            <p>
              By pressing the <strong>Go</strong> button they were sent to the <strong>Directions</strong> page. There we used Google Maps Directions API to get a path from the user's location
              to the exhibit location. We did notice that paths would act weirdly in the campus especially if the distance was not that far. Once the user had reached their destination they could mark the exhibit as visited.
            </p>
          </section>
        </section>
      </section>
    </section>
    <!-- Video -->
    <section class='container py-4'>
      <h2>VENU @ Imagine RIT</h2>
      <figure>
        <Vimeo
          title='VENU Imagine RIT Video'
          src='https://player.vimeo.com/video/219845941'
        />
        <figcaption class='mt-2 text-center text-grey-dark text-sm'>
          Imagine RIT Video
        </figcaption>
      </figure>
    </section>
    <!-- Parting Thoughts -->
    <section class='container py-4'>
      <h2>Parting Thoughts</h2>
      <section class='my-6'>
        <p>
          VENU was a great experience as we were able to work on a multifaceted project with multiple members and responsibilities. We did learn many lessons doing the project
          such as communication being the key to success. Even if team members had prior obligations that conflicted with team meetings, it was better to know what was going on than to be in the dark.
          We also learned that it was difficult to generate awareness to people prior to the festival. We had access to the universities message center and had an interview with a local TV station we still wanted more people to learn about the app.
          Still we had about 950 people use the app and we were pleased. It was also important to stay focused on what mattered most and deliver on that even if it meant some things might not make it to the final product.
        </p>
        <p class='mt-6'>
          Overall it was an exciting project to work on. It took a lot of work for the group to create the product. I would like to thank my teammates for their awesome work! They did a great job from orginazation, conceptualization, to marketing, sketching, prototyping, editing, and data visualization: <a href='http://jra1798.cias.rit.edu' rel='nofollow noopener norefferer' target='_blank'>Jenna Ammerall</a>, <a href='http://www.jamusandrest.com' rel='nofollow noopener norefferer' target='_blank'>Jamus Andrest</a>, <a href='https://juliabender.myportfolio.com' rel='nofollow noopener norefferer' target='_blank'>Julia Bender</a>, <a href='https://www.jeffdinh.net' rel='nofollow noopener norefferer' target='_blank'>Jeffwaslin Dinh</a>, <a href='http://melaniejkim.com' rel='nofollow noopener norefferer' target='_blank'>Melanie Kim</a>, and <a href='https://people.rit.edu/ixs5214/portfolio/' rel='nofollow noopener norefferer' target='_blank'>Isaac Selleck</a>.
          As well as our New Media professors, Nancy Doubleday and Adam Smith, for all their help and guidance.
        </p>
      </section>
    </section>
    <!-- CTA -->
    <section class='bg-grey-darker'>
      <section class='container py-20 text-center text-white'>
        <h2 class='my-3'>Want to view more?</h2>
        <a
          href='https://github.com/TeamVenu/venu'
          class='bg-grey-lightest btn font-semibold hover:bg-white hover:shadow-lg inline-block mb-2 px-8 py-3 rounded shadow-md text-red'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon :icon="['fab', 'github']"  />
          <span>Github</span>
        </a>
      </section>
    </section>
  </article>
</template>

<style scoped>
  .banner-venu {
    background-image: url('~assets/images/venu/thumbnail.jpeg');
  }
</style>

<script>
  // Assets
  import ImageLogin from '~/assets/images/venu/public/login.png';
  import ImageAuthenticating from '~/assets/images/venu/public/login 2.png';
  import ImageOnboardingLocation from '~/assets/images/venu/public/onboarding 2.png';
  import ImageOnboardingParking from '~/assets/images/venu/public/onboarding 3.png';
  import ImageOnboardingInterests from '~/assets/images/venu/public/onboarding 4.png';
  import ImageHome from '~/assets/images/venu/public/home.png';
  import ImageHomeRecommended from '~/assets/images/venu/public/home 2.png';
  import ImageItinerary from '~/assets/images/venu/public/itinerary.png';
  import ImageSearchHome from '~/assets/images/venu/public/search.png';
  import ImageSearchResults from '~/assets/images/venu/public/search 2.png';
  import ImageProfile from '~/assets/images/venu/public/profile.png';
  import ImageDetailPage from '~/assets/images/venu/public/detail.png';
  import ImageDetailSaved from '~/assets/images/venu/public/detail 2.png';
  import ImageDetailVisited from '~/assets/images/venu/public/detail 3.png';
  import ImageDetailBottom from '~/assets/images/venu/public/detail 4.png';
  import ImageDirections from '~/assets/images/venu/public/directions.png';

  // Components
  import Pic from '~/components/Pic.vue';
  import Vimeo from '~/components/Vimeo.vue';
  import FontAwesomeIcon from '~/components/FontAwesomeIcon';

  export default {
    components: {
      Pic,
      FontAwesomeIcon,
      Vimeo,
    },
    computed: {
      images() {
        return {
          login: ImageLogin,
          authenticating: ImageAuthenticating,
          onboardingLocation: ImageOnboardingLocation,
          onboardingParking: ImageOnboardingParking,
          onboardingInterests: ImageOnboardingInterests,
          home: ImageHome,
          homeRecommended: ImageHomeRecommended,
          itinerary: ImageItinerary,
          searchHome: ImageSearchHome,
          searchResults: ImageSearchResults,
          profile: ImageProfile,
          detail: ImageDetailPage,
          detailSaved: ImageDetailSaved,
          detailVisited: ImageDetailVisited,
          detailBottom: ImageDetailBottom,
          directions: ImageDirections,
        };
      },
    },
  }
</script>
