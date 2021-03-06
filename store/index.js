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
import TwoSevenZeroThumbnail from '~/assets/images/270/public/small/thumbnail2.jpg';
import TipTapIcon from '~/assets/images/tiptap/tiptap_icon.png';
import HorsemaskIcon from '~/assets/images/horsemasks/avatar.png';
import PatchIcon from '~/assets/images/patch/patch-icon.png';
import QuickpostThumbnail from '~/assets/images/patch/qp_thumbnail.jpg';

// Tell Vue we want to use Vuex!
Vue.use(Vuex);

// Get visitor's last selected theme from local storage, otherwise default to light theme
const defaultTheme = localStorage.getItem('ERICKSAURI/THEME') || 'light';

const store = () => {
  return new Vuex.Store({
    state: () => ({
      // Theme
      theme: defaultTheme,
      // Projects
      projects: [
        // Quickpost
        {
          id: 0,
          name: 'Quickpost',
          alias: 'quickpost',
          description: 'What\'s happening nearby?',
          tags: [
            'Drupal 7',
            'PHP',
            'Vue',
          ],
          assets: {
            icon: {
              src: PatchIcon,
              description: 'Patch Icon',
            },
            thumbnail: {
              src: QuickpostThumbnail,
              description: 'Quickpost thumbnail',
            },
          },
        },
        // Poseidon
        {
          id: 1,
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
          id: 2,
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
          id: 3,
          name: 'Trump Card',
          alias: 'trumpcard',
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
          id: 4,
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
      theme({ theme }) {
        return theme;
      },
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
    mutations: {
      /**
       * Sets the theme
       *
       * @param state
       * @param theme
       */
      SET_THEME(state, theme) {
        state.theme = theme;
      },
    },
  });
}

export default store;