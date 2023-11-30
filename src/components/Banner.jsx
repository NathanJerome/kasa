import React from 'react'
import "./Banner.scss"

function Banner(props) {

  
  const { src, txt, isAppPage  } = props
  const imgClass = isAppPage ? 'app-img-banner' : 'about-img-banner';

  return (
    <div className='banner'>
        <img className={`img-banner ${imgClass}`} src={src}></img>

        <p className='p-banner'>{txt}</p>
    </div>
  )
}

export default Banner