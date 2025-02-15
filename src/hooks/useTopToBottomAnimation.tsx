import { useEffect } from 'react';
import { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

interface UseTopToBottomAnimationProps {
  duration?: number; // Animation duration in milliseconds
  delay?: number; // Delay before animation starts in milliseconds
  height: number;
}

const useTopToBottomAnimation = ({ duration = 500, delay = 0, height }: UseTopToBottomAnimationProps) => {
  const translateY = useSharedValue(0); // Start offscreen (above the screen)

  useEffect(() => {
    // Start the animation after the delay
    const timeout = setTimeout(() => {
      translateY.value = withTiming(height, {
        duration,
        easing: Easing.out(Easing.exp), // Smooth easing function
      });
    }, delay);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [duration, delay, translateY, height]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
    height: translateY.value,
    };
  });

  return animatedStyle;
};

export default useTopToBottomAnimation;
