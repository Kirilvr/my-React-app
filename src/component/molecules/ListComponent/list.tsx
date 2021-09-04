import React from 'react'
import styled from 'styled-components'
import { String } from '../../atoms/String/string'

interface IList {
  name: string
  description: string | number | string[]
}

export const List = ({ name, description }: IList) => {
  return (
    <StyledList>
      <String color="#979797">{name}</String>
      <String color="#3A236A">{description}</String>
    </StyledList>
  )
}

const StyledList = styled.div`
  background-color: inherit;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-top: 15px;
  margin-bottom: 15px;
`
