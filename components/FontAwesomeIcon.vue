<script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import {
    faAndroid,
    faApple,
  } from '@fortawesome/free-brands-svg-icons';

  import {
    faChevronRight,
    faFrown,
    faFrownOpen,
    faPencilAlt,
    faSearch,
    faTimes,
  } from '@fortawesome/free-solid-svg-icons';

  library.add(faAndroid, faApple, faSearch);

  export default FontAwesomeIcon;
</script>