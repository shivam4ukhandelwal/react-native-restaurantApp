import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from '../Icon';
import { Colors, FontFamily, Metrics, Sizes } from '../../themes';
import Text from '../Text';

interface CartButtonProps {
  itemCount: number;
}


const CartButton: React.FC<CartButtonProps> = ({ itemCount }) => {
    return (
      <View style={styles.cartButton}>
        <Icon type="MaterialCommunityIcons" name="shopping-cart" size={24} color={Colors.white} />
        {itemCount > 0 && (
          <View style={styles.badge}>
            <Text variant="h7" style={styles.badgeText}>{itemCount}</Text>
          </View>
        )}
      </View>
    );
  };

  const styles = StyleSheet.create({
    cartButton: {
      position: 'absolute',
      bottom: Sizes.marginLarge,
      right: Sizes.marginLarge,
      backgroundColor: Colors.systemRedAlt,
      padding: Sizes.padding,
      borderRadius: Metrics.rfv(50),
      flexDirection: 'row',
      alignItems: 'center',
    },
    badge: {
      position: 'absolute',
      top: -5,
      right: -5,
      backgroundColor: Colors.systemRedAlt,
      borderRadius: Sizes.padding,
      padding: Sizes.paddingSmall,
    },
    badgeText: {
      color: Colors.white,
      fontSize: Sizes.h6,
      fontFamily: FontFamily.regular,
    },
  });

  export default CartButton;
