import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';
import {commonStyles, Sizes} from '../../themes';


const HEADER_COLOR = ['#2B1055', '#7597DE', '#F8C471'];


interface HeaderProps extends ViewProps {
  children?: React.ReactNode;
  colors?: (string | number)[];
  start?: {x: number; y: number};
  end?: {x: number; y: number};
  locations?: number[];
  useAngle?: boolean;
  angleCenter?: {x: number; y: number};
  angle?: number;
  contentStyle?: StyleProp<ViewStyle>;
}

const Header: React.FC<HeaderProps> = ({
  children,
  colors = HEADER_COLOR,
  contentStyle,
  style,
  ...props
}) => {
  const {top} = useSafeAreaInsets();
  return (
    <Animated.View
    style={[commonStyles.headerBg, style]}
    >
    <LinearGradient
      colors={colors}
      {...props}>
      <View
        style={[
          {
            paddingTop: top,
            padding: Sizes.padding,
          },
          contentStyle,
        ]}>
        {children}
      </View>
    </LinearGradient>
    </Animated.View>
  );
};

export default Header;
