import { type Theme, type ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {}

  interface CustomThemeOptions extends ThemeOptions {}

  export function createTheme(options?: CustomThemeOptions): CustomTheme
}

declare module '@mui/material/styles/createPalette' {
  interface CustomColorOptions {
    white: string
    green: string
    darkGray: string
    gray: string
    mediumGray: string
    lightGray: string
    blue: string
    lightBlue: string
  }

  interface Palette {
    customColor: CustomColorOptions
  }

  interface PaletteOptions {
    customColor?: CustomColorOptions
  }
}
