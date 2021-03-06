import React from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14} initialCenter={{ lat: -37.90478176840745, lng: 144.99831374868188 }}>
                <Marker name={'Current location'} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.NEXT_PUBLIC_GOOGLE_API_KEY)
})(MapContainer)
