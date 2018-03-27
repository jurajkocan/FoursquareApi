import { endpoint } from './interfaces/Api';
import { AppPost } from './Post';

export const endpointsV1: endpoint[] = [
    {
        type: 'POST',
        endpointUrl: '/api/v1/search',
        endpointFunction: AppPost.Search
    }
];
