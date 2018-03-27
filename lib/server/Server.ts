import * as Express from 'express';
import * as Session from 'express-session';
import * as BodyParser from 'body-parser';
import axios from 'axios';
import { renderApp } from '../frontend/RenderAppServer';
import { endpointsV1 } from '../api/Endpoints';

export const startServer = () => {
    const app = Express();

    app.use(BodyParser.urlencoded({ extended: false }));
    app.use(BodyParser.json());
    app.use(Express.static('./public'));

    /**
     * api endpoints
     */
    endpointsV1.forEach((endPoint, index) => {
        switch (endPoint.type) {
            case 'GET':
                app.get(endPoint.endpointUrl, endPoint.endpointFunction);
                break;
            case 'POST':
                app.post(endPoint.endpointUrl, endPoint.endpointFunction);
                break;
        }
    });

    /**
     * @description app endpoints
     */

    app.get('/app', async (req, res) => {
        const html = renderApp({});
        res.send(html);
    });


    app.listen(3000);
    console.log('server started');
}
