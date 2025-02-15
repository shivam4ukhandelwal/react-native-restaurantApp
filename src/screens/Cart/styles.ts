import { StyleSheet } from 'react-native';
import { Colors, Metrics, Sizes } from '../../themes';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.noonBlueLight,
      // padding: Sizes.paddingLarge,
    },
    input: {
      backgroundColor: Colors.white,
      padding: Sizes.padding,
      borderRadius: Sizes.radius,
      marginBottom: Sizes.margin,
      borderWidth: 1,
      borderColor: Colors.ddd,
    },
    emptyText: {
      textAlign: 'center',
      fontSize: Sizes.h4,
      color: Colors.noonBlack,
      marginTop: Metrics.rfv(48),
    },
    contentPadding: {
      padding: Sizes.paddingLarge,
    },
    paddingRight: {
      paddingRight: Sizes.paddingLarge,
    },
    shippingView: {
      padding: Sizes.padding,
      gap: Sizes.padding,
      marginVertical: Metrics.rfv(30),
      marginHorizontal: Sizes.padding,
      borderTopWidth: 1,
      borderTopColor: Colors.grey1,
    },
    address: {
      flex: 1,
      paddingHorizontal: Sizes.paddingSmall,
      color: Colors.enbdBlack,
    },
  });

export default styles;
