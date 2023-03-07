import { Button } from '@/app/shared/components'
import { styled, Typography } from '@mui/material'

export const DesktopContainer = styled('div')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'grid',
    background: '#FFFFFF',
    rowGap: '1.3125rem',
    columnGap: '3.25rem',
    gridTemplateColumns: '3fr repeat(3, 1fr)',
    padding: '1.5rem',
    borderRadius: '0.25rem',
    overflow: 'auto'
  }
}))
type StyledTypographyProps = {
  isSubTotal?: boolean
}

export const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isSubTotal'
})<StyledTypographyProps>(({ theme, isSubTotal }) => ({
  fontWeight: 700,
  fontSize: '0.875rem',
  lineHeight: '136%',
  color: theme.palette.customColor.secondaryTextColor,
  textTransform: 'uppercase',

  ...(isSubTotal && {
    gridColumn: '3 / 5'
  })
}))

export const OrderSummaryContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  borderTop: '1px solid #999999',
  gridColumn: '1/5',
  paddingTop: '1.3125rem',

  '& > div': {
    width: '12.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  }
}))

export const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.customColor.primary,
  padding: '0.75rem 2rem',
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
  flex: 1,
  textAlign: 'center'
}))
