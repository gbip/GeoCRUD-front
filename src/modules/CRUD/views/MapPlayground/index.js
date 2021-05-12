import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { connectCRUDProvider } from '../../services/CRUDProvider';
import { withTableSize } from '../../services/UserSettingsProvider';
import { connectMapProvider } from '../../services/MapProvider';
import compose from '../../../../utils/compose';

import MapPlayground from './MapPlayground';

export default compose(
  withRouter,
  connectCRUDProvider('errors', 'getSettings', 'settings'),
  connectMapProvider('dataTableRef', 'detailsRef', 'featureToHighlight'),
  withTableSize(),
  withTranslation(),
)(MapPlayground);
