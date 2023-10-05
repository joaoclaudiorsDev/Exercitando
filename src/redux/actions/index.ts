import { PersonalData, ProfessionalData } from '../types';
import { SET_PERSONAL_DATA, SET_PROFESSIONAL_DATA } from './actionType';

export const setPersonalData = (personalData: PersonalData) => ({
  type: SET_PERSONAL_DATA,
  payload: personalData,
});
export const setProfessionalData = (professionalData: ProfessionalData) => ({
  type: SET_PROFESSIONAL_DATA,
  payload: professionalData,
});
