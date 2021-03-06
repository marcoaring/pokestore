import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: center;
  padding: 1em;
  width: 100%;

  ${media.between('medium', 'large')`
    max-width: 95%;
  `}

  ${media.greaterThan('medium')`
    margin: 0 auto;
    padding: 1.2em 0;
  `}

  ${media.greaterThan('large')`
    max-width: 80%;
  `}
`;

export const Logo = styled.img`
  display: block;
  margin: 0 auto 30px;
  width: 70%;

  ${media.greaterThan('medium')`
    width: auto;
  `}
`;

export const WrapperPokedex = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 15px;

  ${media.greaterThan('medium')`
    padding: 30px;
  `}
`;

export const WrapperPokemons = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  color: #666666;
  margin-bottom: 30px;
`;

export const PokemonsHeader = styled.div`
  display: none;

  ${media.greaterThan('medium')`
    border-bottom: 1px solid #e1e1e1;
    display: flex;
    margin-bottom: 15px;
    padding-bottom: 10px;
  `}
`;

export const Column = styled.div`
  &.-name {
    margin-bottom: 15px;
    width: 100%;

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      width: 70%;
    `}
  }

  &.-quantity {
    ${media.greaterThan('medium')`
      width: 20%;
    `}
  }

  &.-price {
    ${media.greaterThan('medium')`
      width: 10%;
    `}
  }

  &.-flex {
    align-items: center;
    display: flex;
  }
`;

export const PokemonsContent = styled.ul`
  display: flex;
  flex-flow: column;
  list-style: none;
`;

export const Pokemon = styled.li`
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 15px;

  ${media.greaterThan('medium')`
    flex-wrap: inherit;
    justify-content: inherit;
    width: 100%;
  `}
`;

export const PokemonImage = styled.img`
  width: 55px;
  margin-right: 15px;
`;

export const PokemonInfos = styled.div``;

export const PokemonName = styled.p`
  font-weight: bold;
  font-size: 18px;
`;

export const PokemonTechnicalInformation = styled.p`
  font-size: 11px;
`;

export const ButtonQuantity = styled.button`
  color: #000000;
  background-color: transparent;
  border: none;
  padding: 5px;
  font-size: 22px;

  &:hover {
    cursor: pointer;
  }
`;

export const InputQuantity = styled.input`
  width: 80px;
  border: none;
  text-align: center;

  ${media.greaterThan('medium')`
    width: 20%;
  `}
`;

export const PokemonsFooter = styled.div`
  align-items: flex-end;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  width: 100%;

  ${media.between('medium', 'large')`
    width: 20%;
  `}

  ${media.greaterThan('large')`
    width: 14.2%;
  `}
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.bg};
  border: 2px solid ${(props) => props.theme.bg};
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 8px 0;
  transition: all 0.3s linear;
  width: 100%;

  ${media.between('medium', 'large')`
    width: 25%;
  `}

  ${media.greaterThan('large')`
    width: 14.2%;
  `}

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.bg};
    cursor: pointer;
  }
`;

export const EmptyPokedex = styled.p`
  font-weight: bold;
  text-align: center;
  width: 100%;
`;
