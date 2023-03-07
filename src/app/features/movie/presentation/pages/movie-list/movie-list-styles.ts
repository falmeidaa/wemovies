import { styled } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  marginTop: '1.5rem',
  gap: '1rem',
  overflow: 'auto',

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)'
  }
}))
