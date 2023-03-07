import { Button } from '@/app/shared/components'
import { styled, Typography } from '@mui/material'

export const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '64px',
  gap: '32px',
  background: '#FFFFFF',
  borderRadius: '4px'
}))

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '27px',
  color: theme.palette.customColor.background
}))

export const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.customColor.primary,
  color: '#FFFFFF',
  width: '11.75rem',
  height: '2.5rem',

  '&:hover': {
    background: theme.palette.customColor.primary,
    opacity: 0.6
  }
}))
