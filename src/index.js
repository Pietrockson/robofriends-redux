import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import { legacy_createStore, applyMiddleware, combineReducers} from 'redux'
import { Provider} from 'react-redux';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
import  thunkMiddleware from 'redux-thunk';
import 'tachyons'; 
import reportWebVitals from './reportWebVitals';


const logger = createLogger();

const rootReducer= combineReducers({searchRobots, requestRobots}) 

const store = 
    legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
      <App /> 
    </Provider>
  </React.StrictMode>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
