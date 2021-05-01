import styled from 'styled-components';
import media from 'styled-media-query';

export const Loading = styled.img`
  width: 80%;

  ${media.greaterThan('medium')`
    width: 30%;
  `}
`;
