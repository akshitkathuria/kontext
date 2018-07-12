import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text, lat, lng }) => <div> <div>{text}</div> <div><p>Latitude : {lat}</p><p>Longitude : {lng}</p></div></div>;

class Map extends Component {
    constructor(props) {
        super(props);
        if (this.props.selectedTwit) {
            this.state = {
                center: {
                    lat: this.props.selectedTwit.coordinates.lat,
                    lng: this.props.selectedTwit.coordinates.lng
                },
                zoom: 10
            }
        } else {
            this.state = {
                center: {
                    lat: 29.698436,
                    lng: 76.9620728
                },
                zoom: 10
            }
        }
    }

    render() {
        return (
            <div>
                <div style={{ height: '50vh' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCWP4gI3ET9otOTChictCKrpd6lOH28eYc' }}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}
                    >
                    </GoogleMapReact>
                    <AnyReactComponent
                        lat={this.state.lat}
                        lng={this.state.lng}
                        text={'Twit Location'}
                    />
                </div>
            </div>

        );
    }
}

export default Map;