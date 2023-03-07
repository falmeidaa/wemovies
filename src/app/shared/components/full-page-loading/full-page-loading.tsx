import { CircularProgress } from '@mui/material'

import { Container } from './full-page-loading-styles'

export const FullPageLoading = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  )
}
