import React from 'react';
import ReactDOM from 'react-dom';

// Required for i8in setup
import { addLocaleData, IntlProvider } from 'react-intl';
import id from 'react-intl/locale-data/id';
import en from 'react-intl/locale-data/en';
import localeData from './translations';

// Required for Log Sentry setup
import * as Sentry from '@sentry/browser';

// Required for Redux store setup
import { Provider } from 'react-redux';
import configureStore from './store';

// Required for router setup
import AppRouter from 'routers';

// Setup global style
import './sass/main.scss';

import * as serviceWorker from './serviceWorker';

// Setup Log Sentry
Sentry.init({
	dsn: process.env.SENTRY_DSN
});

//-> Setup i8in setup
addLocaleData([ ...id, ...en ]);
let locale = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || 'id';
// Split locales with a region code
const languageWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0];
const messages = localeData[languageWithoutRegionCode] || localeData[locale] || localeData.id;
//<- Setup i8in setup

ReactDOM.render(
	<Provider store={configureStore()}>
		<IntlProvider locale={locale} messages={messages}>
			<AppRouter />
		</IntlProvider>
	</Provider>,
	document.getElementById('root')
);

// Register service worker for PWA
serviceWorker.register();
