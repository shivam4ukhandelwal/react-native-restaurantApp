import React from 'react';
import {
  ColorValue,
  Text as ReactText,
  StyleSheet,
  TextProps,
} from 'react-native';
import {Colors, FontFamily, Sizes} from '../../themes';

interface TypographyProps extends TextProps {
  variant?: keyof typeof styles;
  color?: ColorValue;
  fontWeight?: | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
  lineHeight?: any;
}
const styles = StyleSheet.create({
  h1: {
    fontSize: Sizes.h1,
    fontWeight: 'bold',
    fontFamily: FontFamily.bold,
    letterSpacing: 0.2,
  },
  h2: {
    fontSize: Sizes.h1,
    fontWeight: 'bold',
    letterSpacing: 0.2,
    fontFamily: FontFamily.bold,
  },
  h3: {
    fontSize: Sizes.h3,
    fontWeight: 'bold',
    letterSpacing: 0.2,
    fontFamily: FontFamily.bold,
  },
  h4: {
    fontSize: Sizes.h4,
    fontWeight: 'bold',
    letterSpacing: 0.2,
    fontFamily: FontFamily.bold,
  },
  h5: {
    fontSize: Sizes.h5,
    fontWeight: 'bold',
    fontFamily: FontFamily.bold,
  },
  h6: {
    fontSize: Sizes.h6,
    fontWeight: 'bold',
    fontFamily: FontFamily.regular,
  },
  h7: {
    fontSize: Sizes.h7,
    fontWeight: 'bold',
    fontFamily: FontFamily.regular,
    letterSpacing: 0.2,
  },
  body: {
    fontSize: Sizes.h6,
    // fontFamily: FontFamily.bold,
    letterSpacing: 0.2,
  },
  caption: {
    fontSize: Sizes.h7,
    color: Colors.grey5,
    fontFamily: FontFamily.bold,
  },
});

const Text: React.FC<TypographyProps> = ({
  variant = 'body',
  style,
  fontWeight,
  color,
  children,
  lineHeight,
  ...props
}) => {
  return (
    <ReactText
      style={[
        styles[variant] || styles.body,
        {color: color || Colors.vipBlack},
        fontWeight && {fontWeight},
        lineHeight && {lineHeight},
        style,
      ]}
      {...props}>
      {children}
    </ReactText>
  );
};

export default Text;
