import { Button } from '@/app/shared/components'
import { styled, Typography } from '@mui/material'

export const DesktopContainer = styled('div')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'grid',
    background: theme.palette.customColor.white,
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
  color: theme.palette.customColor.mediumGray,
  textTransform: 'uppercase',

  ...(isSubTotal && {
    gridColumn: '3 / 5'
  })
}))

export const OrderSummaryContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  borderTop: `1px solid ${theme.palette.customColor.mediumGray}`,
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
  background: theme.palette.customColor.blue,
  padding: '0.75rem 2rem',
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
  flex: 1,
  textAlign: 'center'
}))
