import { AnyAction } from 'redux';
import { SET_PERSONAL_DATA } from '../actions/actionType';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

export default (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SET_PERSONAL_DATA:
      return { ...state, ...action.payload };
    default: return state;
  }
};
