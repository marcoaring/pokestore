import IPokemon from './index.interface';

import * as S from './styles';

export function Pokemon({ pokemon }: IPokemon) {
  return <S.Pokemon>{pokemon.name}</S.Pokemon>;
}
