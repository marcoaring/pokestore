import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from 'styled-media-query';

export const Navigation = styled.nav`
  align-items: center;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1em;
  text-align: center;
  width: 100%;

  ${media.greaterThan('medium')`
    flex-flow: row;
  `}
`;

export const Item = styled(Link)`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.bg};
  color: #000000;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 5px;
  padding: 10px 15px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s linear;

  &:hover {
    background-color: ${(props) => props.theme.bg};
    color: #ffffff;
    cursor: pointer;
  }

  &.-active {
    background-color: ${(props) => props.theme.bg};
    color: #ffffff;
    cursor: default;
  }

  ${media.greaterThan('medium')`
    width: 100%;
  `}
`;
