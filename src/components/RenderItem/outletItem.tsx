import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Icon from '../Icon';
import Image from '../Image';
import {Restaurant} from '../../services/types';
import Card from '../Card';
import {commonStyles, Sizes} from '../../themes';

interface OutletRenderItemProps extends Restaurant {
  onPress: () => void;
  testID: string;
  testIDText: string;
}

const RenderOutletItem: React.FC<OutletRenderItemProps> = ({
  name = '',
  pictureId = '',
  // id = '4',
  description = '',
  rating = 4,
  onPress = () => {},
  testID,
  testIDText,
}) => {
  return (
    <Card
      testID={'outlet-item-' + testID}
      onPress={onPress}
      padding={0}
      marginTop={Sizes.marginLarge}
      style={styles.cardView}
      marginHorizontal={Sizes.marginLarge}>
      <View>
        <Image id={pictureId} resizeMode="stretch" style={styles.outletImage} />
        <View style={styles.companyName} />
      </View>
      <View style={styles.outletContent}>
        <View style={commonStyles.flex1}>
          <Text testID={'outlet-name-' + testIDText} style={styles.outletName}>
            {name}
          </Text>
          <Text numberOfLines={1} style={styles.description}>
            {description}
          </Text>
        </View>
        <View style={styles.ratingView}>
          <Text style={styles.ratingText}>{rating}</Text>
          <Icon name="star" type="FontAwesome" color={'white'} size={8} />
        </View>
      </View>
    </Card>
  );
};

export default RenderOutletItem;
