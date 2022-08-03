import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const FooterMap = () => {

    const containerStyle = {
        width: '700px',
        height: '300px'
    };

    const center = {
        lat: 19.012169577471994,
        lng: 73.0372432006026
    };

    const position = {
        lat: 19.012169577471994,
        lng: 73.0372432006026
    }



    const onLoad = marker => {
        console.log('marker: ', marker)
    }

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCJ1ZMYs2BgNz_VI3_KzP5vTInG5xpxHKM"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
            >
                <Marker
                    onLoad={onLoad}
                    position={position}
                />
            </GoogleMap>
        </LoadScript>
    )
};

export default FooterMap;