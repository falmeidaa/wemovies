import { useCartHandler } from '@/app/features/cart/hooks'
import { ROUTE_PATHS } from '@/main/types'

import { useNavigate } from '../../hooks'
import { BagIcon } from '../icons'
import {
  CartContainer,
  CartQuantityTypography,
  CartTitleTypography,
  Container,
  StyledTypography
} from './header-styles'

export const Header = () => {
  const { quantity } = useCartHandler()
  const { navigate } = useNavigate()

  const addedItens = `${quantity} itens`

  const handleNavigateToHome = () => {
    navigate(ROUTE_PATHS.MOVIE_LIST)
  }

  const handleNavigateToCart = () => {
    navigate(ROUTE_PATHS.CART)
  }

  return (
    <Container>
      <StyledTypography onClick={handleNavigateToHome}>
        WeMovies
      </StyledTypography>
      <CartContainer onClick={handleNavigateToCart}>
        <div>
          <CartTitleTypography>Meu Carrinho</CartTitleTypography>
          <CartQuantityTypography>{addedItens}</CartQuantityTypography>
        </div>
        <BagIcon />
      </CartContainer>
    </Container>
  )
}
