import { styled } from '@mui/material'

export const Container = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  marginTop: '1.5rem',
  gap: '1rem'
}))
