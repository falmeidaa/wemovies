import { styled } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  maxWidth: '60rem',
  margin: '0 auto',
  padding: '1.125rem 0.625rem'
}))
