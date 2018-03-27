declare module "node-foursquare-venues" {
    interface InfoObj {
        ll: string,
        radius: number,
        categoryId: string
    }

    interface SearchResponse {
        meta: {
            code: number,
            requestId: string
        },
        response: {
            venues: {
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
            }[]
            confident: boolean
        }
    }

    interface foursquareDefault {
        venues: {
            search: (InfoObj: any, callback?: any) => Promise<SearchResponse>
        }
    }

    function foursquare(clientId: string, secretId: string, version?: string, mode?: any): foursquareDefault
    namespace foursquare { }
    export = foursquare;
}
