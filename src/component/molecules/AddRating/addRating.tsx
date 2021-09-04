import React from 'react'
import styled from 'styled-components'
import { String } from '../../atoms/String'
import { Button } from '../../atoms/ButtonComponent'

export const AddRating = () => {
  return (
    <StyledAddRating>
      <String fontSize="24px" color="#7F7FD5">
        Add rating
      </String>
      <Rating data-total-value="2">
        <div className="ratingItem" data-item-value="10">
          ★
        </div>
        <div className="ratingItem" data-item-value="9">
          ★
        </div>
        <div className="ratingItem" data-item-value="8">
          ★
        </div>
        <div className="ratingItem" data-item-value="7">
          ★
        </div>
        <div className="ratingItem" data-item-value="6">
          ★
        </div>
        <div className="ratingItem" data-item-value="5">
          ★
        </div>
        <div className="ratingItem" data-item-value="4">
          ★
        </div>
        <div className="ratingItem" data-item-value="3">
          ★
        </div>
        <div className="ratingItem" data-item-value="2">
          ★
        </div>
        <div className="ratingItem" data-item-value="1">
          ★
        </div>
      </Rating>
      <Button name="Add rating" backgroundColorHover="#3A236A" middle />
    </StyledAddRating>
  )
}

const StyledAddRating = styled.div`
  background-color: inherit;
`

const Rating = styled.div`
  [data-total-value='1'] .ratingItem:nth-child(n + 10),
  [data-total-value='2'] .ratingItem:nth-child(n + 9),
  [data-total-value='3'] .ratingItem:nth-child(n + 8),
  [data-total-value='4'] .ratingItem:nth-child(n + 7),
  [data-total-value='5'] .ratingItem:nth-child(n + 6),
  [data-total-value='6'] .ratingItem:nth-child(n + 5),
  [data-total-value='7'] .ratingItem:nth-child(n + 4),
  [data-total-value='8'] .ratingItem:nth-child(n + 3),
  [data-total-value='9'] .ratingItem:nth-child(n + 2),
  [data-total-value='10'] .ratingItem:nth-child(n + 1) {
    color: #7f7fd5;
  }
  margin-top: 30px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  background-color: inherit;
  .ratingItem {
    background-color: inherit;
    color: #c4c4c4;
    cursor: pointer;
    font-size: 56px;
    transition: 0.2s;
    &:hover,
    &:hover ~ .ratingItem {
      color: #afafcf;
    }
  }
`
