import { Button } from '@/app/shared/components'
import { styled, Typography } from '@mui/material'

export const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '4rem',
  gap: '2rem',
  background: '#FFFFFF',
  borderRadius: '0.25rem'
}))

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontweight: 700,
  fontSize: '1.25rem',
  lineHeight: '135%',
  color: theme.palette.customColor.background
}))

export const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.customColor.primary,
  color: '#FFFFFF',
  height: '2.5rem',
  width: '11.25rem',

  '&:hover': {
    background: theme.palette.customColor.primary,
    opacity: 0.6
  }
}))