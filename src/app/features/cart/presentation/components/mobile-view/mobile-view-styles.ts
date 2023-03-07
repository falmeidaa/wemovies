import { Button } from '@/app/shared/components'
import { styled, Typography } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  background: theme.palette.customColor.white,
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

export const OrderSummaryContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  paddingTop: '1.3125rem',
  borderTop: `1px solid ${theme.palette.customColor.mediumGray}`,

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}))

export const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.customColor.blue,
  width: '100%',
  height: '2.5rem',
  color: theme.palette.customColor.white,

  '&:hover': {
    background: theme.palette.customColor.blue,
    opacity: 0.6
  }
}))

export const TotalTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '0.875rem',
  lineHeight: '136%',
  color: theme.palette.customColor.mediumGray,
  textTransform: 'uppercase'
}))

export const TotalPriceTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.5rem',
  lineHeight: '137.5%',
  color: theme.palette.customColor.gray,
  textAlign: 'center',
  minWidth: '8.25rem'
}))
