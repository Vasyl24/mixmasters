import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyles = createGlobalStyle`

:root {

  /* Colors */
  --background-color: #0A0A11;
  --accent-color: #161F37;
  --text-btn-color: #F3F3F3;
  --hover-btn-color: #434D67;
  --correct-state-color: #3CBC81;
  --error-state-color: #DA1414;
  --pagination-color: #4070CD;
  
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  color: var(--text-btn-color);
  font-family: 'Manrope', sans-serif;
  background-color: var(--background-color);
  transition: background-color 1s;  
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
  font-family: inherit;
}

input {
  font-family: inherit;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

@media screen and (min-width: 768px) {
  .container {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media screen and (min-width: 1440px) {
  .container {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
}
`;
