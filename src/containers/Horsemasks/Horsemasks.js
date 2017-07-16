import React, { Component } from 'react';
import Zooming from 'zooming';
import FaGamepad from 'react-icons/lib/fa/gamepad';
import TiCalendarOutline from 'react-icons/lib/ti/calendar-outline';

// Components
import Row from './../../components/Row/Row';
import Tag from './../../components/Tag/Tag';
import Tags from './../../components/Tags/Tags';
import Banner from './../../components/Banner/Banner';
import Column from './../../components/Column/Column';
import Picture from './../../components/Picture/Picture';
import ProjectDetail from './../../components/ProjectDetail/ProjectDetail';
import ProjectDetailContainer from './../../components/ProjectDetailContainer/ProjectDetailContainer';

import PanzerImage from './../../assets/img/horsemasks/panzer.png';
import PlayerImage from './../../assets/img/horsemasks/player.png';
import HorsemaskImage from './../../assets/img/horsemasks/horsemask.png';
import HorsemaskBanner from './../../assets/img/horsemasks/dawnofthelivinghorsemasks.png';

class Horsemasks extends Component {
  render() {
    const zooming = new Zooming();

    return (
      <article>
        {/* Banner */}
        <Banner src={HorsemaskBanner} invert />
        {/* Content */}
        <section className={'wrapper'}>
          {/* Intro */}
          <h2>Dawn of the Living Horsemasks</h2>
          {/* Project Details */}
          <ProjectDetailContainer>
            <ProjectDetail>
              <FaGamepad /> Game Design &amp; Development
            </ProjectDetail>
            <ProjectDetail>
              <TiCalendarOutline /> Spring 2015
            </ProjectDetail>
          </ProjectDetailContainer>
          {/* Tags */}
          <Tags>
            <Tag>C#</Tag>
            <Tag>Game Dev</Tag>
            <Tag>Unity</Tag>
          </Tags>
          {/* Description */}
          <h3>Apocalypse now</h3>
          <p>
            A terrible catastrophe has befallen the Earth.
            Apocalypse has begun and hordes ofHorsemasked creatures
            have risen and overrun the city. Military troops have been
            deployed but no word has been heard since.
            Satellite has captured footage of a single Panzer making rounds around the city park.
          </p>
          <h3>Goal</h3>
  				<p>
            Dawn of the Living Horsemasks was a project where we would need to implement various
            steering behaviors of autonomous agents.
            In Horsemasks I implemented Wander, Seeking, Flocking, Arrival, Obstacle Avoidance
            and simple Path following. As an added bonus I decided to also add in a playable character
            that the user may move around the city with and is even able to attack the Horsemasks.
          </p>
          </section>
          <section className={'wrapper'}>
          <h3>Gameplay</h3>
          {/* Player */}
          <Row wrap>
            <Column space={'50'}>
              <h4>Player</h4>
              <p>
                The player character appears in the city park surrounded by wandering Horsemasks.
                If they get within certain range of her, they will follow her.
                To escape she is able to move around using a <strong>Point and Click</strong> system similar to to other ortographic games like Diablo.
                Alternatively, she can punch horsemasks in the face with her magical fist by hovering over them and pressing the <strong>Spacebar</strong>.
              </p>
              <h4>Living Horsemask</h4>
              <p>
                The living horsemasks appear in random locations around the city.
                They wander through the streets avoiding any obstacles in the way.
                When in close range to the player they begin chasing her.
                If the player manages to get away they will stop searching and wander once again.
                The horsemasks will flock if there are several of them following the player.
              </p>
              <h4>Tank</h4>
              <p>
                Patrolling the city lies a single tank.
                It moves along the street never stopping for anything.
                Due to the fact that it doesn't engage in combat with the Horsmasks, some wonder if the people within the tank are alive, or even human.
              </p>
            </Column>
            <Column space={'50'}>
              <Picture alt={'Player character thumbnail'} zooming={zooming} src={PlayerImage} />
            </Column>
          </Row>
          </section>
          <section className={'wrapper'}>
          {/* Timeline */}
          <h3>Project Timeline</h3>
          <Row>
            <Column space={50}>
              <Picture alt={'Living Horsemask character thumbnail'} src={HorsemaskImage} />
            </Column>
            <Column space={50}>
              <h4>Ideation &amp; Planning</h4>
              <p>
                First phase of the project was coming up with the initial plan that encompassed the steering behaviors and how they react to other agents and respond to objects in the environment, flocking, and character motivations.
                I decided on making a controllable character and the horsemasks which would want to follow the character if they were in range.
                If not then they would simply wander around. I would also implement a tank and some soldiers which would move around the city using path following.
                If the soldiers came in range with a horsemask then they would pursue and eliminate it.
              </p>
              <h4>Functioning Prototype</h4>
              <p>
                For this phase we would need the basic steering behaviors working.
                I made the horsemasks all agents which would seek the moving player's current velocity.
                I also created a rough map so that I could randomly place objects and test obstacle avoidance as well as implement path following.
                The wander method was partially implemented.
              </p>
              <h4>Delivery</h4>
              <p>
                On the previous rough map I worked to finish wander and make sure all the other steering behaviors worked as intended and then I preceded to do a new map on work on level design.
                I made a draft of how I wanted the city to look, the park with its benches, dumpsters, trees and vending machines as well as the small graveyard north of it.
                I created the new path the tank would follow with roads. Finally, I implemented the combat and "eliminating" the horsemask by translating it somewhere else.
              </p>
            </Column>
          </Row>
          </section>
          <section className={'wrapper'}>
          {/* Assets */}
          <h3>Assets</h3>
          <Picture alt={'Tank thumbnail'} src={PanzerImage} />
          <p>
            I found some neat <em>(free)</em> assets on the Unity Asset Store.
            I decided to give the scene a darker and creepier atmosphere.
            I used a dark autumn texture for most of the terrain with some ground paths here and there.
            I added some Sycamore, willow and alder trees to give it some flavor and some of the textures appear white.
            Most of the city assets, cars, roads, buildings, light posts, signs come from <a href='https://www.assetstore.unity3d.com/en/#!/publisher/1578' target='_blank' rel='noopener noreferrer'>Sinister Games</a>.
            The benches come from <a href='https://www.assetstore.unity3d.com/en/#!/publisher/9731' target='_blank' rel='noopener noreferrer'>Lef</a>.
            The snack vending machines come from <a href='https://www.assetstore.unity3d.com/en/#!/content/3517' target='_blank' rel='noopener noreferrer'>VIS Games</a>, while the dumpster is from <a href='https://www.assetstore.unity3d.com/en/#!/content/23183' target='_blank' rel='noopener noreferrer'>Ozgur Saral</a>.
            The cemetery assets come from <a href='https://www.assetstore.unity3d.com/en/#!/publisher/2752' target='_blank' rel='noopener noreferrer'>Xiaolianhua Studio</a>.
            The tank is from <a href='https://www.assetstore.unity3d.com/en/#!/publisher/2490' target='_blank' rel='noopener noreferrer'>Torsten Heldmann</a>, the rubber horse mask is from <a href='https://www.assetstore.unity3d.com/en/#!/publisher/4624' target='_blank' rel='noopener noreferrer'>Biscuitland</a>,
            the zombies are from <a href='https://www.assetstore.unity3d.com/en/#!/publisher/11247' target='_blank' rel='noopener noreferrer'>Pxktiger</a>, and the female model is from <a href='https://www.assetstore.unity3d.com/en/#!/publisher/11008' target='_blank' rel='noopener noreferrer'>Yurov Viktor</a>.
          </p>
          </section>
          <section className={'wrapper'}>
          <h3>Reflections</h3>
          <p>
            Dawn of the Living Horsemasks was a fun project to do and working with Craig Reynolds steering behaviors was a fascinating exercise in viewing how animated characters would behave as if they were alive.
            I was glad to have extra time to also implement the fighting aspect of the game and wish I had even more time to expand on it and make it clearer with nameplates and health bars.
            Designing the scene was also a fun experiment as I tried to make a cohesive city and give it a grim tone.
            It would have been interesting to expand on the city and add tunnels and bridges but for the purposes of the project a smaller city facilitated the display of the required behaviors.
          </p>
        </section>
      </article>
    );
  }
}

export default Horsemasks;
