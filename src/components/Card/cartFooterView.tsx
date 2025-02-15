import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {Colors, commonStyles, FontFamily, Metrics, Sizes} from '../../themes';
import STRING from '../../utils/strings';
import Icon from '../Icon';

interface CartFooterProps {
  subTotal?: number| string;
  handleClearCart?: () => void;
  onCheckout: () => void;
  disabled: boolean;
  total: number | string;
  discount?: number | string;
  isCartScreen?: boolean;
}


const CartFooter: React.FC<CartFooterProps> = ({
  total,
  handleClearCart,
  onCheckout,
  disabled,
  isCartScreen,
}) => {
  // const isCartScreen = false;
  if(isCartScreen && disabled) {return <></>;}
  return (
    <View style={styles.footer}>
        {isCartScreen ? (
          <View style={commonStyles.rowAlignCenter}>
            <Icon name="credit-card" type="Entypo" size={16} />
            <Text style={styles.rowText}>
              {STRING.payUsing}
            </Text>
            <Icon
              name="caretup"
              type="AntDesign"
              size={10}
              color={Colors.grey1}
            />
          </View>
        ) : (
          <></>
        )}
        <TouchableOpacity
          onPress={onCheckout}
          disabled={disabled}
          style={[styles.footerButton, !isCartScreen && commonStyles.flex1, disabled && styles.disabledStyle]}>
          <Text style={styles.footerButtonText}>
          ${total}  {handleClearCart ? STRING.checkout : STRING.payNow}
          </Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 1,
    borderColor: Colors.ddd,
    backgroundColor: Colors.white,
    padding: Sizes.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowText: {
    fontFamily: FontFamily.bold,
    fontSize: Sizes.h7,
    letterSpacing: 0.2,
    lineHeight: Sizes.h4,
    color: Colors.grey1,
  },

  footerButton: {
    backgroundColor: Colors.systemOrange,
    paddingVertical: Sizes.padding,
    paddingHorizontal: Sizes.paddingLarge,
    borderRadius: Sizes.radius,
    alignItems: 'center',
    marginHorizontal: Sizes.marginSmall,
    minWidth: Metrics.width / 2.2,
    opacity: 1,
  },
  footerButtonText: {
    color: Colors.white,
    fontSize: Sizes.h5,
    fontWeight: 'bold',
    fontFamily: FontFamily.bold,
  },
  disabledStyle: {
    backgroundColor: Colors.vipDisable,
    opacity: 0.8,
  },
});

export default CartFooter;
