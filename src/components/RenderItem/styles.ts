import {StyleSheet} from 'react-native';
import {Sizes, Metrics, FontFamily, Colors} from '../../themes';

const styles = StyleSheet.create({
  cardView: {
    margin: 0,
    padding: 0,
  },
  outletImage: {
    height: Metrics.height / 4.5,
  },
  companyName: {
    backgroundColor: Colors.scrim,
    height: Metrics.rfv(25),
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderBottomRightRadius: Sizes.radius,
    borderBottomLeftRadius: Sizes.radius,
  },
  outletContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Sizes.padding,
  },
  outletName: {
    fontSize: Sizes.h5,
    fontWeight: 'condensedBold',
    fontFamily: FontFamily.bold,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: Sizes.h7,
    color: Colors.grey2,
    flexWrap: 'wrap',
    width: '80%',
  },
  ratingView: {
    backgroundColor: Colors.systemGreen,
    borderRadius: Sizes.radius,
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    alignSelf: 'center',
  },
  ratingText: {
    fontSize: Sizes.h7,
    color: Colors.white,
    fontWeight: 'condensedBold',
    width: Metrics.rfv(18),
    textAlign: 'center',
  },
  thumbnail: {
    height: Metrics.width * 0.15,
    width: Metrics.width * 0.15,
    borderRadius: Sizes.radius,
    resizeMode: 'cover',
  },
  card: {
    flexDirection: 'row',
    gap: Sizes.paddingLarge,
    elevation: 0.5,
    backgroundColor: Colors.white,
    padding: Sizes.padding,
    // borderRadius: Sizes.padding,
    outlineWidth: StyleSheet.hairlineWidth,
    outlineColor: Colors.systemGreenTint,
    // margin: Sizes.padding,
    paddingVertical: Sizes.padding,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cityText: {
    fontSize: Sizes.h7,
    color: Colors.grey1,
    fontFamily: FontFamily.bold,
    fontWeight: 'bold',
  },
});
export default styles;
