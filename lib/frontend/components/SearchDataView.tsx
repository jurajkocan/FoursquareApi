import * as React from 'react';
import ReactDOM from 'react-dom';
import { Foresquare } from '../../sharedTypes/Common';
import { style } from 'typestyle';

const InfiniteScroll = typeof window !== 'undefined' ? require('react-infinite-scroller') : null;

const DataViewStyle = {
    wrapperStyle: style({
        position: 'relative',
        top: '50%; left: 50%',
        transform: 'translate(-50%,-50%)'
    }),
    tableStyle: style({
        width: '100%',
        $nest: {
            'th': {
                width: '25%',
                textAlign: 'left'
            }
        }
    }),
    rowStyle: style({
        display: 'flex',
        borderBottom: '1px solid gray',
        height: '50px',
        lineHeight: '50px',
        $nest: {
            '&:hover': {
                backgroundColor: '#dcdcdc'
            },
            'div': {
                width: '25%'
            }
        }
    }),
    infiniteScrollStyle: style({
        height: '200px',
        overflow: 'auto'
    })
}

interface SearchDataViewProps {
    dataToRender: Foresquare.Venue[];
}

interface SearchDataViewState {
    allData: Foresquare.Venue[];
    dataToRender: Foresquare.Venue[];
    page: number;
    hasMoreItems: boolean;
}

export class SearchDataView extends React.Component<SearchDataViewProps, SearchDataViewState> {
    constructor(props: SearchDataViewProps) {
        super(props);
        this.state = {
            page: 0,
            allData: this.props.dataToRender,
            dataToRender: this.getDataPerPage(0, this.props.dataToRender),
            hasMoreItems: true
        };
    };

    getDataPerPage = (page: number, dataToReder: Foresquare.Venue[], dataPerPage: number = 7) => {
        const from = page * dataPerPage;
        const to = (from + dataPerPage) > dataToReder.length ? dataToReder.length : (from + dataPerPage);
        return dataToReder.slice(from, to);
    }

    loadMore = () => {        
        if (this.state.dataToRender.length !== this.state.allData.length) {
            this.setState({
                dataToRender: this.state.dataToRender.concat(
                    this.getDataPerPage(this.state.page + 1, this.state.allData)
                ),
                page: this.state.page + 1
            });
        }
        else {
            this.setState({
                hasMoreItems: false
            })
        }
    }

    renderRows = () => {
        if (this.state.dataToRender.length === 0) {
            return (<div>No data to display</div>)
        }
        return this.state.dataToRender.map((row, index) => {
            return (
                <div key={index} className={DataViewStyle.rowStyle}>
                    <div>{row.name}</div>
                    <div>{row.categories[0].name}</div>
                    <div>{row.location.address}</div>
                    <div>{row.location.distance}</div>
                </div>)
        });
    }

    componentWillReceiveProps(nextProps: SearchDataViewProps) {
        this.setState(
            {
                page: 0,
                allData: nextProps.dataToRender,
                dataToRender: this.getDataPerPage(0, nextProps.dataToRender),
                hasMoreItems: true
            }
        );
    }

    scroll() {
        if (InfiniteScroll !== null) {
            return (
                <div className={DataViewStyle.infiniteScrollStyle}>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadMore}
                        hasMore={this.state.hasMoreItems}
                        loader={<div className="loader">Loading ...</div>}
                        useWindow={false}
                    >
                        {this.renderRows()}
                    </InfiniteScroll>
                </div>
            )
        }
        else {
            return (
                <div className={DataViewStyle.infiniteScrollStyle}><div><div>No data to display</div></div></div>
            )
        }
    }

    render() {
        return (
            <div className={DataViewStyle.wrapperStyle}>
                <table className={DataViewStyle.tableStyle}>
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th> Category</th>
                            <th> Address</th>
                            <th> Distance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={4}>
                                {this.scroll()}
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }

}
