import React from 'react'
import { IFilm } from '../../../types'
import { String } from '../../atoms/String'
import { Img } from '../../atoms/ImgComponent'
import { Container } from '../../atoms/Container'
import { Button } from '../../atoms/ButtonComponent'

export const OtherFilm = ({ id, poster, title, year, plot }: IFilm) => {
  return (
    <div>
      <Container other>
        <Img
          name={poster}
          width="131px"
          height="199px"
          display="block"
          margin="0 auto"
        ></Img>
        <String color="#4F4F4F" fontSize="20px" marginTop="20px">
          {title}
        </String>
        <String fontSize="20px" color="#7F7FD5" marginTop="10px">
          {year}
        </String>
        <String fontSize="20px" marginTop="10px">
          {plot}
        </String>
      </Container>
    </div>
  )
}
