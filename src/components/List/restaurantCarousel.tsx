import React, {useEffect, useRef} from 'react';
import Animated, {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {commonStyles, Metrics} from '../../themes';
import CarouselCard from '../RenderItem/CarouselCard';
import styles from './styles';
import LabelBar from '../Bar/LabelBar';
import {Restaurant} from '../../services/types';
import STRING from '../../utils/strings';

interface TopRestaurantProps {
  data: Restaurant[];
  onPressItem: (item: Restaurant, index?: number) => void;
}

const TopRestaurant: React.FC<TopRestaurantProps> = ({data, onPressItem}) => {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index,
      animated: true,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      ref.current?.next();
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // const parallax =
  //   Platform.OS === "ios"
  //     ? parallaxLayout(
  //         {
  //           size: Metrics.width / 2,
  //           vertical: false,
  //         },
  //         {
  //           parallaxScrollingScale: 1,
  //           parallaxAdjacentItemScale: 0.8,
  //           parallaxScrollingOffset: 10,
  //         },
  //       )
  //     : undefined;


  return (
    <Animated.View style={commonStyles.container}>
      <LabelBar
        testID="Label-test-topResautant"
        testIDLabelText="Label-text-topResautant">
        {STRING.topRestaurants}
      </LabelBar>
      <Carousel
        testID={'Top-Restaurant-Carousel'}
        loop={true}
        ref={ref}
        width={Metrics.width - 20}
        height={Metrics.width / 2.2}
        snapEnabled={true}
        scrollAnimationDuration={3000}
        pagingEnabled={true}
        autoPlayReverse={true}
        autoPlayInterval={300}
        data={data}
        style={styles.carouselView}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 85,
        }}
        renderItem={({item, index}) => (
          <CarouselCard
            item={item}
            index={index}
            onPress={() => onPressItem(item)}
            testID={item.id}
            testIDImage={item.pictureId}
            discountPercent={20}
          />
        )}
      />
      <Pagination.Custom
        progress={progress}
        data={data || []}
        dotStyle={styles.dot}
        containerStyle={styles.dotView}
        onPress={onPressPagination}
        activeDotStyle={styles.activeDotView}
      />
    </Animated.View>
  );
};

export default TopRestaurant;
