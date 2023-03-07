import { styled, Typography } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: 'fit-content',

  img: {
    height: '5.125rem',
    width: '4rem',
    objectFit: 'cover'
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '1rem',
    gap: '1rem',
    width: '100%'
  }
}))

export const ProductInfoContainer = styled('div')(() => ({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',

  svg: {
    cursor: 'pointer',
    width: '1rem',
    height: '1rem'
  }
}))

export const CartInfoContainer = styled('div')(() => ({
  display: 'flex',
  gap: '1rem'
}))

export const QuantityContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  svg: {
    cursor: 'pointer'
  },

  p: {
    flex: 1,
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '136%',
    padding: '0.25rem 1rem',
    textAlign: 'center',
    color: theme.palette.customColor.background,
    border: '1px solid #D9D9D9',
    borderRadius: '0.25rem',
    minWidth: '3.75rem'
  }
}))

export const SubtotalContainer = styled('div')(() => ({}))

export const StyledSubtotalTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '0.75rem',
  lineHeight: '133%',
  color: theme.palette.customColor.secondaryTextColor,
  textTransform: 'uppercase'
}))

export const StyledTitleTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '0.875rem',
  lineHeight: '136%',
  color: theme.palette.customColor.background,
  minWidth: '7.5rem'
}))

export const StyledPriceTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1rem',
  lineHeight: '137.5%',
  color: theme.palette.customColor.background,
  minWidth: '4.125rem'
}))
