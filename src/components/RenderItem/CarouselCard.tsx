import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FontFamily, Metrics, Sizes} from '../../themes';
import {Restaurant} from '../../services/types';
import { thumbnailPath } from '../../services/endpoints';
import { Image } from 'react-native';
import Icon from '../Icon';

interface CarouselCardProps {
  item: Restaurant;
  index: number;
  active?: boolean;
  onPress: () => void;
  testID: string;
  testIDImage: string;
  discountPercent?: number;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  item,
  onPress,
  testID,
  testIDImage,
  discountPercent = 0,
}) => {
  const {id, name, pictureId} = item || {};
  return (
    <TouchableOpacity
      key={id}
      testID={'Carousel-Card' + testID}
      style={styles.slide}
      onPress={onPress}>
      <Image
        // blurRadius={3}
        testID={'Carousel-Card-Text' + testIDImage}
        style={styles.bgImage}
        resizeMode="stretch"
        source={{ uri: thumbnailPath + pictureId }}
      />
      <View style={styles.content}>
      <View style={styles.discountView}>
        {discountPercent &&
      <Text style={styles.discountText}> Flat {discountPercent}% OFF</Text>
        }
      <Icon name="sale" type="MaterialCommunityIcons" size={18} color={Colors.white} />
      </View>
        <View style={styles.hotelNameView}>
          <Text style={styles.hotelName}>{name}</Text>
        </View>
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  slide: {
    marginLeft: Sizes.marginSmall,
    overflow: 'hidden',
    height: '100%',
    width: Metrics.width * 0.86,
    borderRadius: Sizes.margin,
    flex:1,
  },
  bgImage: {
    height: '100%',
    width: '96%',
    borderRadius: Sizes.margin,
    overflow: 'hidden',
    position: 'static',
    zIndex: 0,
  },
  content: {
    width: '96%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    borderRadius: Sizes.margin,
    // padding: Sizes.padding,
    justifyContent: 'space-between',
    backgroundColor: Colors.scrim,
  },
  discountView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: Sizes.paddingSmall,
  },
  discountText: {
    color: Colors.white,
    fontSize: Sizes.h5,
    fontWeight: '900',
    boxShadow: [{
      offsetX: -10,
      offsetY: 10,
      inset: false,
    }],
    margin: Sizes.padding,
  },
  hotelNameView: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: Sizes.padding,
    borderBottomRightRadius: Sizes.padding,
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: Sizes.paddingSmall,
    paddingHorizontal: Sizes.padding,
    width: '100%',
    marginBottom: StyleSheet.hairlineWidth,
  },
  hotelName: {
    fontSize: Sizes.h6,
    fontWeight: 'bold',
    fontFamily: FontFamily.extraBold,
  },
});

export default CarouselCard;
