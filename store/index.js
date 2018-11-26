import Vue from 'vue';
import Vuex from 'vuex';

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
              src: '~/assets/images/poseidon/icon.png',
              description: 'Poseidon Icon',
            },
            thumbnail: {
              src: '~/assets/images/poseidon/poseidon_home.jpg',
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
              src: '~/assets/images/venu/avatar.png',
              description: 'VENU Icon',
            },
            thumbnail: {
              src: '~/assets/images/venu/thumbnail.jpeg',
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
              src: '~/assets/images/trumpcard/public/small/avatar.png',
              description: 'Trump Card Icon',
            },
            thumbnail: {
              src: '~/assets/images/trumpcard/public/large/thumbnail.jpg',
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
              src: '~/assets/images/270/public/small/avatar.png',
              description: '270 Icon',
            },
            thumbnail: {
              src: '~/assets/images/270/public/small/avatar.png',
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
              src: '~/assets/images/tiptap/tiptap_icon.png',
              description: 'TipTap app Icon',
            },
          },
        },
        // Dawn of the Living Horsemasks
        {
          id: 1,
          name: 'Horsemask',
          alias: 'venu',
          description: 'Dawn of the Living Horsemasks',
          tags: ['C#', 'Game Development', 'Unity'],
          assets: {
            icon: {
              src: '~/assets/images/horsemasks/avatar.png',
              description: 'Dawn of the Living Horsemasks Icon',
            },
          },
        },
      ],
      // Useful links
      email: 'ejs3863@rit.edu',
      github: 'https://github.com/esauri',
      linkedIn: 'https://www.linkedin.com/in/erick-sauri-1847357b',
      resume: 'https://firebasestorage.googleapis.com/v0/b/portfolio-7ad56.appspot.com/o/media%2FErick%20Sauri%20Resume.pdf?alt=media&token=2e50cb15-4ddc-4e17-831a-3a4792853010',
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
      }
    },
  });
}

export default store;