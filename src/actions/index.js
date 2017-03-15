import * as tourActions  from './tourActions';

import * as featureActions from './featureActions';
import * as colorActions from './colorActions';


const actions = {
  ...tourActions, ...featureActions, ...colorActions
}
export default actions;