import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header, Loading, Navigation, Pokemon } from '../../components';

import * as FetchService from '../../services/fetch';

import { PokedexContext } from '../../hooks/pokedex';

import IParams from './index.interface';

import * as S from './styles';

const StorePage = () => {
  const sessionPokedex: any = sessionStorage.getItem('POKEDEX');
  const sessionTotal: any = sessionStorage.getItem('TOTAL');
  const [count, setCount] = useState(sessionPokedex ? JSON.parse(sessionPokedex).length : 0);
  const [loading, changeLoading] = useState(true);
  const [pokedex, setPokedex] = useState<any>(sessionPokedex ? JSON.parse(sessionPokedex) : []);
  const [pokemons, setPokemons] = useState([]);
  const [total, setTotal] = useState(sessionTotal ? parseFloat(sessionTotal) : 0);
  const params = useParams<IParams>();
  const type = sessionStorage.getItem('THEME') || '';
  const currentPagination = params ? parseInt(params.page || '1') : 1;

  useEffect(() => {
    changeLoading(true);
    FetchService.getPokemons(type, currentPagination).then((response) => {
      setPokemons(response);
      changeLoading(false);
    });
  }, [type, currentPagination]);

  return (
    <PokedexContext.Provider value={{ count, setCount, total, setTotal, pokedex, setPokedex }}>
      <Header />
      <S.Wrapper>
        {!loading && pokemons.length > 0 && (
          <>
            <S.Pokemons>
              {pokemons.map((pokemon: IPokemon) => {
                return <Pokemon key={pokemon.id} pokemon={pokemon} />;
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
    </PokedexContext.Provider>
  );
};

export default StorePage;
