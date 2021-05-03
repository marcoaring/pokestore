import { createGlobalStyle } from 'styled-components';

export const ResetStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *:active,
  *:focus {
    outline: none;
  }

  article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {
    display: block;
  }

  audio, canvas, progress, video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  body {
    background-color: #e1e1e1;
    font-family: 'Roboto', sans-serif;
  }

  progress {
    vertical-align: baseline;
  }

  template, [hidden] {
    display: none;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  a:active, a:hover {
    outline-width: 0;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  dfn {
    font-style: italic;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }

  small {
    font-size: 80%;
  }

  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -.25em;
  }

  sup {
    top: -.5em;
  }

  img, fieldset {
    border: 0;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  code, kbd, pre, samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    display: none;
  }

  button, input, select, textarea {
    font: inherit;
  }

  optgroup {
    font-weight: bold;
  }

  button, input {
    overflow: visible;
  }

  button, select {
    text-transform: none;
  }

  button, html [type='button'], [type='reset'], [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner {
    border-style: none;
  }

  button:-moz-focusring, [type='button']:-moz-focusring, [type='reset']:-moz-focusring, [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  legend {
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal;
  }

  textarea {
    overflow: auto;
  }

  label {
    display: block;
  }

  [type='number']::-webkit-inner-spin-button, [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-cancel-button, [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: .54;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px #fff inset;
    -webkit-text-fill-color: initial;
  }
`;
