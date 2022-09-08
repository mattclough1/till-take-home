import styled from 'styled-components';
import { withSpace } from '../../HOCs';

const Avatar = styled.img<{ $block?: boolean; }>`
  border-radius: 100%;
  width: 4rem;
  aspect-ratio: 1 / 1;
  display: ${({ $block }) => $block && 'block'}
`;

const AvatarWithSpace = withSpace(Avatar);

export { AvatarWithSpace as Avatar }

