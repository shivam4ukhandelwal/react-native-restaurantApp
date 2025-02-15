import {StyleSheet} from 'react-native';
import {Colors, Metrics, Sizes} from '../../themes';

const styles = StyleSheet.create({
  outerView: {
    flex: 1, paddingBottom: Sizes.paddingLarge,
  },
  container: {
    flex: 1,
    padding: Sizes.paddingLarge,
    height: Metrics.height * 0.76,
  },
  addressCard: {
    gap: Sizes.paddingMid,
    paddingVertical: Sizes.paddingSmall,
  },
  cardContainer: {
    marginVertical: Metrics.rfv(20),
    paddingHorizontal: Sizes.padding,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  inputCardView: {
    backgroundColor: Colors.white,
    borderRadius: Sizes.padding,
    paddingVertical: Sizes.paddingLarge,
  },
  outerFix: {
    flex: 1,
  },
  paddingBottom: {
    height: Metrics.height * 0.24,
    backgroundColor: Colors.white,
  },
});

export default styles;
