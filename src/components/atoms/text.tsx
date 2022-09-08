import styled from 'styled-components';
import { withSpace } from '../../HOCs';
import { COLORS, TYPE_SCALE } from '../../styles';

interface TextProps {
  size?: keyof typeof TYPE_SCALE;
  color?: keyof typeof COLORS;
  align?: 'left' | 'center' | 'right' | 'justify';
}

const getFontSizeFromProps = ({ size }: TextProps) =>
  size ? TYPE_SCALE[size] : TYPE_SCALE.body;
const getFontColorFromProps = ({ color }: TextProps) =>
  color ? COLORS[color] : COLORS.black;

const Text = styled.span<TextProps>`
  font-size: ${getFontSizeFromProps};
  color: ${getFontColorFromProps};
  text-align: ${({ align }) => align};
`;

const TextWithSpace = withSpace(Text);

export { TextWithSpace as Text };
