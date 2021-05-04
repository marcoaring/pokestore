import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import logo from '../../assets/logo-pokestore.png';

const MainPage = () => {
  const [magicLink, changeMagicLink] = useState(false);
  const history = useHistory();
  const randomOptions = ['water', 'electric', 'fire'];

  const randomClass = () => {
    const randomPosition = Math.floor(Math.random() * 3);

    sessionStorage.setItem('THEME', randomOptions[randomPosition]);

    history.push(`/loja`);
  };

  const redirect = (type: string) => {
    sessionStorage.setItem('THEME', type);

    history.push(`/loja`);
  };

  return (
    <S.Main>
      <S.Logo src={logo} alt="PokeStore" title="Pokestore" />

      <S.Informative>
        Olá <S.Strong>treinador</S.Strong>, seja bem vindo a experiência{' '}
        <S.Strong>PokeStore</S.Strong>.
      </S.Informative>

      <S.Informative>
        Abaixo você encontrará um botão que irá gerar automaticamente e randomicamente uma das três
        classes principais do mundo pokémon: <S.Strong>Água</S.Strong>, <S.Strong>Fogo</S.Strong> ou{' '}
        <S.Strong>Elétrico</S.Strong>.
      </S.Informative>

      <S.Button onClick={() => randomClass()}>Iniciar</S.Button>
      <S.Informative>
        Mas, calma, caso deseje escolher aquela classe de sua preferência, você também pode. Basta
        clicar nesse{' '}
        <S.MagicLink onClick={() => changeMagicLink(!magicLink)}>link mágico</S.MagicLink>.
      </S.Informative>

      {magicLink && (
        <S.Informative>
          <S.RedirectLink onClick={(e) => redirect('water')}>Água</S.RedirectLink> |{' '}
          <S.RedirectLink onClick={(e) => redirect('fire')}>Fogo</S.RedirectLink> |{' '}
          <S.RedirectLink onClick={(e) => redirect('electric')}>Elétrico</S.RedirectLink>
        </S.Informative>
      )}
    </S.Main>
  );
};

export default MainPage;
