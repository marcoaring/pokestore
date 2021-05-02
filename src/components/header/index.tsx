import { useState } from 'react';

import { usePokedex } from '../../hooks/pokedex';

import { Icon } from '../icon';

import * as S from './styles';

import logo from '../../assets/logo-pokestore.png';

export function Header() {
  const [open, changeOpen] = useState(false);
  const { count, pokedex, total } = usePokedex();

  return (
    <S.Header>
      <S.Wrapper>
        <S.LinkHome to="/">
          <S.Logo src={logo} alt="Logo PokeStore" title="Logo PokeStore" />
        </S.LinkHome>

        <S.Form>
          <S.Input type="text" name="search" placeholder="Busque seu Pokémon" autoComplete="off" />
          <S.Button type="submit">
            <Icon name="icon-search" />
          </S.Button>
        </S.Form>

        <S.WrapperPokedex onClick={() => changeOpen(!open)}>
          <S.Count>{count}</S.Count>
          <Icon name="icon-pokedex" />

          {open && (
            <S.Pokedex className={pokedex.length > 0 ? '' : '-emptyPokedex'}>
              <S.Items>
                <S.Title className={pokedex.length > 0 ? '' : '-emptyPokedex'}>
                  {pokedex.length > 0 ? 'Minha Pokedex' : 'Sua Pokedex está vazia'}
                </S.Title>

                {pokedex.length > 0 && (
                  <S.Pokemons>
                    {pokedex.map((pokemon: IPokemon) => {
                      return (
                        <S.Pokemon key={pokemon.id}>
                          <S.LinkRedirect to={`/pokemon/${pokemon.slug}`}>
                            <S.Image src={pokemon.image} alt={pokemon.name} title={pokemon.name} />
                            <S.Infos>
                              <S.Name>{pokemon.name}</S.Name>
                              <S.Quantity>Quantidade: {pokemon.quantity}</S.Quantity>
                            </S.Infos>
                            <S.Price>
                              {pokemon.price.toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL',
                              })}
                            </S.Price>
                          </S.LinkRedirect>
                        </S.Pokemon>
                      );
                    })}
                  </S.Pokemons>
                )}
              </S.Items>

              {pokedex.length > 0 && total > 0 && (
                <S.Finish>
                  <S.TotalPrice>
                    Total:{' '}
                    {total.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </S.TotalPrice>

                  <S.FinishButton to="/pokedex">Catch 'Em All</S.FinishButton>
                </S.Finish>
              )}
            </S.Pokedex>
          )}
        </S.WrapperPokedex>
      </S.Wrapper>
    </S.Header>
  );
}
