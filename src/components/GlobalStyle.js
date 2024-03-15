import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`

:root {
  --color-black: #121417;
  --color-white: #FFFFFF;
  --color-pink: #E0A39A;
	--color-light-pink: #f2c0bd;
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;

    background-color: #ffffff;
    /* background-color: lightgrey; */

    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;

    color: var(--color-black);

	/* margin: 0 auto;
  font-size: 12px;
  }

code {
    /* font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace; */
  }

ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
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

img {
    display: block;
    max-width: 100%;
    height: auto;
}

a {
  text-decoration: none;
  color: currentColor;
}


button {
  cursor: pointer;
}

main {
  max-width: 1440px;
  padding: 20px 64px 32px;
}
`;
