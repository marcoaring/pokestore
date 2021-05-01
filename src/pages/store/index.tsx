import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header, Loading, Navigation, Pokemon } from '../../components';

import * as FetchService from '../../services/fetch';

import IParams from './index.interface';

import * as S from './styles';

const StorePage = () => {
  const [loading, changeLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const params = useParams<IParams>();
  const type = localStorage.getItem('THEME') || '';
  const currentPagination = params ? parseInt(params.page || '1') : 1;

  useEffect(() => {
    changeLoading(true);
    FetchService.getPokemons(type, currentPagination).then((response) => {
      setPokemons(response);
      changeLoading(false);
    });
  }, [type, currentPagination]);

  return (
    <>
      <Header />
      <S.Wrapper>
        {!loading && pokemons.length > 0 && (
          <>
            <S.Pokemons>
              {pokemons.map((pokemon: any) => {
                return <Pokemon pokemon={pokemon} key={pokemon.id} />;
              })}
            </S.Pokemons>

            <Navigation
              currentPagination={currentPagination}
              pagination={parseInt(sessionStorage.getItem('PAGINATION') || '1')}
            />
          </>
        )}

        {loading && <Loading />}
      </S.Wrapper>
    </>
  );
};

export default StorePage;
