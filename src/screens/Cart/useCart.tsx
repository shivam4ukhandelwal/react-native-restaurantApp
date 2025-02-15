import React from 'react';
import {useLayoutEffect, useState} from 'react';
import {useAppSelector, useDispatch} from '../../store/hook';
import {CartItem} from '../../services/types';
import {addToCart, emptyCart, removeFromCart} from '../../store/Slice/cart';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../routes/types';
import {Icon} from '../../components';
import {Colors} from '../../themes';
import styles from './styles';

const useCartHook = () => {
  const dispatch = useDispatch();
  const {navigate, setOptions} =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const {cartItems, storeId} = useAppSelector(state => state.cart);
  const [address, setAddress] = useState('');
  const [coupon, setCoupon] = useState('');
  const [showSummary, setShowSummary] = useState(false);

   const subTotal = cartItems?.reduce((sum, {price = 0, quantity = 0}) => sum + (price * quantity), 0);
   const discountTotal = cartItems?.reduce((sum, {price = 0, quantity = 0, discount = 1}) => sum +  ((price * quantity) / 100 * discount), 0);
   const discountedPrice = (subTotal - discountTotal);
   const taxTotal = discountedPrice * 0.05;
   const platformFee = 1;
   const totalAmount = (discountedPrice + platformFee + taxTotal);

  const handleClearCart = () => {
    dispatch(emptyCart());
  };
  const handleDecrease = (item: CartItem) => {
    dispatch(removeFromCart(item));
  };
  const CartIcon = () => {
    if (cartItems.length === 0) {
      return null;
    }
    return (
      <Icon
        name="remove-shopping-cart"
        type="MaterialIcons"
        color={Colors.systemRedAlt}
        onPress={handleClearCart}
        size={26}
        containerStyle={styles.paddingRight}
      />
    );
  };

  useLayoutEffect(() => {
    setOptions({
      headerRight: CartIcon,
    });
  }, [cartItems.length]);

  const handleIncrease = (item: CartItem) => {
    dispatch(addToCart({cartItem: item, storeId}));
  };

  const onCheckout = () => {
    navigate('Checkout');
  };

  return {
    subTotal: subTotal.toFixed(2),
    discountTotal: discountTotal.toFixed(2),
    totalAmount: totalAmount?.toFixed(2),
    platformFee,
    taxTotal,
    cartItems,
    address,
    setAddress,
    coupon,
    setCoupon,
    handleClearCart,
    handleIncrease,
    handleDecrease,
    onCheckout,
    showSummary,
    setShowSummary,
  };
};

export default useCartHook;
