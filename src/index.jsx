import React from 'react';
import ReactDOM from 'react-dom';

import { addLocaleData, IntlProvider } from 'react-intl';

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';

import App from './components/Main';
import flattenMessages from './utils/flattenMessages';

import messages from './messages';

require('core-js/fn/object/assign');

addLocaleData(
  [
    ...en,
    ...es,
    ...fr,
  ],
);

let locale =
  (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage
  || 'en-US';

if (!Object.keys(messages).includes(locale)) {
  locale = Object.keys(messages)[0];
}

// Render the main component into the dom
ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <App />
  </IntlProvider>,
  document.getElementById('app'),
);
