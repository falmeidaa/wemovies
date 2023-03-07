import { styled, Typography } from '@mui/material'

export const ProductInfoContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',

  div: {
    display: 'flex',
    gap: '0.5rem',
    flexDirection: 'column',
    width: '100%',
    marginLeft: '3.25rem'
  },

  img: {
    width: '9.25rem',
    height: '11.75rem',
    objectFit: 'cover'
  }
}))

export const StyledTitleTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '0.875rem',
  lineHeight: '136%',
  color: theme.palette.customColor.gray
}))

export const StyledPriceTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1rem',
  lineHeight: '137.5%',
  color: theme.palette.customColor.gray
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
    color: theme.palette.customColor.gray,
    border: `1px solid ${theme.palette.customColor.lightGray}`,
    borderRadius: '0.25rem'
  }
}))

export const SubtotalContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center'
}))

export const StyledSubtotalTypography = styled(Typography)(({ theme }) => ({
  flex: 1,
  fontWeight: 700,
  fontSize: '0.875rem',
  lineHeight: '136%',
  color: theme.palette.customColor.gray
}))

export const TrashContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  svg: {
    cursor: 'pointer'
  }
}))
