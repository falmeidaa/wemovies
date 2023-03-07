import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

import { ROUTE_PATHS } from '@/main/types'

const Cart = lazy(async () => import('../../presentation/pages/cart/cart'))

export const cartRoutes: RouteObject[] = [
  {
    path: ROUTE_PATHS.CART,
    element: <Cart />
  }
]
