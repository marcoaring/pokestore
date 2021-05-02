import { usePokedex } from '../../hooks/pokedex';

import IPokemonComponent from './index.interface';

import * as S from './styles';

import imageNotFound from '../../assets/pokemon-not-found-image.png';

export function Pokemon({ pokemon }: IPokemonComponent) {
  const { count, setCount, pokedex, setPokedex, total, setTotal } = usePokedex();

  const addToPokedex = (event: React.FormEvent, poke: IPokemon) => {
    event.preventDefault();
    const duplicated: IPokemon | any = pokedex.find((item: IPokemon) => item.id === poke.id);

    if (!duplicated) {
      setPokedex([...pokedex, poke]);
      setCount(count + 1);
    } else {
      poke.quantity = duplicated.quantity + 1;
    }
    setTotal(total + poke.price);
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
