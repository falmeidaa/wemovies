import { useFormat, useNavigate } from '@/app/shared/hooks'
import { ROUTE_PATHS } from '@/main/types'

import { useCartHandler } from '../../../hooks'
import { MobileProductCart } from '../mobile-product-cart/mobile-product-cart'
import {
  Container,
  OrderSummaryContainer,
  StyledButton,
  TotalPriceTypography,
  TotalTypography
} from './mobile-view-styles'

export const MobileView = () => {
  const { differentMovies, total, resetCart } = useCartHandler()
  const { formatBRLCurrency } = useFormat()
  const { navigate } = useNavigate()

  const formattedTotal = formatBRLCurrency(total)

  const handleFinishPurchase = () => {
    resetCart()
    navigate(ROUTE_PATHS.PURCHASE)
  }

  return (
    <Container>
      <div>
        {differentMovies.map(({ quantity, subTotal, ...movie }) => (
          <MobileProductCart
            key={movie.id}
            quantity={quantity}
            subTotal={subTotal}
            movie={movie}
          />
        ))}
      </div>
      <OrderSummaryContainer>
        <div>
          <TotalTypography>Total</TotalTypography>
          <TotalPriceTypography>{formattedTotal}</TotalPriceTypography>
        </div>
        <StyledButton onClick={handleFinishPurchase}>
          Finalizar Pedido
        </StyledButton>
      </OrderSummaryContainer>
    </Container>
  )
}
