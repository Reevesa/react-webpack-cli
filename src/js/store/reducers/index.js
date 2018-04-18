import { combineReducers } from 'redux'

import { userData, someTask } from './user';
import otherList from './others';

export default combineReducers({ userData, someTask, otherList });