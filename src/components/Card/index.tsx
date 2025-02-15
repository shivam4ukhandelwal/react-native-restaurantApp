import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {Colors, Metrics, Sizes} from '../../themes';

export interface CardProps extends ViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  testID?: string;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  margin?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

/**
 * Card component for displaying content within a styled container.
 * It utilizes theming for dynamic styling based on the current theme context.
 */

const Card: React.FC<CardProps> = ({
  children,
  containerStyle,
  style,
  onPress,
  testID,
  flexDirection,
  margin,
  marginHorizontal,
  marginVertical,
  paddingVertical,
  paddingHorizontal,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  ...props
}) => {
   const containerStyl = {
      ...(margin || marginHorizontal || marginVertical || marginTop || marginBottom || marginLeft || marginRight) && {
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        marginHorizontal,
        marginVertical,
      },
   };
   const styleStyl = {
      ...(padding || paddingTop || paddingBottom || paddingLeft || paddingRight) && {
        padding,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingHorizontal,
        paddingVertical,
      },
   };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.cardContainer,containerStyle, containerStyl ]}
      activeOpacity={0.8}
      testID={testID}
      {...props}
      >
      <View style={styles.outerShadow} />
      <View style={styles.innerShadow} />
      <View style={[styles.content, style,  styleStyl, flexDirection && {flexDirection}]}>{children}</View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    overflow: 'hidden', // Ensure shadows don't overflow
    position: 'relative',
  },
  outerShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 8,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5, // For Android
  },
  innerShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: Sizes.radius,
    backgroundColor: Colors.white,
    shadowColor: Colors.white,
    shadowOffset: {width: -6, height: -6},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5, // For Android
  },
  content: {
    backgroundColor: Colors.white,
    borderRadius: Sizes.radius,
    padding: Metrics.rfv(15),
    margin: Sizes.marginSmall,
    position: 'relative',
    zIndex: 1, // Ensure content is above shadows
  },
});
