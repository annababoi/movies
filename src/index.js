import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {setupStore} from "./redux";
import {BrowserRouter} from "react-router-dom";

import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);


