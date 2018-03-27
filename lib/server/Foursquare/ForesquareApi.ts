import { ApiConfig } from './Foresquare.config';
import { Foresquare } from '../../sharedTypes/Common';
const foursquare = require('node-foursquare-venues')

export interface InfoObj {
    ll: string,
    radius: number,
    categoryId: string
}

export const FoursquareApi = () => {
    const fqApi = foursquare(ApiConfig.clientId, ApiConfig.clientSecret, ApiConfig.ApiVersion);
    return {
        search: async (infoObj: InfoObj): Promise<Foresquare.SearchResponse> => {
            return new Promise<Foresquare.SearchResponse>((resolve, reject) => {
                fqApi.venues.search(infoObj, (err: any, data: any) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                        return;
                    }
                    resolve(data);
                    return;
                });
            });

        }
    }
}
