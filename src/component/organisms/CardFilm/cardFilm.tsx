import React from 'react'
import styled, { css } from 'styled-components'
import { List } from '../../molecules/ListComponent/list'
import { IFilm } from '../../../types'
import { String } from '../../atoms/String'
import { Img } from '../../atoms/ImgComponent'

export const CardFilm = ({
  id,
  title,
  year,
  released,
  runtime,
  genre,
  director,
  writer,
  actors,
  plot,
  country,
  poster,
  imdbRating,
  imdbVotes,
  type,
  boxOffice,
  production,
}: IFilm) => {
  return (
    <StyledCardFilm>
      <Div>
        <Img name={poster} />
        <Div rating>
          <String rating>Rating</String>
          <String color="#3A236A">
            {imdbVotes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} voted
          </String>
          <String color="#7F7FD5" fontSize="60px">
            {imdbRating}
          </String>
        </Div>
      </Div>
      <Div>
        <String
          marginBottom="40px"
          width="303px"
          color="#7F7FD5"
          fontSize="24px"
        >
          {title}
        </String>
        <List name="Year" description={year}></List>
        <List name="Released" description={released}></List>
        <List name="Runtime" description={runtime}></List>
        <List name="BoxOffice" description={boxOffice}></List>
        <List name="Genres" description={genre.join(', ')}></List>
        <List name="Country" description={country}></List>
        <List name="Production" description={production}></List>
        <List name="Writers" description={writer}></List>
        <List name="Director" description={director}></List>
        <List name="Actors" description={actors.join(', ')}></List>
      </Div>
      <Div third>
        <String fontSize="20px">{plot}</String>
      </Div>
    </StyledCardFilm>
  )
}

const StyledCardFilm = styled.div`
  background-color: inherit;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 34px;
`
interface IDiv {
  third?: boolean
  rating?: boolean
}

const Div = styled.div`
  background-color: inherit;
  ${(props: IDiv) =>
    props.third &&
    css`
      grid-column-start: 1;
      grid-column-end: 3;
    `}
  ${(props: IDiv) =>
    props.rating &&
    css`
      margin-top: 33px;
      display: grid;
      grid-template-columns: 1fr 3fr;
      gap: 11px;
    `}
`
