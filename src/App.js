import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@terralego/core/modules/Api';
import AuthProvider from '@terralego/core/modules/Auth';

import './config/i18n';
import AppProvider from './components/AppProvider';
import Main from './views/Main';

import 'normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';

const { PUBLIC_URL } = process.env;

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <ApiProvider host="/api">
      <AppProvider>
        <AuthProvider>
          <Main />
        </AuthProvider>
      </AppProvider>
    </ApiProvider>
  </BrowserRouter>
);

export default App;
