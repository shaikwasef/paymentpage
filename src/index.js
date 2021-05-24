import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {allReducers} from './reducers/index'
import { ThemeProvider , StylesProvider } from '@material-ui/core/styles';
import './globals/globalVariables'
import theme from './theme';

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
      <App />
      </StylesProvider>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

