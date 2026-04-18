import React, { useContext, useState, useEffect } from 'react'

const LocationContext = React.createContext({
    location : null,
    loading : true,
    error : null
})

export const LocationProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const fetchLocationData = async (latitude, longitude) => {
            try {
                const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);   
                const data = await response.json();
                const userLocation = `${data?.city}, ${data?.countryName}`;
                setLocation(userLocation);
            } catch (err) {
                setError("Failed to fetch location data");
            }finally{
                setLoading(false);
            }
        }
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            fetchLocationData(latitude, longitude);
        }, () => {
            setError("Unable to fetch location")
            setLoading(false);
        })

    },[])
    return(
        <LocationContext.Provider value={{location, loading, error}}>
            {children}
        </LocationContext.Provider>
    )
}

export const useLocation = () => useContext(LocationContext);