import styled from 'styled-components';
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

export const Logo = styled.img`
  margin-bottom: 15px;
  width: 70%;
  order: 1;

  ${media.greaterThan('medium')`
    margin-bottom: 0;
    width: 232px;
  `}
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

export const Pokedex = styled.div`
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
