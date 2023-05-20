import React from 'react';
import { createRoot } from 'react-dom';
import App from '../src/app/App';
import store from '../src/app/store';
import { Provider } from 'react-redux';

const root = createRoot(document.querySelector('#root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
