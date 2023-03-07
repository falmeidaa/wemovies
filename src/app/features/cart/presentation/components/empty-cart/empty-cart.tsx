import { useNavigate } from '@/app/shared/hooks'

import { EmptyCartBackground } from '../empty-cart-background/empty-cart-backgorund'
import { Container, StyledButton, StyledTypography } from './empty-cart-styles'

export const EmptyCart = () => {
  const { refreshPage, backPage } = useNavigate()

  return (
    <Container>
      <StyledTypography>Parece que não há nada por aqui :(</StyledTypography>
      <EmptyCartBackground handleRefresh={refreshPage} />
      <StyledButton onClick={backPage}>Voltar</StyledButton>
    </Container>
  )
}
