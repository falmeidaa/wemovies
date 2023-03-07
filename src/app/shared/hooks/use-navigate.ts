import {
  type NavigateOptions,
  useNavigate as useNavigateDOM
} from 'react-router-dom'

import { type ROUTE_PATHS } from '@/main/types'

export const useNavigate = () => {
  const navigateDOM = useNavigateDOM()

  const refreshPage = () => {
    navigateDOM(0)
  }

  const backPage = () => {
    navigateDOM(-1)
  }

  const navigate = (route: ROUTE_PATHS, options?: NavigateOptions) => {
    navigateDOM(route, options)
  }

  return {
    navigate,
    refreshPage,
    backPage
  }
}
