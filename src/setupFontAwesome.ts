// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLongArrowAltRight,
  faEnvelope,
  faEnvelopeOpen,
  faUserPlus,
  faExclamationCircle,
  faSpinner,
  faCheckCircle,
  faTimesCircle,
  faTimes,
  faCode,
  faDesktop,
  faChevronLeft,
  faChevronRight,
  faCircle as filledCircle,
  faLightbulb as solidLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLightbulb,
  faNewspaper,
  faCircle as emptyCircle,
} from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function setupFontAwesome() {
    library.add(
        faLongArrowAltRight,
        faEnvelopeOpen,
        faGithub,
        faEnvelope,
        faLinkedin,
        faUserPlus,
        faLightbulb,
        faExclamationCircle,
        faSpinner,
        faCheckCircle,
        faTimesCircle,
        faTimes,
        faCode,
        faDesktop,
        faChevronRight,
        faChevronLeft,
        solidLightbulb,
        faNewspaper,
        filledCircle,
        emptyCircle
      );
}