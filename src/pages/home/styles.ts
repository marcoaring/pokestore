import styled from 'styled-components';
import media from 'styled-media-query';

export const Main = styled.main`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const Logo = styled.img`
  margin-bottom: 30px;
  max-height: 120px;
  max-width: 454px;
  width: 90%;

  ${media.greaterThan('medium')`
    width: 100%
  `}
`;

export const Informative = styled.p`
  font-size: 17px;
  letter-spacing: 1px;
  margin-bottom: 15px;
  max-width: 85%;
  text-align: center;

  ${media.greaterThan('medium')`
    max-width: 400px;
  `}
`;

export const Strong = styled.strong`
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: #386abb;
  border: 2px solid #386abb;
  color: #ffffff;
  letter-spacing: 1px;
  margin: 15px 0 30px;
  max-width: 85%;
  padding: 8px 0;
  text-transform: uppercase;
  transition: all 0.3s linear;
  width: 70%;

  &:hover {
    background-color: transparent;
    color: #000000;
    cursor: pointer;
  }

  ${media.greaterThan('medium')`
    max-width: 360px;
    padding: 15px 0;
  `}
`;

export const MagicLink = styled.a`
  color: #386abb;
  text-decoration: underline;
  transition: color 0.3s linear;

  &:hover {
    color: #000000;
    cursor: pointer;
  }
`;

export const RedirectLink = styled.a`
  color: #386abb;
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    color: #000000;
  }
`;
