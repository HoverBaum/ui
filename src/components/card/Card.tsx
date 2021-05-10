import { ComponentType, useMemo } from 'react'
import { Box } from '../layout/Box'

export interface CardProps {
  variant?: 'elevated' | 'outlined'
}

export const Card: ComponentType<CardProps> = ({
  children,
  variant = 'elevated',
}) => {
  const boxShadow = useMemo(
    () =>
      variant === 'elevated'
        ? '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
        : 'none',
    [variant]
  )

  const border = useMemo(
    () => (variant === 'outlined' ? '1px solid #e0e0e0' : 'none'),
    [variant]
  )

  return (
    <Box
      borderRadius={[2, 3]}
      backgroundColor="cardBackground"
      boxShadow={boxShadow}
      border={border}
    >
      {children}
    </Box>
  )
}
