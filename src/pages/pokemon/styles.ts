import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 1em;
  width: 100%;
  justify-content: center;

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

export const Pokemon = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  ${media.greaterThan('medium')`
    width: auto;
  `};
`;

export const Title = styled.h1`
  align-items: center;
  border-bottom: 2px solid #000000;
  display: flex;
  font-size: 40px;
  justify-content: space-between;
  margin-bottom: 60px;
  padding-bottom: 10px;
  text-align: center;
  width: 100%;
`;

export const LinkBack = styled(Link)`
  color: #000000;
  font-size: 12px;
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    color: ${(props) => props.theme.bg};
  }
`;

export const WrapperImage = styled.div`
  display: flex;
  width: 100%;

  ${media.greaterThan('medium')`
    width: auto;
  `};
`;

export const Image = styled.img`
  display: block;
  height: auto;
  margin: 0 auto 60px;
  width: 100%;

  ${media.greaterThan('medium')`
    margin: 0 60px 0;
    max-width: 100%;
    width: 320px;
  `}
`;

export const Informations = styled.div`
  align-items: flex-end;
  display: flex;
  flex-flow: column;
  width: 100%;

  ${media.greaterThan('medium')`
    width: auto;
  `};
`;

export const Datasheet = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 30px;
  width: 100%;

  ${media.greaterThan('medium')`
    display: flex;
    justify-content: space-between;
    min-width: 400px;
    width: auto;
  `};
`;

export const Items = styled.ul`
  list-style: none;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  ${media.greaterThan('medium')`
    margin-bottom: 0;
  `};
`;

export const Item = styled.li`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ItemTitle = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.bg};
  border: 2px solid ${(props) => props.theme.bg};
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 8px 15px;
  transition: all 0.3s linear;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.bg};
    cursor: pointer;
  }
`;
