import React from 'react';
import {ScrollView, View} from 'react-native';
import {CreditCardInput, CreditCardView} from 'react-native-credit-card-input';
import useCheckout from './useCheckout';
import styles from './styles';
import STRING from '../../utils/strings';
import { CartFooterView, InputDataView, Card } from '../../components';

const CheckoutScreen = () => {
  const {
    address,
    setAddress,
    coupon,
    setCoupon,
    formData,
    setFormData,
    focusedField,
    setFocusedField,
    totalAmount,
    handlePayment,
    setEditAddress,
    isEditAddress,
    setEditCoupon,
    isEditCoupon,
    disabled,
  } = useCheckout();
  return (
  <ScrollView>
      <View style={styles.container}>
        <Card marginBottom={10} style={styles.addressCard}>
          <InputDataView
            title={STRING.addAddress}
            onPress={() => setEditAddress(!isEditAddress)}
            isEdit={isEditAddress}
            onSetInput={setAddress}
            input={address}
          />
          <InputDataView
            title={STRING.addCoupon}
            onPress={() => setEditCoupon(!isEditCoupon)}
            isEdit={isEditCoupon}
            onSetInput={setCoupon}
            input={coupon}
          />
        </Card>
        <CreditCardView
          focusedField={focusedField}
          type={formData?.values.type}
          number={formData?.values.number}
          expiry={formData?.values.expiry}
          cvc={formData?.values.cvc}
          style={styles.cardContainer}
        />
        <View style={{}}>
          <CreditCardInput
            autoFocus
            onChange={setFormData}
            onFocusField={setFocusedField}
            style={styles.inputCardView}
          />
        </View>
    </View>
    <View style={styles.paddingBottom}>
      <CartFooterView
          disabled={disabled}
          total={totalAmount}
          onCheckout={handlePayment}
        />
    </View>
    </ScrollView>
  );
};

export default CheckoutScreen;
