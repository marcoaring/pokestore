import { useState } from 'react';

import { Icon } from '../icon';

import { capitalizeName } from '../../services/fetch/builder';

import * as S from './styles';

export function Search() {
  const [open, changeOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState<any>(null);

  const changeField = (val: string) => {
    if (val !== '') {
      const result: any = sessionStorage.getItem('POKEMONS');
      const parseResult = JSON.parse(result);

      if (parseResult) {
        const filteredResult = parseResult.filter((item: any) =>
          item.pokemon.name.toLowerCase().includes(val.toLowerCase())
        );
        setPokemons(filteredResult);

        changeOpen(true);
      }

      setSearch(val);
    } else {
      changeOpen(false);
    }
  };

  return (
    <S.Form>
      <S.Input
        type="text"
        name="search"
        placeholder="Busque seu Pokémon"
        onChange={(event) => changeField(event.target.value)}
        autoComplete="off"
      />
      <S.Button type="submit">
        <Icon name="icon-search" />
      </S.Button>

      {open && (
        <S.SearchResult>
          <S.Pokemons>
            {pokemons.length > 0 ? (
              pokemons.map((item: any) => {
                return (
                  <S.Pokemon key={item.pokemon.name}>
                    <S.LinkRedirect to={`/pokemon/${item.pokemon.name}`}>
                      <S.Name>{capitalizeName(item.pokemon.name)}</S.Name>
                    </S.LinkRedirect>
                  </S.Pokemon>
                );
              })
            ) : (
              <S.Pokemon>
                <S.Error>
                  Nenhum pokémon encontrado para o termo <strong>{search}</strong>
                </S.Error>
              </S.Pokemon>
            )}
          </S.Pokemons>
        </S.SearchResult>
      )}
    </S.Form>
  );
}
