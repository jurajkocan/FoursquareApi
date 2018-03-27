import * as React from 'react';
import { SearchDataView } from '../components/SearchDataView';
import { SearchSettings, SearchDataObject } from '../components/SearchSettings';
import { Row, Col } from 'antd';
import axios from 'axios';
import { Foresquare } from '../../sharedTypes/Common';
import { style } from 'typestyle';

// ideal case is to get the data from some constant file or db for the first time
// other way some intelligent choice based on user location ect.
// saved to localstorage and render app with this saved state
/**
 * @description default values for search settings
 */
const defaultValues: SearchDataObject = {
    category: Foresquare.categories.Bar,
    lat: 48.1682385,
    lng: 17.1362205,
    radius: 500
}

const HomeStyle = {
    commonColumnStyle: style({
        padding: '10px',
    }),
    rightColumnStyle: style({
        height: '100vh'
    }),
}

interface HomeState {
    dataToRender: Foresquare.Venue[];
}

export class Home extends React.Component<{}, HomeState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            dataToRender: []
        }
    }
    searchCallback = (data: SearchDataObject) => {
        axios.post('/api/v1/search', data).then((res) => {
            const parsedData = res.data as Foresquare.SearchResponse;
            if (parsedData) {
                this.setState({
                    dataToRender: parsedData.response.venues
                });
            }
            // TODO: error handle
        }).catch((err) => {
            //TODO: handle error
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col className={HomeStyle.commonColumnStyle} span={8}>
                        <SearchSettings searchSettingsDefaultValues={defaultValues} searchCallback={this.searchCallback} />
                    </Col>
                    <Col span={16} className={HomeStyle.rightColumnStyle + ' ' + HomeStyle.commonColumnStyle}>
                        <SearchDataView dataToRender={this.state.dataToRender} />
                    </Col>
                </Row>
            </div>

        );
    }
}
