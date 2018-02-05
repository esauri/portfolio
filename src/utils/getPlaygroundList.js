// Avatars
import AudioAvatar from './../assets/img/audiovisualizer/public/small/avatar.jpg';
import ClickerAvatar from './../assets/img/clickergame/public/small/avatar.jpg';
import HorsemaskAvatar from './../assets/img/horsemasks/avatar.png';

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
  },
  {
    id: 2,
    name: 'Audio Visualizer',
    link: '/audiovisualizer',
    desc: '',
    tags: ['Canvas', 'Web Audio APi', 'Javascipt'],
    avatar: {
      src: AudioAvatar,
      desc: 'Audio Visualizer Avatar',
    },
  },
];