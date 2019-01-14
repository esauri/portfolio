<template>
  <article>
    <!-- Hero Banner -->
    <section class='banner banner-horsemask mb-8'>
      <span class='banner-chevron-down'></span>
    </section>
    <!-- Introduction -->
    <section class='container py-4'>
      <ul class='flex flex-wrap list-reset'>
        <li class='font-bold rounded-full text-blue text-grey text-sm uppercase'>
          C# &middot; Unity 3D
        </li>
      </ul>
      <h1>Dawn of the Living Horsemasks</h1>
      <section class='my-6'>
        <h3>Apocalypse now</h3>
        <p>
          A terrible catastrophe has befallen the Earth.
          Apocalypse has begun and hordes of Horsemasked creatures have risen and overrun the city.
          Military troops have been deployed but no word has been heard since.
          Satellite has captured footage of a single Panzer making rounds around the city park.
        </p>
      </section>
      <section class='my-6'>
        <h3>Goal</h3>
        <p>
          Dawn of the Living Horsemasks was a project where we would need to implement various steering behaviors of autonomous agents.
          In Horsemasks I implemented Wander, Seeking, Flocking, Arrival, Obstacle Avoidance and simple Path following.
          As an added bonus I decided to also add in a playable character that the user may move around the city with and is even able to attack the Horsemasks.
        </p>
      </section>
    </section>
    <!-- Gameplay -->
    <section class='container py-4'>
      <h2>Gameplay</h2>
      <!-- Player -->
      <section class='flex flex-col items-center md:flex-row my-6'>
        <figure class='w-full md:w-1/4'>
          <Pic
            lazy
            zoomable
            :src='images.playerThumbnail'
            :data-original='images.player'
            data-zooming-width='337'
            data-zooming-height='890'
            alt='Player character'
            class='block md:mr-auto'
          />
          <figcaption class='mt-2 text-center text-grey-dark text-sm'>
            Fearless heroine
          </figcaption>
        </figure>
        <section class='w-full md:w-3/4'>
          <h3>Player</h3>
          <p>
            The player character appears in the city park surrounded by wandering Horsemasks.
            If they get within certain range of her, they will follow her.
            To escape she is able to move around using a <strong>Point and Click</strong> system similar to to other ortographic games like Diablo.
            Alternatively, she can punch horsemasks in the face with her magical fist by hovering over them and pressing the <strong>Spacebar</strong>.
          </p>
        </section>
      </section>
      <!-- Horsemask -->
      <section class='flex flex-col items-center md:flex-row-reverse my-6'>
        <figure class='w-full md:w-1/4'>
          <Pic
            lazy
            zoomable
            :src='images.horsemaskThumbnail'
            :data-original='images.horsemask'
            data-zooming-width='392'
            data-zooming-height='861'
            alt='Horsemask'
            class='block md:ml-auto'
          />
          <figcaption class='mt-2 text-center text-grey-dark text-sm'>
            Horsemask
          </figcaption>
        </figure>
        <section class='w-full md:w-3/4'>
          <h3>Living Horsemask</h3>
          <p>
            The living horsemasks appear in random locations around the city.
            They wander through the streets avoiding any obstacles in the way.
            When in close range to the player they begin chasing her.
            If the player manages to get away they will stop searching and wander once again.
            The horsemasks will flock if there are several of them following the player.
          </p>
        </section>
      </section>
      <!-- Tank -->
      <section class='flex flex-col items-center md:flex-row my-6'>
        <figure class='w-full md:w-1/4'>
          <Pic
            lazy
            zoomable
            :src='images.panzerThumbnail'
            :data-original='images.panzer'
            data-zooming-width='617'
            data-zooming-height='359.672'
            alt='Panzer tank'
            class='block md:mr-auto'
          />
          <figcaption class='mt-2 text-center text-grey-dark text-sm'>
            Panzer
          </figcaption>
        </figure>
        <section class='w-full md:w-3/4'>
          <h3>Tank</h3>
          <p>
            Patrolling the city lies a single tank.
            It moves along the street never stopping for anything.
            Due to the fact that it doesn't engage in combat with the Horsmasks, some wonder if the people within the tank are alive, or even human.
          </p>
        </section>
      </section>
    </section>
    <!-- Project Timeline -->
    <section class='container py-4'>
      <h2>Project Timeline</h2>
      <!-- Ideation & Planning -->
      <section class='my-6'>
        <h3>🤔 Ideation &amp; Planning</h3>
        <p>
          First phase of the project was coming up with the initial plan that encompassed the steering behaviors and how they react to other agents and respond to objects in the environment, flocking, and character motivations.
          I decided on making a controllable character and the horsemasks which would want to follow the character if they were in range.
          If not then they would simply wander around. I would also implement a tank and some soldiers which would move around the city using path following.
          If the soldiers came in range with a horsemask then they would pursue and eliminate it.
        </p>
      </section>
      <!-- Functional Prototype -->
      <section class='my-6'>
        <h3>🤖 Functional Prototype</h3>
        <p>
          For this phase we would need the basic steering behaviors working.
          I made the horsemasks all agents which would seek the moving player's current velocity.
          I also created a rough map so that I could randomly place objects and test obstacle avoidance as well as implement path following.
          The wander method was partially implemented.
        </p>
      </section>
      <!-- Delivery -->
      <section class='my-6'>
        <h3>🚚 Delivery</h3>
        <p>
          On the previous rough map I worked to finish wander and make sure all the other steering behaviors worked as intended and then I preceded to do a new map on work on level design.
          I made a draft of how I wanted the city to look, the park with its benches, dumpsters, trees and vending machines as well as the small graveyard north of it.
          I created the new path the tank would follow with roads. Finally, I implemented the combat and "eliminating" the horsemask by translating it somewhere else.
        </p>
      </section>
      <!-- Assets -->
      <section class='my-6'>
        <h3>📦 Assets</h3>
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
    </section>
    <!-- Parting Thoughts -->
    <section class='container py-4'>
      <h2>Parting Thoughts</h2>
      <section class='my-6'>
        <p>
          Dawn of the Living Horsemasks was a fun project to do and working with Craig Reynolds's steering behaviors was a fascinating exercise in viewing how animated characters would behave as if they were alive.
          I was glad to have extra time to also implement the fighting aspect of the game and wish I had even more time to expand on it and make it clearer with nameplates and health bars.
          Designing the scene was also a fun experiment as I tried to make a cohesive city and give it a grim tone.
          It would have been interesting to expand on the city and add tunnels and bridges but for the purposes of the project a smaller city facilitated the display of the required behaviors.
        </p>
      </section>
    </section>
  </article>
</template>

<style scoped>
  .banner-horsemask {
    background-image: url('~assets/images/horsemasks/dawnofthelivinghorsemasks.png');
  }
</style>

<script>
  import PlayerImage from '~/assets/images/horsemasks/player.png';
  import PanzerImage from '~/assets/images/horsemasks/panzer.png';
  import HorsemaskImage from '~/assets/images/horsemasks/horsemask.png';
  import PlayerThumnbnail from '~/assets/images/horsemasks/playerthumbnail.png';
  import PanzerThumnbnail from '~/assets/images/horsemasks/panzerthumbnail.png';
  import HorsemaskThumnbnail from '~/assets/images/horsemasks/horsemaskthumbnail.png';
  import Pic from '~/components/Pic.vue';

  export default {
    components: {
      Pic,
    },
    computed: {
      images() {
        return {
          panzer: PanzerImage,
          player: PlayerImage,
          horsemask: HorsemaskImage,
          panzerThumbnail: PanzerThumnbnail,
          playerThumbnail: PlayerThumnbnail,
          horsemaskThumbnail: HorsemaskThumnbnail,
        };
      }
    },
    head() {
      return {
        title: 'Erick Sauri – Dawn of the Living Horsemasks',
      }
    },
  }
</script>
