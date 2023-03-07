import { styled, Typography } from '@mui/material'

export const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.125rem 0'
}))

export const StyledTypography = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: '1.25rem',
  lineHeight: '135%',
  cursor: 'pointer'
}))

export const CartContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end'
  }
}))

export const CartTitleTypography = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: '0.875rem',
  lineHeight: '135%'
}))

export const CartQuantityTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '0.75rem',
  lineHeight: '133%',
  color: theme.palette.customColor.secondaryTextColor
}))
