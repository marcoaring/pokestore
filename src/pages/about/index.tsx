import styled from 'styled-components';

const AboutText = styled.p`
  display: flex;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const AboutPage = () => {
  return (
    <>
      <AboutText>This is the about page, where I tell you all about myself!</AboutText>
      <a className="App-link" href="/">
        Home
      </a>
    </>
  );
};

export default AboutPage;
