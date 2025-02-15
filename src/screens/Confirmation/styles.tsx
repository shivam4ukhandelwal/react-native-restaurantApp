import {StyleSheet} from 'react-native';
import {Colors, FontFamily, Metrics, Sizes} from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
    gap: Metrics.height * 0.1,
  },
  content: {
    padding: Sizes.paddingLarge,
    flex: 1,
  },
  contentView: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: Sizes.padding,
  },
  image: {
    width: Metrics.width,
    height: Metrics.width * 0.4,
  },
  title: {
    fontSize: Sizes.h2,
    fontWeight: 'bold',
    color: Colors.vipBlack,
    marginTop: 10,
    fontFamily: FontFamily.extraBold,
  },
  subtitle: {
    fontSize: Sizes.h5,
    color: Colors.vipBlack,
    textAlign: 'center',
    fontFamily: FontFamily.bold,
    marginTop: 5,
  },

});

export default styles;
