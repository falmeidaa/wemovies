import { useNavigate } from '@/app/shared/hooks'
import { ROUTE_PATHS } from '@/main/types'

import { PurchaseBackground } from '../../components'
import { Container, StyledButton, StyledTypography } from './purchase-styles'

const Purchase = () => {
  const { navigate } = useNavigate()

  const handleNavigate = () => {
    navigate(ROUTE_PATHS.MOVIE_LIST)
  }

  return (
    <Container>
      <StyledTypography>Compra realizada com sucesso!</StyledTypography>
      <PurchaseBackground />
      <StyledButton onClick={handleNavigate}>Voltar</StyledButton>
    </Container>
  )
}

export default Purchase
