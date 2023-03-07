import { type LayoutOptions } from '../types'
import { LayoutProvider } from './layout-provider'
import { StoreProvider } from './store-provider'
import { ThemeProvider } from './theme-provider'

type Props = {
  layoutOptions?: LayoutOptions
  children?: React.ReactNode
}

export const ProviderComposition = ({ children, layoutOptions }: Props) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <LayoutProvider layoutOptions={layoutOptions}>
          {children}
        </LayoutProvider>
      </ThemeProvider>
    </StoreProvider>
  )
}
