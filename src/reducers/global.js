import {
  TOGGLE_MOBILE,
  TOGGLE_POPUP_MENU,
  TOGGLE_DROPDOWN_MENU,
} from './../constants';

// Assets
import AudioVisThumbnail from './../assets/img/audiovisualizer/public/small/thumbnail.jpg';
import ClickerThumbnail from './../assets/img/clickergame/public/small/thumbnail.jpg';
import TrumpCardThumbnail from './../assets/img/trumpcard/public/small/thumbnail.jpg';
import TwoSevenZeroThumbnail from './../assets/img/270/public/small/thumbnail.jpg';

// Create intial app state
const initialState = {
  mobile: true,
  showDropdown: false,
  mobileNavOpen: false,

  // Main Projects
  projects: [
    {
      id: 0,
      name: '270',
      link: '/twosevenzero',
      desc: 'Race to the White House',
      tags: ['AngularJS', 'Ionic', 'Mobile Development'],
      thumbnail: {
        src: TwoSevenZeroThumbnail,
        desc: '270 Thumbnail',
      },
    },
    {
      id: 1,
      name: 'Trump Card',
      link: '/trumpcard',
      desc: 'Make America Great Again',
      tags: ['Mobile Development', 'Swift'],
      thumbnail: {
        src: TrumpCardThumbnail,
        desc: 'Trump Card Thumbnail',
      },
    },
  ],

  // Playground Projects
  playground: [
    {
      id: 0,
      name: 'Clicker Game',
      link: '/clickergame',
      desc: 'Save Bob!',
      tags: ['Canvas', 'Game Development', 'Javascipt'],
      thumbnail: {
        src: ClickerThumbnail,
        desc: 'Clicker Game Thumbnail',
      },
    },
    {
      id: 1,
      name: 'Audio Visualizer',
      link: '/audiovisualizer',
      desc: '',
      tags: ['Canvas', 'Javascript', 'Web App Development', 'Web Audio'],
      thumbnail: {
        src: AudioVisThumbnail,
        desc: 'Audio Visualizer Thumbnail',
      },
    },
    {
      id: 2,
      name: 'Horsemasks',
      link: '/horsemask',
      desc: 'Dawn of the Living Horsemasks',
      tags: ['C#', 'Game Development', 'Unity'],
      thumbnail: {
        src: AudioVisThumbnail,
        desc: 'Dawn of the Living Horsemasks Thumbnail',
      },
    },
  ],
};

/**
 * globalReducer - Global reducer for redux store
 * @param {Object} state
 * @param {Object} action
 */
function globalReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MOBILE:
      return { ...state, mobile: action.payload };
    case TOGGLE_POPUP_MENU:
      return { ...state, mobileNavOpen: action.payload };
    case TOGGLE_DROPDOWN_MENU:
      return { ...state, showDropdown: action.payload };
    default:
      return state;
  }
}

// Export reducer
export default globalReducer;
