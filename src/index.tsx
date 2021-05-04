import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ErrorPage from './pages/404';
import MainPage from './pages/home';
import PokedexPage from './pages/pokedex';
import PokemonPage from './pages/pokemon';
import StorePage from './pages/store';

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
          path="/loja"
          exact
          render={() => {
            const currentTheme = themes.find(
              (theme) => theme.name === sessionStorage.getItem('THEME')
            );

            if (currentTheme) {
              return (
                <ThemeProvider theme={currentTheme}>
                  <StorePage />
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
        <Route
          path="/loja/:page"
          exact
          render={() => {
            const currentTheme = themes.find(
              (theme) => theme.name === sessionStorage.getItem('THEME')
            );

            if (currentTheme) {
              return (
                <ThemeProvider theme={currentTheme}>
                  <StorePage />
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
        <Route
          path="/pokedex"
          exact
          render={() => {
            const currentTheme = sessionStorage.getItem('THEME') || '';

            if (currentTheme) {
              return (
                <ThemeProvider theme={themes.find((theme) => theme.name === currentTheme)}>
                  <PokedexPage />
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
        <Route
          path="/pokemon/:name"
          exact
          render={() => {
            const currentTheme = sessionStorage.getItem('THEME') || '';

            if (currentTheme) {
              return (
                <ThemeProvider theme={themes.find((theme) => theme.name === currentTheme)}>
                  <PokemonPage />
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
