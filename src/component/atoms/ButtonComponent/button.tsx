import React from 'react'
import styled, { css } from 'styled-components'

interface IButton {
  name?: string
  width?: string
  height?: string
  backgroundColor?: string
  fontSize?: string
  color?: string
  backgroundColorHover?: string
  colorHover?: string
  middle?: boolean
  onClick?: () => void
}

export const Button = (props: IButton) => {
  return <StyledButton {...props}>{props.name}</StyledButton>
}

const StyledButton = styled.button`
  font-weight: 400;
  font-style: normal;
  font-size: ${({ fontSize }: IButton) => fontSize || '24px'};
  color: ${({ color }: IButton) => color || 'white'};
  width: ${({ width }: IButton) => width || '266px'};
  height: ${({ height }: IButton) => height || '68px'};
  background-color: ${({ backgroundColor }: IButton) =>
    backgroundColor || '#7F7FD5'};
  border-radius: 13px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ backgroundColorHover }: IButton) =>
      backgroundColorHover};
    color: ${({ colorHover }: IButton) => colorHover};
  }
  ${(props) =>
    props.middle &&
    css`
      margin-top: 50px;
      margin-left: 30%;
    `}
`
