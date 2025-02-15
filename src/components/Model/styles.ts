import {StyleSheet} from 'react-native';
import {Colors, Metrics, Sizes} from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.scrim,
    height: Metrics.height,
    width: Metrics.width,
  },
  content: {
    padding: Sizes.padding,
    paddingBottom: Metrics.rfv(48),
    backgroundColor: Colors.white,
    borderTopEndRadius: Sizes.paddingLarge,
    borderTopStartRadius: Sizes.paddingLarge,
  },
  outerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: Sizes.padding,
  },
  line: {
    width: Metrics.rfv(50),
    height: 4,
    backgroundColor: Colors.grey2,
    borderRadius: Sizes.paddingLarge,
    alignSelf: 'center',
    marginVertical: Sizes.padding,
  },
  closeIcon: {
    backgroundColor: Colors.scrim,
    height: Metrics.rfv(40),
    width: Metrics.rfv(40),
    borderRadius: Metrics.rfv(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  micIcon: {
    backgroundColor: Colors.systemRedAlt,
    height: Metrics.rfv(56),
    width: Metrics.rfv(56),
    borderRadius: Metrics.rfv(28),
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    alignItems: 'center',
    gap: Sizes.padding,
  },
  animatedListening: {
    height: Metrics.rfv(100),
    width: Metrics.rfv(100),
  },
  fWidthGap: {
    width: '95%',
    gap: Sizes.padding,
  },
});

export default styles;
