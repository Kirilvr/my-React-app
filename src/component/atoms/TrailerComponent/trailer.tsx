import React from 'react'

interface ITrailer {
  name: string
}

export const Trailer = ({ name }: ITrailer) => {
  return (
    <iframe title="Trailer" src={name} width="516px" height="282px"></iframe>
  )
}
