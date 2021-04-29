import styled from 'styled-components';

const MainText = styled.p`
  display: flex;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const ErrorPage = () => {
  return (
    <>
      <MainText>ERROR</MainText>
    </>
  );
};

export default ErrorPage;
