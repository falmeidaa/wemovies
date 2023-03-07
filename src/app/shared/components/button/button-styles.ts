import { Button, styled } from '@mui/material'

export const StyledButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem',
  gap: '0.75rem',
  borderRadius: '0.25rem',
  cursor: 'pointer'
}))
