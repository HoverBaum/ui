import styled from '@emotion/styled'
import {
  background,
  border,
  color,
  flexbox,
  FlexboxProps as BasicFlexBoxProps,
  layout,
  space,
} from 'styled-system'
import { BoxProps } from './Box'

export interface FlexboxProps extends BoxProps, BasicFlexBoxProps {}

export const FlexBox = styled.div<FlexboxProps>`
  min-height: 1rem;
  min-width: 1rem;
  display: flex;
  ${flexbox}
  ${color}
  ${space}
  ${layout}
  ${background}
  ${border}
`
