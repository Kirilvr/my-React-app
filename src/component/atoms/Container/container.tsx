import React from 'react'
import styled, { css } from 'styled-components'

interface IContainer {
  width?: string
  position?: string
  height?: string
  backgroundColor?: string
  borderRadius?: string
  children?: any
  side?: boolean
  main?: boolean
  rating?: boolean
  other?: boolean
}

export const Container = (props: IContainer) => {
  return <StyledContainer {...props}></StyledContainer>
}

const StyledContainer = styled.div`
  position: ${({ position }: IContainer) => position};
  width: ${({ width }: IContainer) => width || '798px'};
  height: ${({ height }: IContainer) => height || '825px'};
  background-color: ${({ backgroundColor }: IContainer) =>
    backgroundColor || '#FDFDFF'};
  border-radius: ${({ borderRadius }: IContainer) => borderRadius || '13px'};
  border: 1px solid #ebebeb;
  ${(props) =>
    props.main &&
    css`
      margin-left: 150px;
      margin-top: 50px;
      padding: 29px;
    `}
  ${(props) =>
    props.side &&
    css`
      position: fixed;
      margin-left: 0;
      margin-top: -50px;
      width: 98px;
      height: 100%;
      background-color: #fdfdff;
      border-radius: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      svg {
        background-color: inherit;
        width: 25px;
        height: 25px;
        margin-top: 40px;
        cursor: pointer;
        &:hover {
          path {
            fill: #7f7fd5;
          }
        }
      }
    `}
    ${(props) =>
    props.rating &&
    css`
      height: 344px;
      margin-left: 150px;
      margin-top: 50px;
      padding: 29px;
    `}
    ${(props) =>
    props.other &&
    css`
      height: 473px;
      width: 341px;
      padding: 25px;
      margin: 25px;
      overflow: scroll;
    `}
`
