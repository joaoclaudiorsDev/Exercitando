import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function Home() {
  const navgate = useNavigate();

  return (
    <section>
      <Button
        onClick={ () => navgate('/personal-form') }
        label="Preencher Formulário"
        moreClasses="text-center is-info is-large is-fullwidth"
        type="button"
      />
    </section>
  );
}

export default Home;
