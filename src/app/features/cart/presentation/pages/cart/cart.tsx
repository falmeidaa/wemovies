import { useFormat, useNavigate } from '@/app/shared/hooks'
import { ROUTE_PATHS } from '@/main/types'

import { useCartHandler } from '../../../hooks'
import { EmptyCart, ProductCart } from '../../components'
import {
  Container,
  OrderSummaryContainer,
  StyledButton,
  StyledTypography,
  TotalPriceTypography,
  TotalTypography
} from './cart-styles'

const Cart = () => {
  const { quantity, differentMovies, total, resetCart } = useCartHandler()
  const { navigate } = useNavigate()
  const { formatBRLCurrency } = useFormat()

  const formattedTotal = formatBRLCurrency(total)

  const handleFinishPurchase = () => {
    resetCart()
    navigate(ROUTE_PATHS.PURCHASE)
  }

  if (quantity === 0) {
    return <EmptyCart />
  }

  return (
    <Container>
      <StyledTypography>Produto</StyledTypography>
      <StyledTypography>Qtd</StyledTypography>
      <StyledTypography isSubTotal>Subtotal</StyledTypography>
      {differentMovies.map(({ quantity, subTotal, ...movie }) => (
        <ProductCart
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
    </Container>
  )
}

export default Cart
