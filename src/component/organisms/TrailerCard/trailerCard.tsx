import React from 'react'
import styled from 'styled-components'
import { IFilm } from '../../../types'
import { String } from '../../atoms/String'
import { Trailer } from '../../atoms/TrailerComponent'

export const TrailerCard = ({ trailer, description, title }: IFilm) => {
  return (
    <StyledTrailerCard>
      <String color="#7F7FD5" fontSize="24px" marginBottom="28px">
        Trailer: {title}
      </String>
      <Trailer name={trailer} />
      <String fontSize="24px" marginTop="47px">
        {description}
      </String>
    </StyledTrailerCard>
  )
}

const StyledTrailerCard = styled.div`
  background-color: inherit;
`
