import { Button } from '@/app/shared/components'
import { styled, Typography } from '@mui/material'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px 11px',
  gap: '0.5rem',
  width: '309.33px',
  height: '305px',
  background: '#FFFFFF',
  borderRadius: '4px',

  img: {
    height: '11.75rem',
    width: 'auto'
  }
}))

export const InfoContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.125rem'
}))

export const TitleTypography = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: '0.75rem',
  lineHeight: '133%',
  color: '#333333'
}))

export const PriceTypography = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: '1rem',
  lineHeight: '137.5%',
  color: '#2F2E41'
}))

type ButtonProps = {
  alreadyAdded: boolean
}

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'alreadyAdded'
})<ButtonProps>(({ theme, alreadyAdded }) => ({
  background: alreadyAdded ? theme.palette.customColor.success : '#009EDD',
  width: '100%',

  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.25rem'
  },

  '&:hover': {
    background: alreadyAdded ? theme.palette.customColor.success : '#009EDD',
    opacity: 0.6
  }
}))
