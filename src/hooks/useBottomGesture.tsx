import {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';

function useSheetAnimation (
    screenHeight: any,
    Gesture: any) {
    const translateMaxY = screenHeight / 1.6;
    const translateMinY = screenHeight / 12;
    const snapPoints = [-translateMinY, -translateMaxY];

    const translateY = useSharedValue(-translateMinY);
    const context = useSharedValue({y: 0});

    const gesture = Gesture.Pan()

        .onStart(() => {
            context.value = { y: translateY.value };
        })
        .onUpdate((e: any) => {
            let nextTranslateY = e.translationY + context.value.y;
            if (nextTranslateY > -translateMinY) {
                nextTranslateY =
                    -translateMinY + (nextTranslateY + translateMinY) * 0.15; // Adjust factor as needed
            } else if (nextTranslateY < -translateMaxY) {
                nextTranslateY =
                    -translateMaxY + (nextTranslateY + translateMaxY) * 0.2; // Adjust factor as needed
            }

            translateY.value = nextTranslateY;
        })
        .onEnd(() => {
            const endValue = translateY.value;
            const closestSnapPoint = snapPoints.reduce((prev, curr) =>
                Math.abs(curr - endValue) < Math.abs(prev - endValue) ? curr : prev
            );
            translateY.value = withSpring(closestSnapPoint, { damping: 75 });
        });

    const reanimatedBottomStyle = useAnimatedStyle(() => {
        return {
            transform: [ {translateY: translateY.value} ],
        };
    });


    return {gesture, reanimatedBottomStyle};
}

export default useSheetAnimation;
