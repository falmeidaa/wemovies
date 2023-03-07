import { createTheme } from '@mui/material'

const customColor = {
  white: '#FFFFFF',
  green: '#039B00',
  darkGray: '#333333',
  gray: '#2F2E41',
  mediumGray: '#999999',
  lightGray: '#D9D9D9',
  blue: '#009EDD',
  lightBlue: '#009EDD'
}

export const theme = createTheme({
  palette: {
    customColor
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          font-family: "Open Sans", sans-serif !important;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          color: ${customColor.white}
        }
        *::-webkit-scrollbar-thumb {
          border-radius: 8px;
          background-clip: padding-box;
        }
        body {
          height: 100vh;
          width: 100vw;
        }
        #root {
          position: relative;
          height: 100%;
          overflow: hidden;
          background: ${customColor.gray}
        }
        a {
          text-decoration: none;
        }
      `
    }
  }
})
