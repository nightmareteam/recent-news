import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../src/app';

const ssr = (updates) => {

    const element = <App updates={updates} />
    
    return renderToString(element);
}

export default ssr;