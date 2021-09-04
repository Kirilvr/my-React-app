import React from 'react'
import styled from 'styled-components'
import { IFilm } from '../../../types'
import { OtherFilm } from '../OtherFilm'
import { Button } from '../../atoms/ButtonComponent/button'
import { userInfo } from 'os'

interface IFilmList {
  films: IFilm[]
  bookmarkId: number[]
  removeBookmark: (id: number) => void
  addBookmark: (id: number) => void
}

export const FilmList = ({
  films,
  addBookmark,
  removeBookmark,
  bookmarkId,
}: IFilmList) => {
  return (
    <Div>
      {films?.map((film) => (
        <div key={film.id}>
          <OtherFilm key={film.id} {...film} />

          {!bookmarkId?.find((id) => id === film.id) ? (
            <Button
              middle
              height="50px"
              width="100px"
              name="Add"
              onClick={() => addBookmark(film.id)}
            />
          ) : (
            <Button
              middle
              height="50px"
              width="100px"
              name="Remove"
              onClick={() => removeBookmark(film.id)}
            />
          )}
        </div>
      ))}
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 100px;
`
