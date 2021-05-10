import styled from '@emotion/styled'
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
} from 'styled-system'

export interface BoxProps
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    BackgroundProps,
    BorderProps,
    ShadowProps {}

export const Box = styled.div<BoxProps>`
  min-height: 1rem;
  min-width: 1rem;
  ${color}
  ${space}
  ${layout}
  ${background}
  ${border}
  ${shadow}
`
