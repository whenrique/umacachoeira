const { createGlobalStyle } = require("styled-components");

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}

body {
  background-color: #000;
  color: #fff;
}
`

export default GlobalStyles