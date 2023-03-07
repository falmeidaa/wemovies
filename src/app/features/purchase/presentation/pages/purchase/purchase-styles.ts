import { Button } from '@/app/shared/components'
import { styled, Typography } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '4rem',
  gap: '2rem',
  background: theme.palette.customColor.white,
  borderRadius: '0.25rem',
  margin: '0 0.125rem',

  [theme.breakpoints.up('md')]: {
    margin: 0
  }
}))

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.25rem',
  lineHeight: '135%',
  color: theme.palette.customColor.gray
}))

export const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.customColor.blue,
  color: theme.palette.customColor.white,
  height: '2.5rem',
  width: '11.25rem',

  '&:hover': {
    background: theme.palette.customColor.blue,
    opacity: 0.6
  }
}))
