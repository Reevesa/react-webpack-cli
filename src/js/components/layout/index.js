import React, { Component } from 'react';

import { Layout } from 'antd';
import  Header  from './header'; // 默认导出的 就不要 {} 包起来了
import  SiderTest  from './side';

class TestIndex extends Component {
    constructor(props) {
        super(props);
        console.log('--TestIndex---', props);
    }

    render() {
        return (
            <div>
                <Layout>
                    <Header></Header>
                    <SiderTest></SiderTest>
                </Layout>
            </div>
        )
    }
}

export default TestIndex;