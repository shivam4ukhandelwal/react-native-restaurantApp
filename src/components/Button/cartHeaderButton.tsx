import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import Icon from '../Icon';
import {Colors, Sizes} from '../../themes';
import Text from '../Text';
import {IconType} from '../Icon/types';

interface CartHeaderButtonProps extends TouchableOpacityProps {
  count?: number;
  onPress: () => void;
  iconName?: string;
  iconSize?: number;
  iconType?: IconType;
  iconColor?: string;
}

const CartHeaderButton: React.FC<CartHeaderButtonProps> = ({
  onPress,
  count = 0,
  iconName = 'cart',
  iconType = 'Ionicons',
  iconColor = Colors.black,
  iconSize = 24,
}) => (
  <TouchableOpacity onPress={() => onPress()} style={styles.cartButtonView}>
    <Icon type={iconType} name={iconName} size={iconSize} color={iconColor} />
    {count ? <Text style={styles.quanityText}>{count}</Text> : <></>}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  cartButtonView: {
    flexDirection: 'row',
  },
  quanityText: {
    position: 'absolute',
    top: -2,
    zIndex: 10,
    right: -1,
    fontSize: Sizes.h7,
    color: Colors.systemRedAlt,
  },
});

export default CartHeaderButton;
