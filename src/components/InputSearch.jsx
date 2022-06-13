import React from 'react'
import img2 from '/src/assets/img/Rick_and_Morty_title2.svg'

const InputSearch = ({ setSearchLocation }) => {

  const searchLocation = e => {
    e.preventDefault()
    setSearchLocation(e.target.children[0].value)
  }
  return (
    <div className='cover__image'>
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