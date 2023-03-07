import { createTheme } from '@mui/material'

const customColor = {
  background: '#2F2E41',
  primary: '#009EDD',
  textColor: '#FFFFFF',
  secondaryTextColor: '#999999',
  success: '#039B00'
}

export const theme = createTheme({
  palette: {
    customColor
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          font-family: "Open Sans", sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          color: ${customColor.textColor}
        }
        *::-webkit-scrollbar {
          width: 6px;
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
          background: ${customColor.background}
        }
        a {
          text-decoration: none;
        }
      `
    }
  }
})
