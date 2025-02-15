import { useEffect, useState } from 'react';
import { useSharedValue, useAnimatedStyle, withTiming, Easing, runOnJS } from 'react-native-reanimated';


export const useAnimatedText = (textArray: string[] = [], intervalTime: number = 2000) => {
  const [textIndex, setTextIndex] = useState(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);

  const updateTextIndex = () => {
    setTextIndex((prev) => (prev < textArray.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      opacity.value = withTiming(0, { duration: 1000, easing: Easing.ease });
      translateY.value = withTiming(
        -20,
        { duration: 1000, easing: Easing.ease },
        (finished) => {
          if (finished) {
            runOnJS(updateTextIndex)();
            translateY.value = 20;
            opacity.value = 0;
            opacity.value = withTiming(1, { duration: 500, easing: Easing.ease });
            translateY.value = withTiming(0, { duration: 500, easing: Easing.ease });
          }
        }
      );
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
}, [textArray.length, intervalTime]);
    const animateStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
            opacity: opacity.value,
        };
    });
    return {text: textArray[textIndex], animateStyle};
};
