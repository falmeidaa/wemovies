import { Button } from '@/app/shared/components'
import { styled, Typography } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  background: '#FFFFFF',
  borderRadius: '0.25rem',
  gap: '1.325rem',
  padding: '1rem',
  overflow: 'auto',

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.325rem'
  },

  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}))

export const OrderSummaryContainer = styled('div')(() => ({
  display: 'flex',
  width: '100%',
  paddingTop: '1.3125rem',
  borderTop: '1px solid #999999',

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}))

export const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.customColor.primary,
  width: '100%',
  height: '2.5rem',
  color: '#FFFFFF',

  '&:hover': {
    background: theme.palette.customColor.primary,
    opacity: 0.6
  }
}))

export const TotalTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '0.875rem',
  lineHeight: '136%',
  color: theme.palette.customColor.secondaryTextColor,
  textTransform: 'uppercase'
}))

export const TotalPriceTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.5rem',
  lineHeight: '137.5%',
  color: theme.palette.customColor.background,
  textAlign: 'center',
  minWidth: '8.25rem'
}))
