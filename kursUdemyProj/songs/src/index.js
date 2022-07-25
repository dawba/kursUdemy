import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { legacy_createStore as createStore} from 'redux'

import App from './components/App';
import reducers from './reducers';

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
);