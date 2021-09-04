import React from 'react'
import styled, { css } from 'styled-components'

interface IString {
  children?: string | number | string[]
  color?: string
  fontSize?: string
  marginLeft?: string
  marginTop?: string
  marginBottom?: string
  rating?: boolean
  width?: string
}

export const String = (props: IString) => {
  return <StyledString {...props}>{props.children}</StyledString>
}

const StyledString = styled.p`
  color: ${({ color }: IString) => color || '#979797'};
  font-weight: 400;
  font-style: normal;
  font-size: ${({ fontSize }: IString) => fontSize || '18px'};
  background-color: inherit;
  margin-left: ${({ marginLeft }: IString) => marginLeft || '0'};
  margin-top: ${({ marginTop }: IString) => marginTop || '0'};
  margin-bottom: ${({ marginBottom }: IString) => marginBottom || '0'};
  width: ${({ width }: IString) => width};
  ${(props) =>
    props.rating &&
    css`
      font-size: 12px;
      color: white;
      background-color: #7f7fd5;
      border: 1px solid #7f7fd5;
      border-radius: 5px;
      text-align: center;
      width: 69px;
      height: 20px;
      margin-top: 4px;
    `};
`
