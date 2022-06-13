import axios from "axios"
import { useEffect, useState } from "react"


const useLocationApi = searchLocation => {

    const [location, setLocation] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        let locationNumber
        if (searchLocation) {
            locationNumber = searchLocation
        } else {
            locationNumber = Math.ceil(Math.random() * 126)
        }
        const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`
        axios.get(URL)
        .then(res => {
            setLocation(res.data)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
}, [searchLocation])

return {location, isLoading}
}

export default useLocationApi