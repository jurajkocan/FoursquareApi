export namespace Foresquare {
    export enum categories {
        Winery = '4bf58dd8d48988d14b941735',
        Bar = '4bf58dd8d48988d116941735',
        Brewery = '50327c8591d4c4b30a586d5d'
    }

    export interface Venue {
        id: string,
        name: string,
        location: {
            address: string,
            distance: number,
        },
        categories: {
            id: string,
            name: string
        }[]
    }

    export interface SearchResponse {
        meta: {
            code: number,
            requestId: string
        },
        response: {
            venues: Venue[]
            confident: boolean
        }
    }
}
