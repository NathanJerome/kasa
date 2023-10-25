import React from 'react'
import "./Banner.scss"

function Banner(props) {

  const { src, txt } = props
  return (
    <div className='banner'>
        <img className='img-banner' src={src}></img>
        <p className='p-banner'>{txt}</p>
    </div>
  )
}

export default Banner