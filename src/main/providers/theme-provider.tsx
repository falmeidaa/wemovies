import { Suspense } from 'react'

import { theme } from '@/main/config'
import { CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material'

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense>{children}</Suspense>
    </MUIThemeProvider>
  )
}
