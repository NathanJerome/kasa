import React, { useEffect, useState } from 'react'
import './Appartement.scss'
import { Link } from 'react-router-dom'

function Appartement(props) {


  return (
    <article className='article-appartement'>
      <Link 
      to={`/appartement/${props.id}`} >
        <div className='img-article'>
          <img className='img' src={props.cover}></img>
        </div>
        <p className='name'>{props.title}</p>
      </Link> 
    </article>
  
  )
}

export default Appartement