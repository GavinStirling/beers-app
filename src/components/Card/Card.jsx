import React from 'react'

import "./Card.scss"

const Card = (props) => {
const { beer } = props;

const { "image_url":imageURL } = beer;

  return (
    <div className='card'>
        <img className='card__image' src={imageURL} alt="asd" />
    </div>
  )
}

export default Card