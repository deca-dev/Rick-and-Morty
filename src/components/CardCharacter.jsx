import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useCharacterApi from '../hooks/useCharacterApi'

const CardCharacter = ({ resident }) => {
  const character = useCharacterApi(resident)



  return (
    <article className='character__card'>
      <img src={character?.image} alt="" />
      <div className='character__card__information'>
        <h2>{character?.name}</h2>
        <div className= {`
          ${character?.status == 'Alive' ? 'character__circle__alive'
          :
          character?.status == 'Dead' ? 'character__circle__dead'
          :
          'character__circle__unknown'}
        `}
        ></div><p className='character__status'>{character?.status} -</p><span className='character__status'>{character?.species}</span>
        <p className='character__origin__subtitle'>Origin:</p><span className='character__origin__value'>{character?.origin.name}</span>
        <p className='character__episode__subtitle'>Episodes where appears:</p><span className='character__episode__value'>{character?.episode.length}</span>
      </div>
    </article>
  )
}

export default CardCharacter