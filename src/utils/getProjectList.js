import TrumpCardAvatar from './../assets/img/trumpcard/public/small/avatar.png';
import TwoSevenZeroAvatar from './../assets/img/270/public/small/avatar.png';
import VenuAvatar from './../assets/img/venu/avatar.png';

// Thumbnails
import TwoSevenZeroThumbnail from './../assets/img/270/public/large/thumbnail2.jpg'
import TrumpCardThumbnail from './../assets/img/trumpcard/public/large/thumbnail.jpg';
import VenuThumbnail from './../assets/img/venu/thumbnail.jpeg';

// Main Projects
export default [
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
];