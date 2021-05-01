import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from 'styled-media-query';

export const PokemonCard = styled.div`
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 6px;
  color: #666666;
  margin: 15px 0;
  padding: 15px;
  width: 98%;

  ${media.between('medium', 'large')`
    flex: 1 0 41%;
  `}

  ${media.greaterThan('medium')`
    margin: 15px;
  `}

  ${media.greaterThan('large')`
    flex: 1 0 21%;
  `}
`;

export const PokemonImage = styled.div`
  margin-bottom: 15px;
  text-align: center;
`;

export const LinkDescription = styled(Link)`
  color: #666666;
  text-decoration: none;
  transition: all 0.3s linear;

  img {
    transition: all 0.3s linear;

    &:hover {
      opacity: 0.7;
    }
  }

  &:hover {
    color: ${(props) => props.theme.bg};
  }
`;

export const Image = styled.img`
  display: block;
  height: auto;
  margin: 0 auto;
  max-width: 100%;

  ${media.greaterThan('medium')`
    height: 181px;
  `}
`;

export const PokemonInfos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Info = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.bg};
  border: 2px solid ${(props) => props.theme.bg};
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 15px 0;
  transition: all 0.3s linear;
  width: 100%;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.bg};
    cursor: pointer;
  }
`;
