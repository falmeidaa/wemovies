import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

import { ROUTE_PATHS } from '@/main/types'

const Purchase = lazy(
  async () => import('../../presentation/pages/purchase/purchase')
)

export const purchaseRoutes: RouteObject[] = [
  {
    path: ROUTE_PATHS.PURCHASE,
    element: <Purchase />
  }
]
