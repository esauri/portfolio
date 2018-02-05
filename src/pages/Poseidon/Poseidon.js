import React from 'react';
import Zooming from 'zooming';
import TiDevicePhone from 'react-icons/lib/ti/device-phone';
import TiCalendarOutline from 'react-icons/lib/ti/calendar-outline';

// Components
import Row from './../../components/Row/Row';
import Tag from './../../components/Tag/Tag';
import Tags from './../../components/Tags/Tags';
import Card from './../../components/Card/Card';
import Column from './../../components/Column/Column';
import Banner from './../../components/Banner/Banner';
import Picture from './../../components/Picture/Picture';
import ProjectDetail from './../../components/ProjectDetail/ProjectDetail';
import ProjectDetailContainer from './../../components/ProjectDetailContainer/ProjectDetailContainer';

// Assets
import PoseidonDetailPlot from './../../assets/img/poseidon/screens/plot page.jpg';
import PoseidonBanner from './../../assets/img/poseidon/poseidon_dark.jpg';
import PoseidonPlots from './../../assets/img/poseidon/screens/plots.jpg';
import PoseidonEvent from './../../assets/img/poseidon/screens/event.jpg';

// Utils
import projects from './../../utils/getProjectList';

import styles from './styles.module.css';

// Create new zoomable object
const zooming = new Zooming();

export default ({ route }) => (
  <article>
    {/* Banner */}
    <Banner src={PoseidonBanner} />
    {/* Content */}
    <section className={'wrapper'}>
      <h2>Poseidon Live</h2>
      {/* Project Details */}
      <ProjectDetailContainer>
        <ProjectDetail>
          <TiDevicePhone />Web App Development
        </ProjectDetail>
        <ProjectDetail>
          <TiCalendarOutline /> May 2017 - Jan 2018
        </ProjectDetail>
      </ProjectDetailContainer>
      {/* Tags */}
      <Tags>
        <Tag>Angular 5</Tag>
        <Tag>Ionic 3</Tag>
        <Tag>PWA</Tag>
        <Tag>Highcharts</Tag>
      </Tags>
      <h3>About Poseidon</h3>
      <p>
        <a href={'https://www.poseidonsys.com/'} target={'_blank'} rel={'noopener noreferrer'}>Poseidon Live</a> is a
        real-time asset health monitoring web app for their self developed and manufactured condition monitoring solutions
        such as metallic wear debris, oil conditioning, and other fluid diagnostics. Their products serve various industries
        such as the wind power, railroad, and maritime industries. Their sensor technology is also used in mining operations
        and heavy diesel engines.
      </p>
      <h3>Project Goal</h3>
      <p>
        Poseidon wanted to update their existing web portal with a new web app that was accessible through
        modern technology and devices. They wanted to take advantage of mobile technology to add new features
        such as Push Notifications and fingerprint authentication as well as update their wear debris and oil monitoring
        data with custom annotations, alarms, and events.
      </p>
    </section>
    <Picture alt={'Poseidon Asset Plots'} zooming={zooming} src={PoseidonPlots} />
    <section className={'wrapper'}>
      <h2>Solution</h2>
      <h3>Tech Stack</h3>
      <p>
        One of the goals of the app was to be used as a mobile app so users can quickly access from their devices.
        They also wanted to take advantage of device capabilities such as fingerprint authentication. They also wanted
        the app to be used on the web as they wanted it to slowly take over their existing Poseidon Live web portal. As such
        we decided to go forward creating the new app using Angular and the Ionic Framework. This provided a robust framework,
        mobile ready components, as well as the capability to build one app that can run on any device and use native features with Cordova. The ascent of progressive web apps in the last couple
        of years had already caught up in Ionic and they provided service workers and other tools to make the app a pwa from the get go.
      </p>
      <p>
        We made use of Firebase for authentication purposes, cloud storage, cloud messaging, hosting, and we also tested out their recently released Firestore database.
        To display large amounts of datasets we tried various charting libraries such as amCharts, Plotly, Fusion Charts, and Google Charts but ended up going
        with Highcharts as a suitable replacement for the old jqPlot. For the mobile version we added support for CodePush (now part of App Center) so users can access the most recent version
        without having to update the app from the store.
      </p>
      <h3>Plot Annotations &amp; Event Timeline</h3>
      <Picture alt={'Poseidon Plot Page'} zooming={zooming} src={PoseidonDetailPlot} />
      <Row wrap>
        <Column space={30}>
          <h4>
            <Tags>
              <Tag className={`${styles.center} ${styles.special}`}>1</Tag>
            </Tags>
          </h4>
          <p>
            A new feature for the plots was the ability to attach events to them such as weather, device maintenance,
            monitoring alarms, or general user comments. Files could also be attached to events containing generated reports
            and other data. Events would also have the ability to be shared with others. Either by adding custom collaborators
            with read and/or write access, or by giving a company read and/or write access which would trickle down that access
            to the company users.
          </p>
        </Column>
        <Column space={30}>
          <h4>
            <Tags>
              <Tag className={`${styles.center} ${styles.special}`}>2</Tag>
            </Tags>
          </h4>
          <p>
            To create the custom events we added two ways. Creating the event first and entering the necessary information.
            Then the user would link the event to any assets or locations (which linked events to the assets in said location).
            The second event creation tool was accessed by pressing the edit icon in a plot which allowed the user to enter annotation mode.
            From there they would just need to tap on the location they want the event created (in a time series chart).
            Thus linking assets or locations first then entering event details.
          </p>
        </Column>
        <Column space={30}>
          <h4>
            <Tags>
              <Tag className={`${styles.center} ${styles.special}`}>3</Tag>
            </Tags>
          </h4>
          <p>
            We displayed the event information in different ways. The most visible was in the plots themselves. We have vertical lines
            at the date and time the event occurred. The line had the event categories color and icon as well as the title. Hovering over the
            line shows a tooltip that takes the user to that specific events page when pressed. We also have a timeline of events for the user.
            The timeline can be accessed in the timeline page but each plot page also has a preview timeline with events associated with the plot's assets.
          </p>
        </Column>
      </Row>
    </section>
    <Picture alt={'Poseidon Event Creation Pages'} zooming={zooming} src={PoseidonEvent} />
    <section className={'wrapper'}>
      <h3>Parting Thoughts</h3>
      <p>
        Working on Poseidon was a tremendous experience. This was a long term project that took many months to work on and
        it allowed me to go further than I had ever gone with. I wasn't just working on a web app or a mobile app, but an app
        that had to function as both. An app for Android, iOS, and the web be it mobile or desktop. I was able to learn much about progressive web apps,
        performance, hybrid app tools and their constraints, data visualization and many other aspects working on other features that are too numerous to mention here.
        Taking a working product and completely recreating it with new technology and improving it with new features was an arduous but fulfilling task and I am glad that
        I was a part of the new Poseidon Live.
      </p>
    </section>
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