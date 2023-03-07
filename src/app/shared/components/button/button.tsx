import { type ButtonProps } from '@mui/material'

import { StyledButton } from './button-styles'

type Props = ButtonProps & {
  children: React.ReactNode
  className?: string
}

export const Button = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>
}
