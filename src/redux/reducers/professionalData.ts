import { AnyAction } from 'redux';
import { SET_PROFESSIONAL_DATA } from '../actions/actionType';

const INITIAL_STATE = {
  resume: '',
  role: '',
  description: '',
};

export default (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SET_PROFESSIONAL_DATA:
      return { ...state, ...action.payload };
    default: return state;
  }
};
