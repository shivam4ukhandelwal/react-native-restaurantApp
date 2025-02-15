import { StyleSheet } from 'react-native';
import Metrics from '../themes/metrics';
import { Colors, FontFamily, Sizes } from '../themes';

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: Metrics.rfv(10),
    backgroundColor: Colors.white,
    height: Metrics.rfv(60),
    // borderRadius: Metrics.rfv(8),
    elevation: 5,
    position: 'relative',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 0,
  },
  tabIconView: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  animatedLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginHorizontal: Metrics.width * 0.05,
    height: 4,
    backgroundColor: Colors.systemOrange,
    borderRadius: 2,
  },
  iconText: {
    fontFamily: FontFamily.bold,
    fontSize: Sizes.h6,
  },
});

export default styles;
