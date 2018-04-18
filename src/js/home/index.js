import React, { Component } from 'react';
import './home.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

import TestIndex from '../components/layout/index';

class Home extends Component {
    constructor(props) {
        console.log('--props--', props)
        super(props);
    }


    render() {
        return (
            <div>
                <TestIndex aa={'aa'} />
            </div>
        )
    }
}

export default Home;