import React from 'react'
import img2 from '/src/img/Rick_and_Morty_title2.svg'
import img3 from '/src/img/RickandMortyWP.webp'

const InputSearch = ({ setSearchLocation }) => {

  const searchLocation = e => {
    e.preventDefault()
    setSearchLocation(e.target.children[0].value)
  }
  return (
    <div className='cover__image' 
    // style ={{backgroundImage:`url(${img3})`}}
    >
      <div className='title__image'>
        <img src={img2} alt="" />
      </div>
      <form onSubmit={searchLocation}>
        <input type="text" placeholder='Type a location id...' />
        <button className='btn'>Search</button>
      </form>
    </div>
  )
}

export default InputSearch