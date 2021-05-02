import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'styled-media-query';

export const Header = styled.header`
  background-color: ${(props) => props.theme.bg};
  width: 100%;
`;

export const Wrapper = styled.div`
  align-items: center;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  padding: 1em;
  text-align: center;

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

export const LinkHome = styled(Link)`
  width: 70%;
  order: 1;

  ${media.greaterThan('medium')`
    width: 232px;
  `}
`;

export const Logo = styled.img`
  margin-bottom: 15px;
  width: 100%;
`;

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

export const WrapperPokedex = styled.div`
  margin-top: -19px;
  order: 2;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  > svg {
    fill: #ffffff;
    width: 30px;
    height: 30px;
  }

  ${media.greaterThan('medium')`
    margin-top: 0;
    order: 3;

    > svg {
      width: 34px;
      height: 34px;
    }
  `}
`;

export const Count = styled.span`
  background-color: #ffffff;
  border-radius: 100%;
  color: ${(props) => props.theme.bg};
  font-size: 11px;
  font-weight: bold;
  padding: 3px 6px;
  position: absolute;
  right: -8px;
  top: -10px;
`;

export const Pokedex = styled.div`
  background-color: #ffffff;
  border: 2px solid ${(props) => props.theme.bg};
  color: #666666;
  max-width: 23.125em;
  min-width: 18.125em;
  position: absolute;
  right: -15px;
  text-align: left;
  top: 150%;
  width: 300px;
  z-index: 1;

  &.-emptyPokedex {
    align-items: center;
    display: flex;
    justify-content: center;
  }

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

export const Items = styled.div`
  padding: 15px;
`;

export const Title = styled.h3`
  border-bottom: 1px solid ${(props) => props.theme.bg};
  color: ${(props) => props.theme.bg};
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 5px;

  &.-emptyPokedex {
    border: none;
    color: #666666;
  }
`;

export const Pokemons = styled.ul`
  margin-top: 15px;
  list-style: none;
`;

export const Pokemon = styled.li`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const LinkRedirect = styled(Link)`
  align-items: center;
  color: #666666;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
`;

export const Image = styled.img`
  max-width: 2.5em;
  margin-right: 15px;
`;

export const Infos = styled.div`
  margin-right: 30px;
`;

export const Name = styled.p`
  font-weight: bold;
`;

export const Quantity = styled.span`
  font-size: 12px;
`;

export const Price = styled.span`
  font-weight: bold;
`;

export const Finish = styled.div`
  align-items: flex-end;
  background-color: #f2f2f2;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  padding: 15px;
`;

export const TotalPrice = styled.p`
  font-weight: bold;
  text-align: right;
  margin-bottom: 15px;
`;

export const FinishButton = styled(Link)`
  background-color: ${(props) => props.theme.bg};
  border: 2px solid ${(props) => props.theme.bg};
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px 15px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s linear;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.bg};
    cursor: pointer;
  }
`;
