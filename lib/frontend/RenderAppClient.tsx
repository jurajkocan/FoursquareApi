import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from './pages/Home';

ReactDOM.hydrate(
    <Home />,
    document.getElementById('root') as HTMLDivElement
);
