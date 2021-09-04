import React from 'react'
import { Container } from '../../atoms/Container'
import { Svg } from '../../atoms/SvgComponent'

export const SideBar = () => {
  return (
    <Container side>
      <Svg id="Home" />
      <Svg id="List" />
      <Svg id="Message" />
      <Svg id="People" />
      <Svg id="Play" />
      <Svg id="Rating" />
      <Svg id="Settings" />
    </Container>
  )
}
