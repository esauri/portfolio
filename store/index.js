import Vue from 'vue';
import Vuex from 'vuex';
import Zooming from 'zooming';

// Assets
import PoseidonIcon from '~/assets/images/poseidon/icon.png';
import PoseidonThumbnail from '~/assets/images/poseidon/poseidon_home.jpg';
import VenuIcon from '~/assets/images/venu/avatar.png';
import VenuThumbnail from '~/assets/images/venu/thumbnail.jpeg';
import TrumpIcon from '~/assets/images/trumpcard/public/small/avatar.png';
import TrumpThumbnail from '~/assets/images/trumpcard/public/large/thumbnail.jpg';
import TwoSevenZeroIcon from '~/assets/images/270/public/small/avatar.png';
import TwoSevenZeroThumbnail from '~/assets/images/270/public/small/avatar.png';
import TipTapIcon from '~/assets/images/tiptap/tiptap_icon.png';
import HorsemaskIcon from '~/assets/images/horsemasks/avatar.png';

// Tell Vue we want to use Vuex!
Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    state: () => ({
      // Projects
      projects: [
        // Poseidon
        {
          id: 0,
          name: 'Poseidon Live',
          alias: 'poseidon',
          description: 'Asset health monitoring',
          tags: ['Progressive Web App Development', 'Angular 5', 'Ionic'],
          assets: {
            icon: {
              src: PoseidonIcon,
              description: 'Poseidon Icon',
            },
            thumbnail: {
              src: PoseidonThumbnail,
              description: 'Poseidon Thumbnail',
            },
          },
        },
        // VENU
        {
          id: 1,
          name: 'VENU',
          alias: 'venu',
          description: 'Wayfinding for Imagine RIT',
          tags: ['Firebase', 'Progressive Web App Development', 'React'],
          assets: {
            icon: {
              src: VenuIcon,
              description: 'VENU Icon',
            },
            thumbnail: {
              src: VenuThumbnail,
              description: 'VENU Thumbnail',
            },
          },
        },
        // Trump Card
        {
          id: 2,
          name: 'Trump Card',
          alias: '/trumpcard',
          description: 'Make America Great Again?',
          tags: ['Mobile Development', 'Swift'],
          assets: {
            icon: {
              src: TrumpIcon,
              description: 'Trump Card Icon',
            },
            thumbnail: {
              src: TrumpThumbnail,
              description: 'Trump Card Thumbnail',
            },
          },
        },
        // 270
        {
          id: 3,
          name: '270',
          alias: 'twosevenzero',
          description: 'Race to the White House',
          tags: ['AngularJS', 'Ionic', 'Mobile Development'],
          assets: {
            icon: {
              src: TwoSevenZeroIcon,
              description: '270 Icon',
            },
            thumbnail: {
              src: TwoSevenZeroThumbnail,
              description: '270 Thumbnail',
            },
          },
        },
      ],
      // Playground
      playground: [
        // TipTap
        {
          id: 0,
          name: 'TipTap',
          alias: 'tiptap',
          description: 'Tipping made easy!',
          tags: ['React', 'React Native', 'Javascript', 'Mobile App Dev'],
          assets: {
            icon: {
              src: TipTapIcon,
              description: 'TipTap app Icon',
            },
          },
        },
        // Dawn of the Living Horsemasks
        {
          id: 1,
          name: 'Horsemask',
          alias: 'horsemask',
          description: 'Dawn of the Living Horsemasks',
          tags: ['C#', 'Game Development', 'Unity'],
          assets: {
            icon: {
              src: HorsemaskIcon,
              description: 'Dawn of the Living Horsemasks Icon',
            },
          },
        },
      ],
      // Useful links
      email: 'ericksaurisyl@gmail.com',
      github: 'https://github.com/esauri',
      linkedIn: 'https://www.linkedin.com/in/erick-sauri-1847357b',
      resume: 'https://firebasestorage.googleapis.com/v0/b/portfolio-7ad56.appspot.com/o/media%2FErick%20Sauri%20Resume.pdf?alt=media&token=9e8a8332-65fd-4982-a82d-fbe4eff862c5',
      // Zooming
      zooming: new Zooming({
        // options...
        bgColor: '#020202',
      }),
    }),
    getters: {
      projectList({ projects }) {
        return projects;
      },
      playgroundList({ playground }) {
        return playground;
      },
      socialMediaUrls({ email, github, linkedIn, resume }) {
        return {
          email,
          github,
          linkedIn,
          resume,
        };
      },
      zooming({ zooming }) {
        return zooming;
      },
    },
  });
}

export default store;