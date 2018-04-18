import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from './reducers/index';


const store = createStore(
    combineReducers( {
        ...reducers,
        routing: routerReducer
    } ),
    compose(
        applyMiddleware(thunk), // 支持异步 action
        // 支持 调试 分环境
        // window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
);
  
// if ( process.env.NODE_ENV === 'development' && module.hot ) {
    // Enable Webpack hot module replacement for reducers
    /* module.hot.accept('./reducers/index', () => {
        const nextReducer = require('./reducers/index').default;

        store.replaceReducer(nextReducer);
    }); */
// }
  
export default store;