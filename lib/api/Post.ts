import { InputData } from './interfaces/CommonTypes';
import { RequestHandler } from 'express';
import { FoursquareApi } from '../server/Foursquare/ForesquareApi';

export namespace AppPost {
    export const Search: RequestHandler = async (req, res) => {
        try {
            const data = req.body as InputData.InputSearchData;
            if (!data.category)
                throw ('category is missing in request');
            if (!data.lat)
                throw ('lat is missing in request');
            if (!data.lng)
                throw ('lng is missing in request');
            if (!data.radius)
                throw ('radius is missing in request');

            const searchResult = await FoursquareApi().search({
                categoryId: data.category,
                ll: data.lat.toString() + ',' + data.lng.toString(),
                radius: data.radius
            });            
            res.status(200).send(searchResult);
            return;
        }
        catch (err) {
            res.status(400).send(err);
            return;
        }

    }
}
