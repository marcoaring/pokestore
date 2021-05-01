import { useEffect, useState } from 'react';

import { Header, Loading, Pokemon } from '../../components';

import * as FetchService from '../../services/fetch';

import * as S from './styles';

const StorePage = () => {
  const [loading, changeLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const type = localStorage.getItem('THEME') || '';

  useEffect(() => {
    FetchService.getPokemons(type).then((response) => {
      setPokemons(response);
      changeLoading(false);
    });
  }, [type]);

  return (
    <>
      <Header />
      <S.Wrapper>
        {!loading && pokemons.length > 0 && (
          <S.Pokemons>
            {pokemons.map((pokemon: any) => {
              return <Pokemon pokemon={pokemon} key={pokemon.id} />;
            })}
          </S.Pokemons>
        )}
        {loading && <Loading />}
      </S.Wrapper>
    </>
  );
};

export default StorePage;
