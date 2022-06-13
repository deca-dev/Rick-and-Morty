import React, { useState } from 'react'
import CardCharacter from './components/CardCharacter'
import InputSearch from './components/InputSearch'
import Loader from './components/Loader'
import LocationInfo from './components/LocationInfo'
import useLocationApi from './hooks/useLocationApi'
import './App.css'




const RickAndMorty = () => {

    const [searchLocation, setSearchLocation] = useState()
    const { location, isLoading } = useLocationApi(searchLocation)

    return (
        <div>

            {/* isLoading ?
                    <Loader />
                    :  */}

            <InputSearch setSearchLocation={setSearchLocation} />
            <LocationInfo location={location} />
            <div>
                <h1 className='residents__title'>Residents</h1>
                <div className='card'>
                    {location?.residents.map(resident => (
                        <CardCharacter
                            resident={resident}
                            key={resident}
                        />
                    ))}
                </div>

            </div>

        </div>
    )
}

export default RickAndMorty