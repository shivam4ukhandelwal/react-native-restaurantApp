import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import styles from './styles';
import { RippleButton } from '../components/Button';
import { Colors, Sizes } from '../themes';
import Metrics from '../themes/metrics';
import { iconNameProps } from './types';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Icons: any = Animated.createAnimatedComponent(Ionicons as any);

// Tab Icon Props Type
interface TabBarIconProps {
  focused: boolean;
  iconName: string;
  label: string;
  onPress: () => void;
  activeColor?: string;
  inactiveColor?: string;
  index: number;
  testID?: string;
  accessibilityLabel?: string;
}

// Animated Tab Icon Component
const TabBarIcon: React.FC<TabBarIconProps> = ({
  focused,
  iconName,
  label,
  onPress,
  activeColor = Colors.systemOrange,
  inactiveColor = Colors.enbdBlack,
  testID,
  accessibilityLabel,
}) => {
  const animation = useSharedValue(focused ? 1 : 0);

  useEffect(() => {
    animation.value = withTiming(focused ? 1 : 0, { duration: 300 });
  }, [focused]);

  // Color Interpolation using Reanimated
  const colorStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        animation.value,
        [0, 1],
        [inactiveColor, activeColor]
      ),
      transform: [{ scale: focused ? 1.1 : 1 }],
    };
  });

  return (
    <RippleButton
      style={styles.iconContainer}
      onPress={onPress}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
    >
      <Animated.View style={[styles.tabIconView, colorStyle]}>
        <Icons
          name={iconName}
          size={Sizes.h5}
          style={colorStyle}
          color={colorStyle.color}
        />
      </Animated.View>
      <Animated.Text style={[styles.iconText, colorStyle]}>
        {label}
      </Animated.Text>
    </RippleButton>
  );
};

// Animated Moving Line Component
const AnimatedLine: React.FC<{
  translateX: Animated.SharedValue<number>;
  tabWidth: number;
}> = ({ translateX, tabWidth }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(translateX.value, { duration: 300 }) }],
    width: tabWidth * 0.5,
    marginHorizontal: tabWidth * 0.25,
  }));

  return <Animated.View style={[styles.animatedLine, animatedStyle]} />;
};

const ACTIVE_ICONS: iconNameProps = {
  Home: 'home',
  Cart: 'cart',
  Search: 'search',
};

const ICONS: iconNameProps = {
  Home: 'home-outline',
  Cart: 'cart-outline',
  Search: 'search-outline',
};

// Animated Bottom Tab Bar Component
const AnimatedTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const numberOfTabs = state.routes.length; // Total number of tabs
  const translateX = useSharedValue(0);
  const tabWidth = Metrics.width / numberOfTabs; // Dynamically calculate width

  // Update translateX when state.index changes
  useEffect(() => {
    translateX.value = withTiming(state.index * tabWidth, { duration: 300 });
  }, [state.index, tabWidth]);

  return (
    <View style={styles.tabBar} testID="animated-tab-bar">
      <AnimatedLine translateX={translateX} tabWidth={tabWidth} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        const iconName = isFocused
          ? ACTIVE_ICONS[route.name]
          : ICONS[route.name];

        return (
          <TabBarIcon
            key={route.key}
            focused={isFocused}
            label={options.tabBarLabel?.toString() || route.name}
            iconName={iconName}
            index={index}
            onPress={onPress}
            testID={`tab-${route.name.toLowerCase()}`}
            accessibilityLabel={`${route.name} Tab`}
          />
        );
      })}
    </View>
  );
};

export default AnimatedTabBar;
