import * as React from 'react';
import {
  View as RNView,
  Animated as RNAnimated,
  Pressable as RNButton,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import { getStyle } from './button.style';
import { useTheme } from '../../theme';
import { ButtonProps } from './button.type';
import { getThemeProperty, getThemeColor } from '../../theme/theme.service';
import { getUnderlayColor, getRippleColor } from './button.service';

import { Text } from '../text/text.component';
import { textProps } from '../../types';
import { getSpecificProps } from '../../utilities';

import { useDefaultProps } from '../../utilities/useDefaultProps';

const Button: React.FunctionComponent<ButtonProps> = (incomingProps) => {
  const props = useDefaultProps('Button', incomingProps, {
    bg: 'blue600',
    p: 'lg',
    color: 'white',
    borderRadius: 'sm',
    loading: false,
    disabled: false,
    loaderSize: '2xl',
    loaderColor: 'white',
    block: false,
    position: 'relative',
    shadowColor: 'gray800',
    shadow: 0,
    fontSize: 'lg',
    rippleColor: 'white',
    ripple: true,
    borderless: false,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    onPress: () => {},
    flexDirection: 'row',
  });

  const {
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
    height,
    width,
    bg,
    minWidth,
    minHeight,
    suffix,
    style,
    fontSize,
    fontWeight,
    prefix,
    borderRadius,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    color: colorProp,
    loading,
    disabled,
    loaderColor,
    loaderSize,
    children,
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
    shadow,
    borderless,
    rippleColor,
    shadowColor,
    onPress,
    block,
    ripple,
    alignSelf,
    ...rest
  } = props;

  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);
  const underlayColor = getUnderlayColor(theme, props);
  const calculatedRippleColor = getRippleColor(theme, props);

  /**
   * renders children based on type
   */
  const renderChildren = () => {
    if (typeof children === 'string') {
      return (
        <Text
          {...getSpecificProps(props, ...textProps)}
          style={computedStyle.text}
        >
          {children}
        </Text>
      );
    }

    return children;
  };

  return (
    <RNButton
      {...rest}
      onPress={disabled || loading ? undefined : onPress}
      style={({ pressed }) => [
        computedStyle.button,
        pressed && !disabled && !loading && { backgroundColor: underlayColor },
      ]}
      android_ripple={
        !ripple
          ? {
              color: calculatedRippleColor,
              borderless,
            }
          : null
      }
    >
      {loading ? (
        <RNView style={computedStyle.container}>
          <RNView style={computedStyle.loadingContainer}>
            <RNActivityIndicator
              size={getThemeProperty(theme.fontSize, loaderSize)}
              color={getThemeColor(theme.colors, loaderColor)}
            />
          </RNView>
        </RNView>
      ) : (
        <RNAnimated.View style={computedStyle.container}>
          <>
            {prefix}
            {renderChildren()}
            {suffix}
          </>
        </RNAnimated.View>
      )}
    </RNButton>
  );
};

// Button.defaultProps = {
//   bg: 'blue600',
//   p: 'lg',
//   color: 'white',
//   borderRadius: 'sm',
//   loading: false,
//   disabled: false,
//   loaderSize: '2xl',
//   loaderColor: 'white',
//   block: false,
//   position: 'relative',
//   shadowColor: 'gray800',
//   shadow: 0,
//   fontSize: 'lg',
//   rippleColor: 'white',
//   ripple: true,
//   borderless: false,
//   alignItems: 'center',
//   justifyContent: 'center',
//   alignSelf: 'flex-start',
//   onPress: () => {},
//   flexDirection: 'row',
// };

export { Button };
