import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
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
