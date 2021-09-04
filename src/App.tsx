import React, { useState, useEffect } from 'react'
import { String } from './component/atoms/String'
import { Container } from './component/atoms/Container'
import { SideBar } from './component/molecules/SideBar'
import { CardFilm } from './component/organisms/CardFilm'
import { TrailerCard } from './component/organisms/TrailerCard'
import { AddRating } from './component/molecules/AddRating'
import { FilmList } from './component/organisms/FilmList'
import { film } from './mock'

export const App = () => {
  const [bookmarkId, setBookmarkId] = useState<number[]>([])
  console.log(bookmarkId)

  const addBookmark = (id: number) => {
    const hasId = bookmarkId.find((currentId) => currentId === id)
    if (hasId) {
      return
    }
    const newBookmarkId = [...bookmarkId, id]
    setBookmarkId(newBookmarkId)
    localStorage.setItem('bookmarks', JSON.stringify(newBookmarkId))
  }

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarks')
    if (savedBookmarks) {
      setBookmarkId(JSON.parse(savedBookmarks))
    }
  }, [])

  const removeBookmark = (id: number) => {
    const filteredBookmarksId = bookmarkId.filter(
      (currentId) => currentId !== id
    )
    setBookmarkId(filteredBookmarksId)
    localStorage.setItem('bookmarks', JSON.stringify(filteredBookmarksId))
  }

  const selectedFilm = film[1]
  return (
    <div className="App">
      <SideBar />
      <String
        marginLeft="150px"
        marginTop="50px"
        color="#4F4F4F"
        fontSize="30px"
      >
        Movies
      </String>
      <FilmList
        addBookmark={addBookmark}
        removeBookmark={removeBookmark}
        films={film}
        bookmarkId={bookmarkId}
      />
      <Container main>
        <CardFilm {...selectedFilm} />
      </Container>
      <Container main>
        <TrailerCard {...selectedFilm} />
      </Container>
      <Container rating>
        <AddRating />
      </Container>
    </div>
  )
}
