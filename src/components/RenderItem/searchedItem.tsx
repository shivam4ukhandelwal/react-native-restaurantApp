import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Restaurant} from '../../services/types';
import styles from './styles';
import Image from '../Image';
import Text from '../Text';
import STRING from '../../utils/strings';

interface SearchItemProps {
  item: Restaurant;
  index?: number;
  onPress: () => void;
  testID?: string;
  testIDText?: string;
}

const RenderSearchItem: React.FC<SearchItemProps> = ({
  item,
  onPress,
  testID,
  testIDText,
}) => {
  return (
  <TouchableOpacity
    testID={testID}
    style={styles.card}
    activeOpacity={0.9}
    onPress={onPress}>
    <Image id={item.pictureId} style={styles.thumbnail} />
    <View style={styles.cardContent}>
      <Text style={styles.outletName}>{item.name}</Text>
      <Text testID={testIDText} style={styles.cityText}>
        {' '}
        {STRING.city}: {item.city}
      </Text>
    </View>
  </TouchableOpacity>
);
};

export default RenderSearchItem;
