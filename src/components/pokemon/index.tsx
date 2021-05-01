import IPokemon from './index.interface';

import * as S from './styles';

export function Pokemon({ pokemon }: IPokemon) {
  const addToPokedex = (id: number) => {
    //Function to add pokemon into pokedex
  };

  return (
    <S.PokemonCard>
      <S.PokemonImage>
        <S.LinkDescription to={`/pokemon/${pokemon.slug}`}>
          <S.Image src={pokemon.image} alt={pokemon.name} title={pokemon.name} />
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

      <S.Button onClick={() => addToPokedex(pokemon.id)}>Adicionar na Pokedex</S.Button>
    </S.PokemonCard>
  );
}
