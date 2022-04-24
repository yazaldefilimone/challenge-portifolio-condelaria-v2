import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --frist-color: #00d2df;
    --frist-color-alt: #eccb39;
    --color:#9358f1;
    --color-2:#6518B4;
    --dark-color: #121212;
    --dark-color-alt:#151515;
    --second-color: #15181f;
    --gray-color:#c4c4c4;
    --white-color:#E6E7E9;
    --header-height:3rem;

  --body-font: "Inter", Arial, sans-serif;
  --bigest-font-size:2.25rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1rem;
  --normal-font-size: .938rem;
  --small-font-size: .813rem;
  --smaller-font-size: .75rem;

  /*========== Font weight ==========*/
  --font-medium: 500;
  --font-semi-bold: 600;
  --font-bold: 800;

  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
}

@media screen and (min-width: 968px) {
  :root {
    --bigest-font-size:3.25rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
    --smaller-font-size: .813rem;
  }
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--white-color);
}

h1, h2, h3 {
  color: var(--white-color);
  font-weight: var(--font-semi-bold);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}
button{
  cursor:pointer;
}

/*=============== REUSABLE CSS CLASSES ===============*/
.container {
  max-width: 1064px;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin:0 auto;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

.section {
  padding: 4.5rem 0;
}
main {
  overflow: hidden;
}
::-webkit-scrollbar{
  width:.5rem;
  border-radius:.5rem;
  background-color:var(--dark-color);
}
::-webkit-scrollbar-thumb{
  border-radius:.5rem;
  background-color:var(--color);
}
::-webkit-scrollbar-thumb:hover{
  border-radius:.5rem;
  background-color:var(--color-2);
}

`;
