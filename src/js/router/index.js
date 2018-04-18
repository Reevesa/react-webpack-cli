import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
// 这个 包的作用 ?
import { ConnectedRouter } from 'react-router-redux';
import { message } from 'antd';
import LazyRoute from 'lazy-route';
// import routerConfig from './routerConfig'; // 暂时 不用
import store from '../store/index';

// 组件部分 移入 router下
import Home from '../home';
import Login from '../login';
import ChangePwd from '../changePwd';

// 权限未做

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Home}></Route>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/changePwd" component={ChangePwd}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;