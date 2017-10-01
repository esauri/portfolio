import {
  TOGGLE_MOBILE,
  TOGGLE_DARK_THEME,
  TOGGLE_POPUP_MENU,
  TOGGLE_DROPDOWN_MENU,
  TOGGLE_BACK_TO_TOP_BUTTON,
} from './../constants';

// Assets
// Avatars
import ClickerAvatar from './../assets/img/clickergame/public/small/avatar.jpg';
import TrumpCardAvatar from './../assets/img/trumpcard/public/small/avatar.png';
import TwoSevenZeroAvatar from './../assets/img/270/public/small/avatar.png';
import HorsemaskAvatar from './../assets/img/horsemasks/avatar.png';
import VenuAvatar from './../assets/img/venu/avatar.png';

// Thumbnails
import TwoSevenZeroThumbnail from './../assets/img/270/public/large/thumbnail2.jpg'
import TrumpCardThumbnail from './../assets/img/trumpcard/public/large/thumbnail.jpg';
import ClickerGameThumbnail from './../assets/img/clickergame/public/large/thumbnail.jpg';
import VenuThumbnail from './../assets/img/venu/thumbnail.jpeg';

// Create intial app state
const initialState = {
  mobile: true,
  theme: true,
  backToTop: false,
  showDropdown: false,
  mobileNavOpen: false,

  // Main Projects
  projects: [
    {
      id: 0,
      name: 'VENU',
      link: '/venu',
      desc: 'Wayfinding for Imagine RIT',
      tags: ['Progressive Web App Development', 'React'],
      avatar: {
        src: VenuAvatar,
        desc: 'Venu Avatar',
      },
      thumbnail: {
        src: VenuThumbnail,
        desc: 'Venu Thumbnail',
      },
      style: {
        invert: true,
        gutter: '100',
      },
    },
    {
      id: 1,
      name: 'Trump Card',
      link: '/trumpcard',
      desc: 'Make America Great Again?',
      tags: ['Mobile Development', 'Swift'],
      avatar: {
        src: TrumpCardAvatar,
        desc: 'Trump Card Avatar',
      },
      thumbnail: {
        src: TrumpCardThumbnail,
        desc: 'Trump Card Thumbnail',
      },
      style: {
        invert: true,
        gutter: '50',
      },
    },
    {
      id: 2,
      name: '270',
      link: '/twosevenzero',
      desc: 'Race to the White House',
      tags: ['AngularJS', 'Ionic', 'Mobile Development'],
      avatar: {
        src: TwoSevenZeroAvatar,
        desc: '270 Avatar',
      },
      thumbnail: {
        src: TwoSevenZeroThumbnail,
        desc: '270 Thumbnail',
      },
      style: {
        invert: true,
        gutter: '50',
      },
    },
  ],

  // Playground Projects
  playground: [
    {
      id: 0,
      name: 'Horsemask',
      link: '/horsemask',
      desc: 'Dawn of the Living Horsemasks',
      tags: ['C#', 'Game Development', 'Unity'],
      avatar: {
        src: HorsemaskAvatar,
        desc: 'Dawn of the Living Horsemasks Avatar',
      },
    },
    {
      id: 1,
      name: 'Clicker Game',
      link: '/clickergame',
      desc: 'Save Bob!',
      tags: ['Canvas', 'Game Development', 'Javascipt'],
      avatar: {
        src: ClickerAvatar,
        desc: 'Clicker Game Avatar',
      },
      thumbnail: {
        src: ClickerGameThumbnail,
        desc: 'Clicker Game Thumbnail',
      },
      style: {
        invert: true,
        gutter: '50',
      },
    },
  ],
};

/**
 * globalReducer - Global reducer for redux store
 *
 * @param {Object} state
 * @param {Object} action
 */
function globalReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MOBILE:
      return { ...state, mobile: action.payload };
    case TOGGLE_BACK_TO_TOP_BUTTON:
      return { ...state, backToTop: action.payload };
    case TOGGLE_DARK_THEME:
      return { ...state, theme: action.payload };
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
