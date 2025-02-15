import { StyleSheet } from 'react-native';
import {Colors, FontFamily, Metrics, Sizes} from '../../themes';

const styles = StyleSheet.create({
  banner: {
    width: Metrics.width,
    height: Metrics.height * 0.4,
    borderBottomEndRadius: Metrics.width / 2.5,
    borderBottomStartRadius: Metrics.width / 2.5,
    overflow: 'hidden',
  },
  animatedImage: {
    width: Metrics.width,
    height: Metrics.height * 0.28,
    position: 'absolute',
    zIndex: 5,
  },
  headerView: {
    height: Metrics.width / 1.7,
    paddingVertical: Sizes.padding,
    marginVertical: Sizes.marginLarge,
    justifyContent: 'space-between',
  },
  ramadanText: {
    fontFamily: FontFamily.boldItalic,
    fontSize: Sizes.h2,
    letterSpacing: 0.3,
    textAlign: 'center',
    color: Colors.golden,
  },
});

export default styles;
