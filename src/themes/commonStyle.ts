import {Platform, StyleSheet} from 'react-native';
import {FontFamily, Sizes} from './fonts';
import Colors from './color';
import Metrics from './metrics';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.noonBlueLight,
  },
  row: {
    flexDirection: 'row',
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizes.padding,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 2,
  },
  header: {
    backgroundColor: Colors.noonYellow,
    padding: Sizes.padding,
  },
  headerBg: {
    minHeight: Metrics.rfv(60),
    overflow: 'hidden',
    boxShadow: [
      {
        offsetX: 0.3,
        offsetY: -1.5,
        blurRadius: '2px',
        spreadDistance: '2px',
        color: Colors.grey2,
        inset: Platform.OS === 'android',
      },
    ],
  },
  headerText: {
    color: Colors.white,
    fontFamily: FontFamily.boldItalic,
    fontSize: Sizes.h2,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: Colors.vipBlack,
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0.6,

    elevation: 1,
  },
  titleName: {
    fontSize: Sizes.h5,
    fontWeight: 'bold',
    fontFamily: FontFamily.bold,
    color: Colors.vipBlack,
  },
  price: {
    fontSize: Sizes.h6,
    color: Colors.grey6,
    marginVertical: Sizes.marginSmall,
    fontFamily: FontFamily.regular,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 0.5,
    padding: Sizes.padding,
    marginBottom: Sizes.margin,
    alignItems: 'center',
  },
  thumbnail: {
    width: Metrics.rfv(80),
    height: Metrics.rfv(80),
    borderRadius: Sizes.padding,
    marginRight: Metrics.rfv(15),
  },
  flex1: {
    flex: 1,
  },
  noFlex: {
    flex: 0,
  },
  redBg: {
    backgroundColor: Colors.systemRedAlt,
  },
  whiteBg: {
    backgroundColor: Colors.white,
  },
  marginTop0: {
    marginTop: 0,
  },
  line: {
    width: '100%',
    height: 1,
    borderRadius: 1,
    backgroundColor: Colors.darkGrey,
    marginVertical: Sizes.padding,
  },
  strick: {
    textDecorationLine: 'line-through',
    color: Colors.systemRedAlt,
    textDecorationStyle: 'solid',
    fontSize: Sizes.h7,
  },
});

export default commonStyles;
