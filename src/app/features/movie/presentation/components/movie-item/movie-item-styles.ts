import { Button } from '@/app/shared/components'
import { styled, Typography } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px 11px',
  gap: '0.5rem',
  background: theme.palette.customColor.white,
  borderRadius: '4px',

  img: {
    height: '11.75rem',
    width: 'auto'
  },

  [theme.breakpoints.up('md')]: {
    height: '19rem'
  }
}))

export const InfoContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.125rem'
}))

export const TitleTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '0.75rem',
  lineHeight: '133%',
  color: theme.palette.customColor.darkGray
}))

export const PriceTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1rem',
  lineHeight: '137.5%',
  color: theme.palette.customColor.gray
}))

type ButtonProps = {
  alreadyAdded: boolean
}

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'alreadyAdded'
})<ButtonProps>(({ theme, alreadyAdded }) => ({
  background: alreadyAdded
    ? theme.palette.customColor.green
    : theme.palette.customColor.blue,
  width: '100%',

  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.25rem'
  },

  '&:hover': {
    background: alreadyAdded
      ? theme.palette.customColor.green
      : theme.palette.customColor.blue,
    opacity: 0.6
  }
}))
