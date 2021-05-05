import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { Header, Loading } from '../../components';

import * as FetchService from '../../services/fetch';
import { buildPokemon, capitalizeName } from '../../services/fetch/builder';

import { PokedexContext } from '../../hooks/pokedex';

import IParams from './index.interface';

import * as S from './styles';

import imageNotFound from '../../assets/pokemon-not-found-image.png';

const PokemonPage = () => {
  const sessionPokedex: any = sessionStorage.getItem('POKEDEX');
  const sessionTotal: any = sessionStorage.getItem('TOTAL');
  const [count, setCount] = useState(sessionPokedex ? JSON.parse(sessionPokedex).length : 0);
  const [loading, changeLoading] = useState(true);
  const [pokedex, setPokedex] = useState<any>(sessionPokedex ? JSON.parse(sessionPokedex) : []);
  const [pokemon, setPokemon] = useState<any>(null);
  const [total, setTotal] = useState<any>(sessionTotal ? parseFloat(sessionTotal) : 0);
  const params = useParams<IParams>();
  const name = params.name || '';

  useEffect(() => {
    changeLoading(true);
    FetchService.getPokemon(name, false).then((response) => {
      setPokemon(response);
      changeLoading(false);
    });
  }, [name]);

  const addToPokedex = (event: React.FormEvent, poke: IPokemon) => {
    event.preventDefault();
    const duplicated: IPokemon | any = pokedex.findIndex((item: IPokemon) => item.id === poke.id);
    const calcTotal = (total + parseFloat((poke.base_experience / 3).toFixed(2))).toFixed(2);

    if (duplicated === -1) {
      setPokedex([...pokedex, buildPokemon(poke)]);
      setCount(count + 1);
      sessionStorage.setItem('POKEDEX', JSON.stringify([...pokedex, buildPokemon(poke)]));
      sessionStorage.setItem('COUNT', String(count + 1));
    } else {
      pokedex[duplicated].quantity = pokedex[duplicated].quantity + 1;
      setPokedex(pokedex);
      sessionStorage.setItem('POKEDEX', JSON.stringify(pokedex));
    }
    setTotal(parseFloat(calcTotal));
    sessionStorage.setItem('TOTAL', calcTotal);
  };

  return (
    <PokedexContext.Provider value={{ count, setCount, total, setTotal, pokedex, setPokedex }}>
      <Header />
      <S.Wrapper>
        {!loading && pokemon && (
          <S.Pokemon>
            <S.Title>
              <S.LinkBack to="/loja">Voltar</S.LinkBack>
              {capitalizeName(pokemon.name)}
            </S.Title>
            <S.WrapperImage>
              <S.Image
                src={
                  pokemon.sprites.other.dream_world.front_default ||
                  pokemon.sprites.other['official-artwork'].front_default ||
                  imageNotFound
                }
                alt={pokemon.name}
                title={pokemon.name}
              />
            </S.WrapperImage>
            <S.Informations>
              <S.Datasheet>
                <S.Items>
                  <S.Item>
                    <S.ItemTitle>Experiência: </S.ItemTitle>
                    {pokemon.base_experience}
                  </S.Item>
                  <S.Item>
                    <S.ItemTitle>Altura: </S.ItemTitle>
                    {pokemon.height / 10} m
                  </S.Item>
                  <S.Item>
                    <S.ItemTitle>Peso: </S.ItemTitle>
                    {pokemon.weight / 10} kg
                  </S.Item>
                </S.Items>
                <S.Items>
                  <S.Item>
                    <S.ItemTitle>Classe: </S.ItemTitle>
                    {pokemon.types.map((item: any, index: number) => (
                      <Fragment key={index}>
                        {index ? ', ' : ''}
                        {capitalizeName(item.type.name)}
                      </Fragment>
                    ))}
                  </S.Item>
                  <S.Item>
                    <S.ItemTitle>Habilitades: </S.ItemTitle>
                    {pokemon.abilities.map((item: any, index: number) => (
                      <Fragment key={index}>
                        {index ? ', ' : ''}
                        {capitalizeName(item.ability.name)}
                      </Fragment>
                    ))}
                  </S.Item>
                </S.Items>
              </S.Datasheet>

              <S.Price>
                {parseFloat((pokemon.base_experience / 3).toFixed(2)).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </S.Price>

              <S.Button onClick={(event) => addToPokedex(event, pokemon)}>
                Adicionar na Pokedex
              </S.Button>
            </S.Informations>
          </S.Pokemon>
        )}

        {loading && <Loading />}
      </S.Wrapper>
    </PokedexContext.Provider>
  );
};

export default PokemonPage;
