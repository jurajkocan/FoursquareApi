import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { getTypeStyle } from '../styles/GetTypeStyle';
import { renderHtml } from './RenderHtml';
import { Home } from './pages/Home';

const styles = [
    'https://cdnjs.cloudflare.com/ajax/libs/antd/2.12.3/antd.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css'
];

const js: string[] = [
    '/app.js'
];

export const renderApp = (appState: {}) => {
    const bodyHtml = ReactDOMServer.renderToString(
        <Home />
    );
    const appStyle = getTypeStyle();
    const html = renderHtml(
        '', styles, appStyle, appState, bodyHtml, js);
    return html;
}
