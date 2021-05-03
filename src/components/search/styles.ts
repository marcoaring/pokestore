import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'styled-media-query';

export const Form = styled.form`
  width: 100%;
  position: relative;
  order: 3;

  ${media.greaterThan('medium')`
    width: 40%;
    order: 2;
  `}
`;

export const Input = styled.input`
  border: 0;
  padding: 15px;
  transition: box-shadow 0.3s linear;
  width: 100%;

  &:focus {
    box-shadow: -1px 1px 14px 0px rgba(255, 255, 255, 0.75);
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    cursor: pointer;
  }

  > svg {
    fill: ${(props) => props.theme.bg};
    width: 30px;
    height: 30px;
  }
`;

export const SearchResult = styled.div`
  background-color: #ffffff;
  border: 2px solid ${(props) => props.theme.bg};
  color: #666666;
  position: absolute;
  left: 0;
  text-align: left;
  top: 150%;
  width: 100%;
  z-index: 1;

  &:before {
    border-bottom: 12px solid #fff;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    content: '';
    height: 0;
    position: absolute;
    right: 20px;
    top: -12px;
    width: 0;
  }
`;

export const Pokemons = styled.ul`
  list-style: none;
`;

export const Pokemon = styled.li``;

export const LinkRedirect = styled(Link)`
  align-items: center;
  color: #666666;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  padding: 8px;

  &:hover {
    background-color: ${(props) => props.theme.bg};
    color: #ffffff;
  }
`;

export const Name = styled.p`
  font-weight: bold;
`;

export const Error = styled.p`
  font-weight: normal;
  padding: 8px;
  text-align: center;
`;
