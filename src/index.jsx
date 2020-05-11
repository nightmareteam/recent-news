import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

console.log('hydrating');

const updates = window.__updates__;
delete window.__updates__;
ReactDOM.hydrate(<App updates={updates} />, document.getElementById('recent-news'));
