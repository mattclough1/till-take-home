import styled from 'styled-components';
import { Text } from '../../components';

const StyledErrorState = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorState = () => (
  <StyledErrorState>
    <Text $size="heading1" as="div" role="presentation">⚠️</Text>
    <Text $size="heading1" $color="grey">
      Something went wrong. Try refreshing.
    </Text>
  </StyledErrorState>
);
