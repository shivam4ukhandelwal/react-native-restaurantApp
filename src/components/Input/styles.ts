import { StyleSheet } from 'react-native';
import { Metrics, Colors, Sizes, normalizeText, FontFamily } from '../../themes';

const styles = StyleSheet.create({
    mainContainer: {
      borderColor: Colors.ddd,
      borderWidth: Metrics.rfv(1),
      paddingVertical: Metrics.rfv(8),
      backgroundColor: Colors.white,
      flexDirection: 'row',
      shadowOffset: {
        width: 20,
        height: 20,
      },
      height: Metrics.rfv(40),
      borderRadius: Sizes.radius,
      padding: 0,
      alignItems: 'center',
      paddingHorizontal: Sizes.padding,
      gap: 5,
      justifyContent: 'space-between',
      marginBottom: Sizes.padding,
      outlineColor: Colors.systemRed,
      outlineStyle: 'dashed',
      outlineWidth: StyleSheet.hairlineWidth,
    },
    inputInnerView: {
      flexDirection: 'row',
      width: '75%',
    },
    searchText: {
      color: Colors.vipBlack,
      fontSize: normalizeText(14),
      lineHeight: Metrics.rfv(22),
      fontFamily: FontFamily.regular,
    },
    messageStyle: {
      maxWidth: '90%',
      color: Colors.noonBlack,
      fontSize: normalizeText(14),
      lineHeight: Metrics.rfv(22),
      fontFamily: FontFamily.regular,
    },
    messageStyleBold: {
      maxWidth: '90%',
      color: Colors.noonBlack,
      fontWeight: 'bold',
      fontSize: normalizeText(14),
      lineHeight: Metrics.rfv(22),
      fontFamily: FontFamily.regular,
    },
    textInputStyle: {
      fontSize: normalizeText(14),
      color: Colors.black,
      height: Metrics.rfv(40),
      lineHeight: Metrics.rfv(18),
    },
    closeTextButton: {
      // marginLeft: Metrics.rfv(10),
      backgroundColor: Colors.borderBlueLight,
      paddingHorizontal: 5,
      paddingVertical: 2,
      borderRadius: 1,
    },
    closeText: {
      fontSize: normalizeText(14),
      color: Colors.americanBlue,
      fontWeight: 'bold',
      fontFamily: FontFamily.bold,
    },
  });

export default styles;
