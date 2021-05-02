import styled from 'styled-components';

const MainText = styled.p`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bg};
  color: #ffffff;
`;

const PokedexPage = () => {
  return (
    <>
      <MainText>Pokedex</MainText>
    </>
  );
};

export default PokedexPage;
