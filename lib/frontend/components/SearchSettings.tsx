import * as React from 'react';
import { SimpleMap } from './Map';
import { Button, Slider, Radio } from 'antd';
import { FormEvent } from 'react';
import RadioButton from 'antd/lib/radio/radioButton';
import { SliderValue } from 'antd/lib/slider';
import { Foresquare } from '../../sharedTypes/Common';
import { CommonStyle } from '../../styles/CommonStyle';
const RadioGroup = Radio.Group;

// search object, all of the needed data to be send to the api
export interface SearchDataObject {
    category: Foresquare.categories;
    radius: number;
    lat: number;
    lng: number;
}

interface SearchSettingsProps {
    searchCallback: (data: SearchDataObject) => any;
    searchSettingsDefaultValues: {
        category: Foresquare.categories,
        lat: number,
        lng: number,
        radius: number
    }
}

interface SearchSettingsState {
    searchDataObject: SearchDataObject;
}

export class SearchSettings extends React.Component<SearchSettingsProps, SearchSettingsState> {
    constructor(props: SearchSettingsProps) {
        super(props);
        const stateDefaults = this.props.searchSettingsDefaultValues;
        this.state = {
            searchDataObject: {
                category: stateDefaults.category,
                lat: stateDefaults.lat,
                lng: stateDefaults.lng,
                radius: stateDefaults.radius,
            }
        }
    };

    searchButtonClick = () => {
        this.props.searchCallback(this.state.searchDataObject);
    }

    onCategoryChange = (e: any) => {
        const value: Foresquare.categories = (e.target && e.target.value) && e.target.value as Foresquare.categories;
        if (value) {
            this.setState({
                searchDataObject: {
                    ...this.state.searchDataObject,
                    category: value
                }
            });
        }
        else {
            // TODO: handle error
        }
    }

    onRadiusChange = (value: SliderValue) => {
        const sliderValue = value as number;
        if (sliderValue) {
            this.setState({
                searchDataObject: {
                    ...this.state.searchDataObject,
                    radius: sliderValue
                }
            });
        }
        else {
            // TODO: handle error
            console.log('error from antd design');
        }
    }

    onMarkDownChange = (lat: number, lng: number) => {
        this.setState({
            searchDataObject: {
                ...this.state.searchDataObject,
                lat: lat,
                lng: lng
            }
        });
    }

    render() {
        return (
            <div>
                <div className={CommonStyle.contentBoxStyle}>
                    <h2>
                        Select category
                    </h2>
                    <RadioGroup onChange={this.onCategoryChange} value={this.state.searchDataObject.category}>
                        <Radio value={Foresquare.categories.Bar}>Bar</Radio>
                        <Radio value={Foresquare.categories.Brewery}>Pivovar</Radio>
                        <Radio value={Foresquare.categories.Winery}>Vináreň</Radio>
                    </RadioGroup>
                </div>
                <div className={CommonStyle.contentBoxStyle}>
                    <h2>
                        Select radius
                    </h2>
                    <Slider onAfterChange={this.onRadiusChange} min={300} max={1000} defaultValue={this.state.searchDataObject.radius} />
                </div>
                <div className={CommonStyle.contentBoxStyle}>
                    <h2>
                        Select location
                    </h2>
                    <SimpleMap
                        center={{ lat: this.props.searchSettingsDefaultValues.lat, lng: this.props.searchSettingsDefaultValues.lng }}
                        onMarkDownClick={this.onMarkDownChange}
                    />
                </div>
                <Button onClick={this.searchButtonClick}> Search </Button>
            </div>
        )
    }

}
