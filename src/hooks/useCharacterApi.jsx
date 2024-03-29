import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useCharacterApi = resident => {

    const [character, setCharacter] = useState()

    useEffect(() => {
  
      axios.get(resident)
        .then(res => setCharacter(res.data))
        .catch(err => console.log(err))
  console.log(character)
    }, [])

  return character
}

export default useCharacterApi