import { useSelector } from 'react-redux';
import { PersonalData, ProfessionalData } from '../redux/types';

function FormDisplay() {
type FormData = {
  personalData: PersonalData,
  professionalData: ProfessionalData,
};
const finallyState = useSelector((state: FormData) => ({
  ...state.personalData,
  ...state.professionalData,
}));
const { name, email, cpf, address, city, uf, resume, role, description } = finallyState;
return (
  <section>
    <h1>Dados Enviados</h1>
    <div>
      Nome:
      {' '}
      { name }
    </div>
    <div>
      Email:
      {' '}
      { email }
    </div>
    <div>
      CPF:
      {' '}
      { cpf }
    </div>
    <div>
      Endereço:
      {' '}
      { address }
    </div>
    <div>
      Cidade:
      {' '}
      { city }

    </div>
    <div>
      Estado:
      {' '}
      { uf }

    </div>
    <div>
      Currículo:
      {' '}
      { resume }

    </div>
    <div>
      Cargo:
      {' '}
      { role }

    </div>
    <div>
      Descrição do cargo:
      {' '}
      { description }

    </div>
  </section>
);
}

export default FormDisplay;
