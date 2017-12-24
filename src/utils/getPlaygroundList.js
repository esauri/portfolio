// Avatars
import ClickerAvatar from './../assets/img/clickergame/public/small/avatar.jpg';
import HorsemaskAvatar from './../assets/img/horsemasks/avatar.png';

// Thumbnails
import ClickerGameThumbnail from './../assets/img/clickergame/public/large/thumbnail.jpg';

export default [
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
];