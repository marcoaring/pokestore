import styled from 'styled-components';

const MainText = styled.p`
  display: flex;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const MainPage = () => {
  return (
    <>
      <MainText>This is the about page, where I tell you all about myself!</MainText>
      <a className="App-link" href="/sobre">
        Sobre
      </a>
    </>
  );
};

export default MainPage;
