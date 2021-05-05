import { usePokedex } from '../../hooks/pokedex';

import IPokemonComponent from './index.interface';

import * as S from './styles';

import imageNotFound from '../../assets/pokemon-not-found-image.png';

export function Pokemon({ pokemon }: IPokemonComponent) {
  const { count, setCount, pokedex, setPokedex, total, setTotal } = usePokedex();

  const addToPokedex = (event: React.FormEvent, poke: IPokemon) => {
    event.preventDefault();
    const newPokedex: any = pokedex;
    const pokemonPosition: IPokemon | any = newPokedex.findIndex(
      (item: IPokemon) => item.id === poke.id
    );
    const calcTotal = (total + poke.price).toFixed(2);

    if (pokemonPosition === -1) {
      setPokedex([...newPokedex, poke]);
      setCount(count + 1);
      sessionStorage.setItem('POKEDEX', JSON.stringify([...newPokedex, poke]));
      sessionStorage.setItem('COUNT', String(count + 1));
    } else {
      newPokedex[pokemonPosition].quantity = newPokedex[pokemonPosition].quantity + 1;
      setPokedex(newPokedex);
      sessionStorage.setItem('POKEDEX', JSON.stringify(newPokedex));
    }
    setTotal(parseFloat(calcTotal));
    sessionStorage.setItem('TOTAL', calcTotal);
  };

  return (
    <S.PokemonCard>
      <S.PokemonImage>
        <S.LinkDescription to={`/pokemon/${pokemon.slug}`}>
          <S.Image src={pokemon.image || imageNotFound} alt={pokemon.name} title={pokemon.name} />
        </S.LinkDescription>
      </S.PokemonImage>
      <S.PokemonInfos>
        <S.LinkDescription to={`/pokemon/${pokemon.slug}`}>
          <S.Info>{pokemon.name}</S.Info>
        </S.LinkDescription>
        <S.Info>
          {pokemon.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </S.Info>
      </S.PokemonInfos>

      <S.Button onClick={(event) => addToPokedex(event, pokemon)}>Adicionar na Pokedex</S.Button>
    </S.PokemonCard>
  );
}
