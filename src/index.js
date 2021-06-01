import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './wdyr';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const {
  REACT_APP_SENTRY_DSN,
  REACT_APP_SENTRY_ENVIRONMENT,
  REACT_APP_SENTRY_SAMPLE_RATE,
  REACT_APP_SENTRY_TRACES_SAMPLE_RATE,
  REACT_APP_VERSION,
} = process.env;

if (REACT_APP_SENTRY_DSN !== undefined) {
  (async () => {
    const Sentry = await import('@sentry/react');
    const { Integrations } = await import('@sentry/tracing');
    const { createBrowserHistory } = await import('history');
    const history = createBrowserHistory();
    Sentry.init({
      dsn: REACT_APP_SENTRY_DSN,
      ...(REACT_APP_SENTRY_ENVIRONMENT && { environment: REACT_APP_SENTRY_ENVIRONMENT }),
      ...(REACT_APP_VERSION && { release: `GeoCRUD-front@${REACT_APP_VERSION}` }),
      sampleRate: REACT_APP_SENTRY_SAMPLE_RATE ?? 1,
      tracesSampleRate: REACT_APP_SENTRY_TRACES_SAMPLE_RATE ?? 0.2,
      integrations: [
        new Integrations.BrowserTracing({
          routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),
        }),
      ],
    });
  })();
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
