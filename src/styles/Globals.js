import { createGlobalStyle } from 'styled-components';

const GlobalsStyles = createGlobalStyle`
:root {
  --light: #fff;
  --dark: #000;

  --primary: #FD841F;
  --secondary: #CD4221;
  --info: #CD104D;
  --warning: #9C2C77;
  --gray: #ececec;
  --gray-100: #ccc;
  --gray-200: #767676;
}

body,
input,
button {
  font: 400 1.3rem "Sora", sans-serif;
  color: var(--dark);
}

a {
  font: 400 1.3rem "Roboto", sans-serif;
}

body {
  width: 100%;
  min-height: 100vh;
  background: var(--light);
}

h1,
h2,
h3 {
  font-family: "Sora", sans-serif;
  font-weight: 700;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.5rem;
}

h3 {
  font-size: 1.5rem;
}


button {
  cursor: pointer;
  border: none;
  background: transparent;
}

strong {
  font-weight: 700;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
}
`;

export default GlobalsStyles;
