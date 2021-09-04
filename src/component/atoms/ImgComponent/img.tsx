import React from 'react'
import styled from 'styled-components'

interface IImg {
  name: string
  width?: string
  height?: string
  display?: string
  margin?: string
}

export const Img = (props: IImg) => {
  return <StyledImg src={props.name} {...props} alt="poster" />
}

const StyledImg = styled.img`
  width: ${({ width }: IImg) => width || '224px'};
  height: ${({ height }: IImg) => height || '341px'};
  display: ${({ display }: IImg) => display};
  margin: ${({ margin }: IImg) => margin};
`
