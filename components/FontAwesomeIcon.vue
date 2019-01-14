<script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import {
    faAndroid,
    faApple,
    faGithub,
    faLinkedinIn,
  } from '@fortawesome/free-brands-svg-icons';

  import {
    faAngleRight,
    faEnvelope,
  } from '@fortawesome/free-solid-svg-icons';

  library.add(faAndroid, faAngleRight, faApple, faEnvelope, faGithub, faLinkedinIn);

  export default FontAwesomeIcon;
</script>