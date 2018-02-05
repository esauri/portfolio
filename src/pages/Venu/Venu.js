import React from 'react';
import Zooming from 'zooming';
import TiDevicePhone from 'react-icons/lib/ti/device-phone';
import TiSocialGithub from 'react-icons/lib/ti/social-github';
import TiCalendarOutline from 'react-icons/lib/ti/calendar-outline';
import TiGroup from 'react-icons/lib/ti/group';

// Components
import Row from './../../components/Row/Row';
import Tag from './../../components/Tag/Tag';
import Tags from './../../components/Tags/Tags';
import Card from './../../components/Card/Card';
import Vimeo from './../../components/Vimeo/Vimeo';
import Button from './../../components/Button/Button';
import Banner from './../../components/Banner/Banner';
import Column from './../../components/Column/Column';
import Picture from './../../components/Picture/Picture';
import Carousel from './../../components/Carousel/Carousel';
import CallToAction from './../../components/CallToAction/CallToAction';
import ProjectDetail from './../../components/ProjectDetail/ProjectDetail';
import ProjectDetailContainer from './../../components/ProjectDetailContainer/ProjectDetailContainer';

import VenuBanner from './../../assets/img/venu/thumbnail.jpeg';

// Login screens
import LoginScreen from './../../assets/img/venu/public/login.png';
import LoginLoadScreen from './../../assets/img/venu/public/login 2.png';

// Onboarding screens
import OnboardingLocationScreen from './../../assets/img/venu/public/onboarding.png';
import OnboardingLocationSuccessScreen from './../../assets/img/venu/public/onboarding 2.png';
import OnboardingParkingLocationScreen from './../../assets/img/venu/public/onboarding 3.png';
import OnboardingInterestsScreen from './../../assets/img/venu/public/onboarding 4.png';

// Home screens
import HomeScreen from './../../assets/img/venu/public/home.png';
import HomeZoomScreen from './../../assets/img/venu/public/home 2.png';

// Detail screens
import DetailScreen from './../../assets/img/venu/public/detail.png';
import DetailSaveScreen from './../../assets/img/venu/public/detail 2.png';
import DetailVisitedScreen from './../../assets/img/venu/public/detail 3.png';
import DetailBottomScreen from './../../assets/img/venu/public/detail 4.png';

// Direction
import DirectionScreen from './../../assets/img/venu/public/directions.png';

// Itinerary
import ItineraryScreen from './../../assets/img/venu/public/itinerary.png';

// Search
import SearchScreen from './../../assets/img/venu/public/search.png';
import SearchedScreen from './../../assets/img/venu/public/search 2.png';

// Profile
import ProfileScreen from './../../assets/img/venu/public/profile.png';

// Utils
import projects from './../../utils/getProjectList';

// Create new zoomable object
const zooming = new Zooming();

export default ({ route }) => (
  <article>
    {/* Banner */}
    <Banner src={VenuBanner} invert />
    {/* Content */}
    <section className={'wrapper'}>
      {/* Intro */}
      <h2>VENU</h2>
      {/* Project Details */}
      <ProjectDetailContainer>
        <ProjectDetail>
          <TiDevicePhone /> Web App Development
        </ProjectDetail>
        <ProjectDetail>
          <TiGroup /> Team Project
        </ProjectDetail>
        <ProjectDetail>
          <TiCalendarOutline /> Spring 2017
        </ProjectDetail>
      </ProjectDetailContainer>
      {/* Tags */}
      <Tags>
        <Tag>ReactJS</Tag>
        <Tag>Redux</Tag>
        <Tag>Firebase</Tag>
        <Tag>PWA</Tag>
        <Tag>Web App Dev</Tag>
      </Tags>
      {/* Description */}
      <h3>Description</h3>
      <p>
        VENU is a wayfinding application created specifically for Imagine RIT, a festival
        of creativity and innovation held every year at Rochester Institute of Technology.
        We recognized that large events like Imagine RIT are hectic and confusing to people.
        Finding a specific facility or booth is frustrating, and other attendees miss out on great
        opportunities during the event.
      </p>
      <h3>Goal</h3>
      <p>
        With VENU we wanted to create a personalized experience by making recommendations based on interests
        and helping navigate large events such as Imagine RIT. We wanted to test our app on this festival as over 30,000 people attend each year.
      </p>
      <Row wrap>
        <Column space={'50'}>
          <h3>Role</h3>
          <p>
            For this project my main role was working as the developer for the app. After some deliberation with the team over to create
            a mobile or a web app we settled on creating a web app since it was more accessible for users to access it via the browser than having
            to download an app from the store. Since our app was targeted at Imagine RIT, an event held only once a year we figured more people would be
            willing to try it out if we minimized the hassle.
          </p>
        </Column>
        <Column space={'50'}>
          <Picture alt={'VENU Login Page'} src={LoginScreen} />
        </Column>
      </Row>
      <Row wrap>
        <Column space={'50'}>
          <Picture alt={'VENU Login Page Loading'} src={LoginLoadScreen} />
        </Column>
        <Column space={'50'}>
          <h3>Technology</h3>
          <p>
            To create the web app I decided to create the front end with React and manage the state with Redux.
            Since it was my first time working with that library and doing any sort of flux-like state management I decided
            to try out some tutorials to get to know React. For the backend we decided on using Firebase as it allowed us to utilize their
            Authentication and Realtime Database with ease and allowed me to focus on the front-end. We also ended up using their Hosting platform to host the app.
          </p>
        </Column>
      </Row>
    </section>
    <section className={'wrapper'}>
      <h3>Onboarding</h3>
      <h4>Location</h4>
      <p>
        After the user signs into the app using either their Facebook or Google account, or as a Guest user they will be prompted
        to complete a couple of setup pages. Since the app is meant for wayfinding the first thing we ask is for access to the user's location.
        This step is not obligatory since we still wanted people to use the app even if they didn't want to give out their location.
      </p>
      <Carousel auto>
        <img alt={'VENU Onboarding Location Page'} src={OnboardingLocationScreen} />
        <img alt={'VENU Onboarding Location Tracking Success Page'} src={OnboardingLocationSuccessScreen} />
      </Carousel>
      <Row wrap>
        <Column space={'50'}>
          <h4>Parking Reminder</h4>
          <p>
            Since our app was meant to complement the Imagine RIT festival we had meetings with the Planning Committee in order to show our what we wanted to do,
            get some feedback, and take any suggestions. One suggestion they had was allowing users to save their parking spot. This came with a slight challenge as
            we weren't guaranteed the user would know of the app before they parked and as such we had two ways of storing parking reminder. First they can set their current
            location as a reminder (geolocation from the previous step was necessary for this), otherwise they could select one of the multiple parking lots at RIT. The second
            option was less accurate but it would still be useful for people to get to those lots if they hadn't been there before. These settings could be changed later in the profile page.
          </p>
        </Column>
        <Column space={'50'}>
          <Picture alt={'VENU Onboarding Parking Reminder Page'} src={OnboardingParkingLocationScreen} />
        </Column>
      </Row>
      <Row wrap>
        <Column space={'50'}>
          <Picture alt={'VENU Onboarding Interest Selection Page'} src={OnboardingInterestsScreen} />
        </Column>
        <Column space={'50'}>
          <h4>Interests</h4>
          <p>
            The last process of our setup was interest selection. Since we wanted to personalize the user's experience by recommending exhibits we kept track of their interests.
            Using these recommendations we narrowed down the exhibits users would be most interested in. We also made sure to allow them to edit these interests at a later time.
          </p>
        </Column>
      </Row>

    </section>
    <section className={'wrapper'}>
      <h3>Home</h3>
      <Row wrap>
        <Column space={'50'}>
          <h4>Pins</h4>
          <p>
            Once onboarding was completed we would dive the user right in the app. The home page had the map of the campus with the user centered in the map and showed the
          nearby booths represented by the orange pin. Since many exhibits were close to each other we applied a clustering technique that looked like merged pins.
          If the number of exhibits clustered were in the single digits, two pins would appear merged, otherwise it would be three. Pressing the clusters would zoom the user in.
        </p>
          <p>
            Exhibits have different states. These are <strong>normal</strong> which are the orange pins, <strong>bookmarked</strong> which are pins the user bookmarks and are represented by a blue color
          , and <strong>visited</strong> which are exhibits the user has marked as visited, they look like normal pins except faded out. Campus facilities also appear on the map and they are distinguished by the
          rounded black diamond with the facility type icon. The facilities were <strong>Dining</strong>, <strong>Restrooms</strong>, <strong>Welcome Centers</strong>, <strong>Information Booths</strong>, <strong>Medical Centers</strong>,
          and transportation such as <strong>Shuttles</strong> and <strong>Cars</strong>.
        </p>
        </Column>
        <Column space={'50'}>
          <Picture alt={'VENU Home Page'} src={HomeScreen} zooming={zooming} />
        </Column>
        <Column space={'50'}>
          <Picture alt={'VENU Home Page Zoomed'} src={HomeZoomScreen} />
        </Column>
        <Column space={'50'}>
          <h4>Recommended Exhibits</h4>
          <p>
            The home page had two states. A <strong>Recommended</strong> tab and an <strong>All</strong> tab. Originally the <strong>Recommended</strong> would show only the recommended exhibits
            however this was later changed after some feedback to show all of the exhibits. Instead the cards at the bottom of the screen would change. In the <strong>Recommended</strong> state,
            they would show the recommended exhibits by area. When the card is centered on the screen it would also center the map on the exhibit. On the <strong>All</strong> state the cards
            at the bottom would show bookmarked exhibits.
          </p>
        </Column>
      </Row>
    </section>
    <section className={'wrapper'}>
      <Row wrap>
        <Column space={'50'}>
          <h3>Itinerary</h3>
          <p>
            The second tab of the app was the <strong>Itinerary</strong> page. Here we would show a list of <strong>bookmarked</strong> exhibits as well as exhibits <strong>visited</strong> by the user.
            The <strong>visited</strong> exhibits were displayed last and had a different background differentiating them from bookmarked exhibits.
          </p>
        </Column>
        <Column space={'50'}>
          <Picture alt={'VENU Itinerary Page'} src={ItineraryScreen} />
        </Column>
      </Row>
      <h3>Search</h3>
      <p>
        The search page has two states. A landing page and a page with search results. The landing page was meant to help people find exhibits quickly and to search for terms. We had the user's interest
        list at the top and then the list of facilities. Pressing any of there would search for those immediately. We also included a list for every festival zone with at least 3 exhibits that matched the user's
        interests.
      </p>
      <Row wrap>
        <Column space={'50'}>
          <Picture alt={'VENU Search Landing Page'} src={SearchScreen} />
        </Column>
        <Column space={'50'}>
          <Picture alt={'VENU Search Page after searching for exhibits with Robot in it\'s name, description or tag'} src={SearchedScreen} />
        </Column>
      </Row>
      <Row wrap>
        <Column space={'50'}>
          <h3>Profile</h3>
          <p>
            The profile page was simple and had some stats such as places the user had bookmarked and visited. If also had action to change their interests and update their parking location. It also included a logout button.
          </p>
        </Column>
        <Column space={'50'}>
          <Picture alt={'VENU Profile Page'} src={ProfileScreen} />
        </Column>
      </Row>
    </section>
    <section className={'wrapper'}>
      <Row wrap>
        <Column space={'50'}>
          <h3>Exhibit Page</h3>
          <p>
            The exhibit page contains all the details available on an exhibit. It would open any time a pin, a card, or a list item on an exhibit (or facility) were pressed.
            The exhibit page contains information we had on an exhibit such as tags, the time it ran, the recommended age for visitors, the festival zone, building and room number.
            It also had a brief exhibit description and a list of people who ran the exhibit. Users could either bookmark the exhibit by pressing the <strong>Save</strong> button or mark
            the exhibit as visited by pressing the <strong>Check In</strong> button.
          </p>
        </Column>
        <Column space={'50'}>
          <Picture alt={'VENU Exhibit Detail Page'} src={DetailScreen} />
        </Column>
      </Row>
      <Carousel auto>
        <img alt={'VENU Exhibit Detail Page for Bookmarked Exhibit'} src={DetailSaveScreen} />
        <img alt={'VENU Exhibit Detail Page for Marked as Visited Exhibit'} src={DetailVisitedScreen} />
        <img alt={'VENU Exhibit Detail Page Below the fold'} src={DetailBottomScreen} />
      </Carousel>
      <Row wrap>
        <Column space={'50'}>
          <h4>Directions</h4>
          <p>
            By pressing the <strong>Go</strong> button they were sent to the <strong>Directions</strong> page. There we used Google Maps Directions API to get a path from the user's location
            to the exhibit location. We did notice that paths would act weirdly in the campus especially if the distance was not that far. Once the user had reached their destination they could mark the exhibit as visited.
          </p>
        </Column>
        <Column space={'50'}>
          <Picture alt={'VENU Directions Page'} src={DirectionScreen} />
        </Column>
      </Row>
    </section>
    <section className={'wrapper'}>
      {/* Video */}
      <h3>VENU @ Imagine RIT</h3>
      <Vimeo
        title={'270 Demo'}
        src={'https://player.vimeo.com/video/219845941'}
      />
    </section>
    <section className={'wrapper'}>
      <h3>Parting Thoughts</h3>
      <p>
        VENU was a great experience as we were able to work on a multifaceted project with multiple members and responsibilities. We did learn many lessons doing the project
        such as communication being the key to success. Even if team members had prior obligations that conflicted with team meetings, it was better to know what was going on than to be in the dark.
        We also learned that it was difficult to generate awareness to people prior to the festival. We had access to the universities message center and had an interview with a local TV station we still wanted more people to learn about the app.
        Still we had about 950 people use the app and we were pleased. It was also important to stay focused on what mattered most and deliver on that even if it meant some things might not make it to the final product.
      </p>
      <p>
        Overall it was an exciting project to work on. It took a lot of work for the group to create the product. I would like to thank my teammates for their awesome work! They did a great job from orginazation, conceptualization, to marketing, sketching, prototyping, editing, and data visualization: <a href={'http://jra1798.cias.rit.edu'} target={'_blank'}>Jenna Ammerall</a>, <a href={'http://www.jamusandrest.com'} target={'_blank'}>Jamus Andrest</a>, <a href={'https://juliabender.myportfolio.com'} target={'_blank'}>Julia Bender</a>, <a href={'https://www.jeffdinh.net'} target={'_blank'}>Jeffwaslin Dinh</a>, <a href={'http://melaniejkim.com'} target={'_blank'}>Melanie Kim</a>, and <a href={'https://people.rit.edu/ixs5214/portfolio/'} target={'_blank'}>Isaac Selleck</a>.
        As well as our New Media professors, Nancy Doubleday and Adam Smith, for all their help and guidance.
      </p>
    </section>
    {/* CTA */}
    <CallToAction>
      <h3>Want to view more?</h3>
      {/* VENU */}
      <a href={'https://ritvenu.com'} target={'_blank'} rel={'noopener noreferrer'}>
        <Button>
          <TiDevicePhone size={28} /> Visit VENU
        </Button>
      </a>
      {/* Github */}
      <a href={'https://github.com/TeamVenu/venu'} target={'_blank'} rel={'noopener noreferrer'}>
        <Button>
          <TiSocialGithub size={28} /> View Github
        </Button>
      </a>
    </CallToAction>
    <Row wrap>
      {
        projects
          .filter((project) => project.link !== route)
          .map((project, index, list) => {
            return (
              <Column key={index} space={parseInt(100 / list.length, 10)} full>
                <Card
                  project={project}
                />
              </Column>
            );
          })
      }
    </Row>
  </article>
);
