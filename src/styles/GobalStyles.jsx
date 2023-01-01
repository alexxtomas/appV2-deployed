import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  max-width: 100vw;
  color: ${({ theme }) => theme.colors.main.text};
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.main.background};
  ${'' /* font-family: ${({ theme }) => theme.fontFamily.inter}; */}
}
a {
  text-decoration: none;
}

input[type="time"]::-webkit-calendar-picker-indicator{
  filter: ${({ theme }) => theme.colors.calendarPicker}
}

.favorites {
  fill: red;
}



`
export default GlobalStyles
