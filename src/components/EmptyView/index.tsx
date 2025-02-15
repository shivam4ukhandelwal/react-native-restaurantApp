import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import Text from '../Text';
import STRING from '../../utils/strings';
import {Colors, FontFamily, Metrics, Sizes} from '../../themes';
import LottieView from 'lottie-react-native';

interface EmptyScreenProps {
  isLoading?: boolean;
  title?: string;
  description?: string;
  imageSource?: any;
  show?: boolean;
  refreshingText?: string;
}

const EmptyScreen: React.FC<EmptyScreenProps> = ({
  isLoading,
  title = STRING.noItemFound,
  refreshingText = STRING.fetchingRestaurants,
  description = STRING.checkLater,
}) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withSpring(1);
    return () => {};
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <LottieView
          source={require('../../assets/Lottie/noon.json')}
          style={styles.image}
          autoPlay
          loop
        />
        <Text style={styles.loadingText}>{refreshingText}</Text>
      </View>
    );
  }

  return (
    <Animated.View style={[styles.container, {opacity}]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
        <Image
          source={require('../../assets/Image/logo.jpg')}
          style={styles.image}
        />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    height: Metrics.height,
    width: Metrics.width,
    paddingBottom: Metrics.height * 0.2,
  },
  loadingText: {
    marginTop: Sizes.padding,
    fontSize: Sizes.h4,
    fontFamily: FontFamily.regular,
    color: Colors.grey1,
  },
  image: {
    width: Metrics.width * 0.4,
    height: Metrics.width * 0.4,
    resizeMode: 'contain',
    opacity: 0.2,
  },
  title: {
    fontSize: Sizes.h4,
    fontWeight: 'bold',
    color: Colors.noonBlack,
    marginTop: Sizes.marginLarge,
  },
  description: {
    fontSize: Sizes.h6,
    color: Colors.grey1,
    textAlign: 'center',
    marginTop: Sizes.margin,
  },
});

export default EmptyScreen;
