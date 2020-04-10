import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { IntlProvider } from 'react-intl';

import { languages } from '~/i18n';
import { store, persistor } from '~/store';
import theme from '~/styles/themes/default';
import GlobalStyles from '~/styles/global';
import Routes from '~/routes';
import TooltipContainer from '~/components/Tooltip';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <IntlProvider locale="pt-BR" messages={languages['pt-BR'].messages}>
            <GlobalStyles />
            <TooltipContainer />
            <Routes />
          </IntlProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
