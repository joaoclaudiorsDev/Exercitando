import { combineReducers } from 'redux';
import professionalData from './professionalData';
import personalData from './personalData';

const rootReducer = combineReducers({ personalData, professionalData });

export default rootReducer;
