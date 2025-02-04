import * as React from 'react';
import { Text as RNText } from 'react-native';

import { TextProps } from './text.type';
import { getStyle } from './text.style';
import { useTheme } from '../../theme';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Text: React.FunctionComponent<TextProps> = (incomingProps) => {
  const props = useDefaultProps('Text', incomingProps, {
    color: 'gray900',
    textAlign: 'auto',
    textTransform: 'none',
    fontSize: 'md',
    overflow: 'hidden',
    textAlignVertical: 'center',
  });

  const {
    width,
    height,
    bg,
    m,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    ms,
    p,
    paddingRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    flex,
    minHeight,
    minWidth,
    color,
    fontSize,
    children,
    textAlign,
    fontWeight,
    lineHeight,
    letterSpacing,
    textTransform,
    textDecorColor,
    textDecorStyle,
    fontStyle,
    textDecorLine,
    textAlignVertical,
    overflow,
    opacity,
    zIndex,
    style,
    ...rest
  } = props;
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);

  return (
    <RNText style={computedStyle.text} {...rest}>
      {children}
    </RNText>
  );
};

// Text.defaultProps = {
//   color: 'gray900',
//   textAlign: 'auto',
//   textTransform: 'none',
//   fontSize: 'md',
//   overflow: 'hidden',
// };

export { Text };
