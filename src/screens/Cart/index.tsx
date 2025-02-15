import React, {useMemo} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import useCartHook from './useCart';
import styles from './styles';
import STRING from '../../utils/strings';
import {
  EmptyScreen,
  RenderCartItem,
  CartFooterView,
  Text,
  Icon,
} from '../../components';
import {Colors, commonStyles} from '../../themes';
import BillSummaryModal from '../../components/Model/billModal';

const EmptyView = () => (
  <EmptyScreen title={STRING.yourCart} description={STRING.cartEmpty} />
);
const CartScreen = () => {
  const {
    taxTotal,
    platformFee,
    subTotal,
    discountTotal,
    totalAmount,
    cartItems,
    handleIncrease,
    handleDecrease,
    onCheckout,
    showSummary,
    setShowSummary,
  } = useCartHook();

  const Footer = useMemo(() => {
    return (
      <View style={styles.shippingView}>
        <Text variant="h5">{STRING.billSummary}</Text>
        <TouchableOpacity
          onPress={() => setShowSummary(true)}
          activeOpacity={0.8}
          style={commonStyles.rowBetween}>
          <View style={commonStyles.rowAlignCenter}>
            <Icon name="calculator-outline" size={20} />
            <Text
              style={[
                commonStyles.price,
                Number(discountTotal) > 0 ? commonStyles.strick : {},
              ]}>
              $ {subTotal}
            </Text>
            {discountTotal && (
              <Text style={commonStyles.price}>$ {totalAmount}</Text>
            )}
          </View>
          <Icon name="chevron-right" type="Octicons" size={20} />
        </TouchableOpacity>
        <Text color={Colors.darkGrey}>{STRING.includeTax}</Text>
      </View>
    );
  }, [totalAmount]);

  return (
    <View style={styles.container}>
      <BillSummaryModal
        show={showSummary}
        setShow={setShowSummary}
        totalAmount={totalAmount}
        subTotal={subTotal}
        discountTotal={discountTotal}
        tax={taxTotal}
        platformFee={platformFee}
      />
      <FlatList
        data={cartItems}
        renderItem={({item, index}) => (
          <RenderCartItem
            item={item}
            index={index}
            onAdd={handleIncrease}
            onDeduct={handleDecrease}
          />
        )}
        keyExtractor={item => item.name.toString()}
        contentContainerStyle={cartItems.length ? styles.contentPadding : {}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyView}
        ListFooterComponent={Footer}
        extraData={cartItems}
      />
      <CartFooterView
        disabled={!cartItems.length}
        onCheckout={onCheckout}
        isCartScreen={true}
        total={totalAmount}
        discount={discountTotal}
        subTotal={subTotal}
      />
    </View>
  );
};

export default CartScreen;
