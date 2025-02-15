import { StyleSheet } from 'react-native';
import { FontFamily, Metrics, Sizes, Colors } from '../../themes';

const styles = StyleSheet.create({
    backgroundImage: {
      width: Metrics.width,
      height: Metrics.height * 0.5,
      position: 'absolute',
      resizeMode: 'cover',
      zIndex: 0,
    },
    sectionHeader: {
      padding: Sizes.padding,
      backgroundColor: Colors.white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      zIndex: 20,
      bottom: 0,
      paddingHorizontal: Sizes.paddingLarge,
    },
    hideBorderTop: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    sectionTitle: {
      fontSize: Sizes.h5,
      fontFamily: FontFamily.bold,
    },
    separator: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: Colors.vipBlack,
      width: '100%',
    },
  });

  export default styles;
