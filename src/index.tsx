import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import CartPage from './pages/cart';
import ElectricPage from './pages/electric';
import ErrorPage from './pages/404';
import FirePage from './pages/fire';
import MainPage from './pages/home/';
import WaterPage from './pages/water';

import { Svgs } from './components/svgs';

import { ResetStyles } from './styles/reset';
import { themes } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <ResetStyles />
    <Svgs />
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route
          path="/agua"
          exact
          render={() => {
            const currentTheme = themes.find((theme) => theme.name === 'water');
            localStorage.setItem('THEME', currentTheme?.name || '');

            return (
              <ThemeProvider theme={currentTheme}>
                <WaterPage />
              </ThemeProvider>
            );
          }}
        />
        <Route
          path="/eletrico"
          exact
          render={() => {
            const currentTheme = themes.find((theme) => theme.name === 'electric');
            localStorage.setItem('THEME', currentTheme?.name || '');

            return (
              <ThemeProvider theme={currentTheme}>
                <ElectricPage />
              </ThemeProvider>
            );
          }}
        />
        <Route
          path="/fogo"
          exact
          render={() => {
            const currentTheme = themes.find((theme) => theme.name === 'fire');
            localStorage.setItem('THEME', currentTheme?.name || '');

            return (
              <ThemeProvider theme={currentTheme}>
                <FirePage />
              </ThemeProvider>
            );
          }}
        />
        <Route
          path="/carrinho"
          exact
          render={() => {
            const currentTheme = localStorage.getItem('THEME') || '';

            if (currentTheme) {
              return (
                <ThemeProvider theme={themes.find((theme) => theme.name === currentTheme)}>
                  <CartPage />
                </ThemeProvider>
              );
            } else {
              return (
                <Redirect
                  to={{ pathname: '/404', state: { message: 'Classe pokémon não encontrada.' } }}
                />
              );
            }
          }}
        />
        <Route path="/404" exact>
          <ErrorPage />
        </Route>
        <Route
          path="*"
          exact
          render={() => (
            <Redirect to={{ pathname: '/404', state: { message: 'Página não encontrada.' } }} />
          )}
        />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
