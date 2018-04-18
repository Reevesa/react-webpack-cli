import React from 'react';
import ReactDom from 'react-dom';
// import { routerReducer, routerMiddleware } from 'react-router-redux';

// 这个 包的作用 ? *************
import { ConnectedRouter } from 'react-router-redux';

// *******************************
// import routerConfig from './routerConfig'; // 暂时 不用

import App from './router';

ReactDom.render(<App />, document.getElementById('app'));

