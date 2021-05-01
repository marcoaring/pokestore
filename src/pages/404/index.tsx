import { useLocation } from 'react-router-dom';

import { ILocation } from './index.interface';

import * as S from './styles';

import notFound from '../../assets/404.png';

const ErrorPage = () => {
  const location = useLocation<ILocation>();

  return (
    <S.Main>
      <S.Logo src={notFound} alt="404" title="404" />

      <S.Informative>
        <S.Strong>Ops!</S.Strong> Parece que houve um erro.
        <br />
        Veja abaixo o erro.
      </S.Informative>

      <S.Informative className="Error">
        {location.state?.message || 'O erro encontrado é desconhecido.'}
      </S.Informative>

      <S.Button to="/">Voltar para a Home</S.Button>
    </S.Main>
  );
};

export default ErrorPage;
