import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// redux magic 
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';

import inputReducer from './store/reducers/inputNumber';




const rootReducer = combineReducers({
    myinput: inputReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers());

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
    
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
