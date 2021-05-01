import { Link } from 'react-router-dom';

import { Icon } from '../icon';

import * as S from './styles';

import logo from '../../assets/logo-pokestore.png';

export function Header() {
  return (
    <S.Header>
      <S.Wrapper>
        <Link to="/">
          <S.Logo src={logo} alt="Logo PokeStore" title="Logo PokeStore" />
        </Link>

        <S.Form>
          <S.Input type="text" name="search" placeholder="Busque seu Pokémon" autoComplete="off" />
          <S.Button type="submit">
            <Icon name="icon-search" />
          </S.Button>
        </S.Form>

        <S.Pokedex>
          <S.Count>0</S.Count>
          <Icon name="icon-pokedex" />
        </S.Pokedex>
      </S.Wrapper>
    </S.Header>
  );
}
