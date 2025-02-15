import React, {useMemo} from 'react';
import {View, StatusBar} from 'react-native';
import useHome from './useHome';
import LottieView from 'lottie-react-native';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import styles from './styles';
import {commonStyles, Metrics} from '../../themes';
import { Header, OutletRenderItem, RestaurantCarousel, SearchBarPlaceHolder } from '../../components';
import STRING from '../../utils/strings';
import { useAnimatedText } from '../../hooks/useScrollUpText';


const MAX_HEADER_HEIGHT = Metrics.height / 3.5;

const Home: React.FC = ({}) => {
  const {restaurants, onNavigateOutlet, onNavigateSearch} = useHome();

  const scrollY = useSharedValue(0);
  const {animateStyle, text: animatedText} = useAnimatedText([STRING.ramadam], 2000);
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = withTiming(event.contentOffset.y, {duration: 150});
  });



  // Smoother interpolations based on defined scroll values
  const headerHeight = useDerivedValue(() =>
    withTiming(
      interpolate(
        scrollY.value,
        [0, 50, 200, 400],
        [MAX_HEADER_HEIGHT, MAX_HEADER_HEIGHT * 0.85, MAX_HEADER_HEIGHT * 0.7, 0], // Reduce height
        'clamp',
      ),
      { easing: Easing.inOut(Easing.ease) }
    )
  );

  const headerTranslateY = useDerivedValue(() =>
    withTiming(
      interpolate(
        scrollY.value,
        [0, 50, 200, 400],
        [0, -MAX_HEADER_HEIGHT * 0.15, -MAX_HEADER_HEIGHT * 0.3, -MAX_HEADER_HEIGHT], // Moves it up
        'clamp',
      ),
      { easing: Easing.inOut(Easing.ease) }
    )
  );
  const headerOpacity = useDerivedValue(() =>
    withTiming(
      interpolate(
        scrollY.value,
        [0, 50, 100, 150, 300],
        [1, 0.8, 0.6, 0.3, 0],
        'clamp',
      ),
      // {duration: 200},
    ),
  );
  const borderRadius = useDerivedValue(() =>
    withTiming(
      interpolate(
        scrollY.value,
        [0, 50, 100, 200, 300, 400],
        [50, 45, 35, 25, 15, 0],
        'clamp',
      ),
      {duration: 100},
    ),
  );

  const animationStyle = useAnimatedStyle(() => ({
    height: headerHeight.value, // Now explicitly controlling height
    transform: [{ translateY: headerTranslateY.value }],
    opacity: headerOpacity.value,
  }));

  const headerStyle = useAnimatedStyle(() => ({
    borderBottomLeftRadius: borderRadius.value,
    borderBottomRightRadius: borderRadius.value,
  }));

  const TopRest = useMemo(
    () => (
      <View style={styles.headerView}>
        <RestaurantCarousel
          data={restaurants.slice(0, 5)}
          onPressItem={(item) => onNavigateOutlet(item, 20)}
        />
      </View>
    ),
    [restaurants, onNavigateOutlet],
  );

  return (
    <GestureHandlerRootView style={commonStyles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <Header style={headerStyle}>
        <Animated.View style={animationStyle}>
          <LottieView
            autoPlay
            style={styles.animatedImage}
            source={require('../../assets/Lottie/ramadan.json')}
          />
        <Animated.Text style={[styles.ramadanText, {top: MAX_HEADER_HEIGHT * 0.8}, animateStyle]}>{animatedText}</Animated.Text>
        </Animated.View>
        <SearchBarPlaceHolder onPress={onNavigateSearch} />
      </Header>
      <Animated.FlatList
        data={restaurants}
        keyExtractor={item => item?.id.toString()}
        scrollEventThrottle={16}
        ListHeaderComponent={TopRest}
        contentInsetAdjustmentBehavior={'automatic'}
        renderItem={({item}) => (
          <OutletRenderItem
            {...item}
            onPress={() => onNavigateOutlet(item)}
            testID={'outlet' + item.id}
            testIDText={'outlet-text' + item.name}
          />
        )}
        onScroll={scrollHandler}
      />
    </GestureHandlerRootView>
  );
};

export default Home;
