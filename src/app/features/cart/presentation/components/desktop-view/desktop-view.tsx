import { useFormat, useNavigate } from '@/app/shared/hooks'
import { ROUTE_PATHS } from '@/main/types'

import { useCartHandler } from '../../../hooks'
import { DesktopProductCart } from '../desktop-product-cart/desktop-product-cart'
import {
  DesktopContainer,
  OrderSummaryContainer,
  StyledButton,
  StyledTypography,
  TotalPriceTypography,
  TotalTypography
} from './desktop-view-styles'

export const DesktopView = () => {
  const { differentMovies, total, resetCart } = useCartHandler()
  const { navigate } = useNavigate()
  const { formatBRLCurrency } = useFormat()

  const formattedTotal = formatBRLCurrency(total)

  const handleFinishPurchase = () => {
    resetCart()
    navigate(ROUTE_PATHS.PURCHASE)
  }

  return (
    <DesktopContainer>
      <StyledTypography>Produto</StyledTypography>
      <StyledTypography>Qtd</StyledTypography>
      <StyledTypography isSubTotal>Subtotal</StyledTypography>
      {differentMovies.map(({ quantity, subTotal, ...movie }) => (
        <DesktopProductCart
          key={movie.id}
          movie={movie}
          quantity={quantity}
          subTotal={subTotal}
        />
      ))}
      <OrderSummaryContainer>
        <StyledButton onClick={handleFinishPurchase}>
          Finalizar Pedido
        </StyledButton>
        <div>
          <TotalTypography>Total</TotalTypography>
          <TotalPriceTypography>{formattedTotal}</TotalPriceTypography>
        </div>
      </OrderSummaryContainer>
    </DesktopContainer>
  )
}
