import React, { Component } from 'react';
import Zooming from 'zooming';
import TiDevicePhone from 'react-icons/lib/ti/device-phone';
import TiSocialGithub from 'react-icons/lib/ti/social-github';
import TiCalendarOutline from 'react-icons/lib/ti/calendar-outline';

// Components
import Row from './../../components/Row/Row';
import Tag from './../../components/Tag/Tag';
import Tags from './../../components/Tags/Tags';
import Vimeo from './../../components/Vimeo/Vimeo';
import Banner from './../../components/Banner/Banner';
import Button from './../../components/Button/Button';
import Column from './../../components/Column/Column';
import Picture from './../../components/Picture/Picture';
import Carousel from './../../components/Carousel/Carousel';
import CallToAction from './../../components/CallToAction/CallToAction';
import ProjectDetail from './../../components/ProjectDetail/ProjectDetail';
import ProjectDetailContainer from './../../components/ProjectDetailContainer/ProjectDetailContainer';

// Assets
import TwoSevenZeroBanner from './../../assets/img/270/public/large/banner.jpg';
import TwoSevenZeroStateImage from './../../assets/img/270/public/small/state.png';
import TwoSevenZeroThumbnailImage from './../../assets/img/270/public/large/thumbnail.jpg'
import TwoSevenZeroTriviaWrongImage from './../../assets/img/270/public/small/triviaWrong.png';
import TwoSevenZeroDemocratStateImage from './../../assets/img/270/public/small/demStates.png';
import TwoSevenZeroRepublicanStateImage from './../../assets/img/270/public/small/gopStates.png';
import TwoSevenZeroTriviaCorrectImage from './../../assets/img/270/public/small/triviaCorrect.png';
import TwoSevenZeroMockupMainImage from './../../assets/img/270/public/large/mockupMainScreens.jpg';
import TwoSevenZeroMockupTriviaImage from './../../assets/img/270/public/large/mockupTriviaScreens.jpg';

class TwoSevenZero extends Component {
  render() {
    // Create new zoomable object
    const zooming = new Zooming();

    return (
      <article>
        {/* Banner */}
        <Banner src={TwoSevenZeroBanner} invert />
        {/* Content */}
        <section className={'wrapper'}>
          {/* Intro */}
          <h2>270</h2>
          <h4>Race to the White House</h4>
          {/* Project Details */}
          <ProjectDetailContainer>
            <ProjectDetail>
              <TiDevicePhone /> Mobile App Development
            </ProjectDetail>
            <ProjectDetail>
              <TiCalendarOutline /> Spring 2016
            </ProjectDetail>
          </ProjectDetailContainer>
          {/* Tags */}
          <Tags>
            <Tag>AngularJS</Tag>
            <Tag>Cordova</Tag>
            <Tag>Game Dev</Tag>
            <Tag>Ionic Framework</Tag>
            <Tag>Hybrid Mobile App Dev</Tag>
          </Tags>
          {/* Description */}
          <h3>Description</h3>
          <p>
            Race to the White House in the U.S. Government and History trivia game <strong>270</strong>.
            Select a party and run as that party's candidate. Travel to important battleground states
            and answer questions in order to obtain enough votes to win the state and get electoral votes
            necessary to become the President of the United States.
          </p>
          <h3>Goal</h3>
          <p>
            In order for the candidate to win the Presidency, they must earn at least 270 electoral votes. Players must then enter a
            state where they have several random trivia to answer. Players earn percentages of a state's vote if they answer trivia correctly.
            In order to get all of the electoral votes in a state their vote percentage must exceed 50%. Once enough states
            have been won to reach 270 electoral votes the player becomes President-Elect of the United States of America.
          </p>
          </section>
          <section className={'wrapper'}>
          {/* Mockups */}
          <h3>Mockups</h3>
          <Picture alt={'Mockup main screens'} zooming={zooming} src={TwoSevenZeroMockupMainImage} />
          <p>
            Above are the first designs of the app views. Not much has changed
            from these views other than the tab bar, which due to time constraints
            had to be limited. The <strong>Messages</strong> tab was intended so that
            the user could receive fake mail from interest groups, super pacs and 501(c)s
            for support and in game currency to be used in the trivia section.
            The <strong>Statistics</strong> and <strong>Me</strong> tabs were consolidated in
            the final version into one section where users can view their candidate profile
            and their vote percentages in each state. Another aspect that changed was how the
            electoral votes were displayed. Originally, I wasn't going to include vote percentages
            and each trivia question would grant a specific number to electoral votes if answered correctly.
          </p>
          <Picture alt={'Mockup trivia screens'} src={TwoSevenZeroMockupTriviaImage} />
          <p>
            As for the trivia views little changed other than the tab bar with different helpers users could call if they wanted to.
            Players were supposed to use the currency earned in game to purchase these helpers.
          </p>
        </section>
        <Picture alt={'270 Screens'} src={TwoSevenZeroThumbnailImage} />
        <section className={'wrapper'}>
          {/* Final Product */}
          <h3>Final Product</h3>
          <h4>States View</h4>
          <p>
            Due to time constraints on the project I decided to make enough trivia for only 10 states. I
            chose ten battleground states according to the results from the 2012 election. These states were: <strong>Colorado</strong>,
            <strong>Florida</strong>, <strong>Iowa</strong>,
            <strong>Nevada</strong>, <strong>New Hampshire</strong>, <strong>North Carolina</strong>,
            <strong>Ohio</strong>, <strong>Pennsylvania</strong>, <strong>Virginia</strong>, and <strong>Wisconsin</strong>.
          </p>
          <p>
            Since I was excluding 40 other states and the <strong>District of Columbia</strong>, I allotted their
            electoral votes to the candidate that had the best shot at winning them, again based on the 2012 election.
            This gave an edge to the Democrat Presidential Candidate who started with 217 electoral votes while the Republican
            Presidential Candidate began with 191.
          </p>
          {/* Carousel */}
          <Carousel auto>
            <img alt={'270 State Democrat View'} src={TwoSevenZeroDemocratStateImage} />
            <img alt={'270 State Republican View'} src={TwoSevenZeroRepublicanStateImage} />
          </Carousel>
          <p>
            The states with the partisan background represent states that have already been completed while the states with the
            partisan fill are states where the winner hasn't yet been called.
          </p>
          <p>
            I also removed tabs I had in the mockup designs. <strong>Me</strong> now showed the player's vote totals in each state
            as well as a button to reset the game, where they would go back to the start view and select a party.
            The <strong>How to Play</strong> tab had simple instructions on how the game worked and its several mechanics.
          </p>
          <Row wrap>
            <Column space={'50'}>
              <h4>State View</h4>
              <p>
                To get the electoral votes in a state the player has to obtain over 50% of the vote percentage in that state.
                Each state has a certain number of electoral votes based on the actual number during the 2010 - 2020 period.
                For example Iowa has 6 electoral votes.
              </p>
              <p>
                Each card contains a random question and they vary from easy to difficult based on the amount of votes
                they grant. The higher the vote the harder the question while lower vote percentages have easier questions.
              </p>
              <p>
                The cards and their percentages all vary by state. No two states have the same layout.
              </p>
              <p>
                Once a trivia has been answered the card's background changes to the partisan color.
              </p>
            </Column>
            <Column space={'50'}>
              <Picture alt={'270 States View'} src={TwoSevenZeroStateImage} />
            </Column>
          </Row>
          <h4>Trivia View</h4>
          <p>
            Each trivia question has a category and four possible choices, one of them being the correct
            answer. The choices are all randomly ordered as to not give the player any hints on which might
            be the correct answer.
          </p>
          <p>
            When choosing an answer, if it is incorrect an overlay will appear over the question with a red background
            telling the player that the answer was wrong and that they don't get any votes.
          </p>
          {/* Carousel */}
          <Carousel auto>
            <img alt={'270 Correct Answer Guessed'} src={TwoSevenZeroTriviaCorrectImage} />
            <img alt={'270 Incorrect Answer Guessed'} src={TwoSevenZeroTriviaWrongImage} />
          </Carousel>
          <p>
            If the player answers correctly, they will be told by how much did they score increase in that state.
          </p>
          <p>
            The player can also forfeit the question by tapping on the back key in the top bar. Their opponent will get
            the vote percentage increase for that question.
          </p>
        </section>
        <section className={'wrapper'}>
          {/* Video */}
          <h3>Gameplay</h3>
          <Vimeo
            title={'270 Demo'}
            src={'https://player.vimeo.com/video/183411950'}
          />
        </section>
        <section className={'wrapper'}>
          {/* Parting Thoughts */}
          <h3>Reflections</h3>
          <p>
            270 was a fun project to work on and the end result was a fun and replayable
            ame that can easily be expanded. During the development cycle I learned a lot about
            the technologies I used to make it, which I had no experience with such as
            AngularJS. I also got more experience working with the model-view-controller pattern which made my app's organization clear and effective.
            As a solo project I was also able to get a sense of what it takes to create a minimum viable product
            and learn from appropriately scoping my project. As my first app I feel more excited to delve deeper
            into mobile development, including progressive web apps, hybrid apps, and native apps.
          </p>
        </section>
        {/* CTA */}
        <CallToAction>
          <h3>Want to check out the repo?</h3>
          {/* Github */}
          <a href='https://github.com/esauri/270' target='_blank' rel='noopener noreferrer'>
            <Button>
              <TiSocialGithub size={28} /> View Project
            </Button>
          </a>
        </CallToAction>
      </article>
    );
  }
}

export default TwoSevenZero;
