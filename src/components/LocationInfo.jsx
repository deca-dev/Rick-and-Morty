import React from 'react'


const LocationInfo = ({ location }) => {
    
 
    return (

      <article className='planet__info__container'>
        <h2>{location?.name}</h2>
        <div className='planet__info__details'>
          <span>Type: {location?.type}</span>
          <span>Dimension: {location?.dimension}</span>
          <span>Population: {location?.residents.length}</span>
        </div>
      </article>
    )

}

export default LocationInfo