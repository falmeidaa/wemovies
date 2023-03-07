import {
  BrowserRouter,
  createRoutesFromElements,
  Route,
  useRoutes
} from 'react-router-dom'

import { cartRoutes } from '@/app/features/cart/main/router'
import { movieRoutes } from '@/app/features/movie/main/router'
import { purchaseRoutes } from '@/app/features/purchase/main/router'

import { ProviderComposition } from '../providers'

const APP_ROUTES = [...movieRoutes, ...cartRoutes, ...purchaseRoutes]

const RouteElements = () => {
  const routes = createRoutesFromElements(
    APP_ROUTES.map(({ layout, element, ...props }, index) => (
      <Route
        key={index}
        index={props?.index}
        action={props?.action}
        caseSensitive={props?.caseSensitive}
        errorElement={props?.errorElement}
        handle={props?.handle}
        hasErrorBoundary={props?.hasErrorBoundary}
        id={props?.id}
        loader={props?.loader}
        path={props?.path}
        shouldRevalidate={props?.shouldRevalidate}
        element={
          <ProviderComposition layoutOptions={layout}>
            {element}
          </ProviderComposition>
        }
      />
    ))
  )

  const elements = useRoutes(routes)

  return elements
}

export const Router = () => {
  return (
    <BrowserRouter>
      <RouteElements />
    </BrowserRouter>
  )
}
