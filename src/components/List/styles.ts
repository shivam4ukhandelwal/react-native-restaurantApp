import {StyleSheet} from 'react-native';
import {Sizes, Colors} from '../../themes';

const styles = StyleSheet.create({
  dotView: {
    borderRadius: Sizes.margin,
    gap: 5,
  },
  dot: {
    height: Sizes.radius,
    width: Sizes.radius,
    borderRadius: Sizes.radius / 2,
    backgroundColor: Colors.grey2,
  },
  activeDotView: {
    width: Sizes.h1,
    backgroundColor: Colors.noonBlue,
  },
  carouselView: {
    columnGap: Sizes.padding,
    margin: Sizes.padding,
    borderRadius: Sizes.radius,
    overflow: 'hidden',
  },
});
export default styles;
