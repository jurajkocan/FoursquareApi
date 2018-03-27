import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { ClickEventValue } from 'google-map-react';
import { style } from 'typestyle';

const MapStyle = {
    mapStyle: style({
        width: '300px',
        height: '300px'
    }),
    customMarkStyle: style({
        color: 'red',
        fontSize: '25px',
        position: 'absolute',
        bottom: '0',
        left: '-7px'
    })

}

interface customMarkProps {
    text: string;
    lat: number;
    lng: number;
}

const CustomMarkReactComponent = (props: customMarkProps) => <div className={MapStyle.customMarkStyle}><i className="fa fa-map-marker" aria-hidden="true"></i></div>;


interface SimpleMapProps {
    center?: { lat: number, lng: number },
    zoom?: number;
    onMarkDownClick: (lat: number, lng: number) => any;
}

interface SimpleMapState {
    markPosition: { lat: number, lng: number }
}

export class SimpleMap extends React.Component<SimpleMapProps, SimpleMapState> {
    constructor(props: SimpleMapProps, defaultProps: SimpleMapProps) {
        super(props);
        this.state = {
            markPosition: {
                lat: this.props.center ? this.props.center.lat : 59.95,
                lng: this.props.center ? this.props.center.lng : 30.33,
            }
        }
    }
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    onClick = (eventValues: ClickEventValue) => {
        this.setState({
            markPosition: {
                lat: eventValues.lat,
                lng: eventValues.lng
            }
        });
        this.props.onMarkDownClick(eventValues.lat, eventValues.lng);
    }

    render() {

        return (
            <div className={MapStyle.mapStyle}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDTXLuaT-wa8hi0MZlChQdvQNSyiYqxTBg' }}
                    defaultCenter={this.props.center ? this.props.center : SimpleMap.defaultProps.center}
                    defaultZoom={this.props.zoom ? this.props.zoom : SimpleMap.defaultProps.zoom}
                    onClick={this.onClick}
                >
                    <CustomMarkReactComponent
                        lat={this.state.markPosition.lat}
                        lng={this.state.markPosition.lng}
                        text={'CustomMark'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}
