import * as React from 'react';
import {
  View as RNView,
  ImageBackground as RNImageBackground,
} from 'react-native';

import { DivProps } from './div.type';
import { getStyle } from './div.style';
import { useTheme } from '../../theme';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Div: React.FunctionComponent<DivProps> = (incomingProps) => {
  const props = useDefaultProps('Div', incomingProps, {
    bg: 'transparent',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    borderRadius: 'none',
    shadow: 'none',
    position: 'relative',
    bgMode: 'cover',
    pointerEvents: 'auto',
    row: false,
    borderStyle: 'solid',
  });

  const {
    bg,
    height,
    width,
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
    minHeight,
    minWidth,
    maxWidth,
    maxHeight,
    position,
    style,
    flexDirection,
    row,
    borderRadius,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    children,
    bgImg,
    bgMode,
    alignItems,
    justifyContent,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    borderEndWidth,
    flexWrap,
    shadow,
    shadowColor,
    opacity,
    overflow,
    top,
    left,
    right,
    bottom,
    zIndex,
    ...rest
  } = props;
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);

  // if there is a bgImage prop, use ImageBackground
  // instead of regular View component
  if (bgImg) {
    return (
      <RNImageBackground
        source={bgImg}
        style={computedStyle.div}
        resizeMode={props.bgMode}
        imageStyle={computedStyle.image}
      >
        {children}
      </RNImageBackground>
    );
  }

  return (
    <RNView style={computedStyle.div} {...rest}>
      {children}
    </RNView>
  );
};

// Div.defaultProps = {
//   bg: 'transparent',
//   flexDirection: 'column',
//   flexWrap: 'nowrap',
//   rounded: 'none',
//   shadow: 'none',
//   shadowColor: 'gray900',
//   position: 'relative',
//   bgMode: 'cover',
//   pointerEvents: 'auto',
//   row: false,
//   borderStyle: 'solid',
// };

export { Div };
