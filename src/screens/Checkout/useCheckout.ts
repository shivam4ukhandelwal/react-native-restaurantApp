import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../store/hook';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {
  CreditCardFormData,
  CreditCardFormField,
} from 'react-native-credit-card-input';
import {emptyCart} from '../../store/Slice/cart';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../routes/types';
import { getDiscount } from '../../utils/helper';

const useCheckout = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  const {cartItems} = useAppSelector(state => state.cart);
  const dispatch = useDispatch();
  const [focusedField, setFocusedField] = useState<CreditCardFormField>();
  const [formData, setFormData] = useState<CreditCardFormData>();
  const [coupon, setCoupon] = useState('');
  const [address, setAddress] = useState('');
  const [isEditAddress, setEditAddress] = useState(false);
  const [isEditCoupon, setEditCoupon] = useState(false);

  const discountedPrice = cartItems.reduce(
    (sum, item) => sum + getDiscount(item.price, item.discount) * (item.quantity ?? 0),
    0,
  );
  const taxTotal = discountedPrice * 0.05;
  const platformFee = 1;
  const totalAmount = (discountedPrice + platformFee + taxTotal);

  const disabled = !formData?.values.number || !formData?.values.expiry || !formData?.values.cvc;


  const handlePayment = () => {
    dispatch(emptyCart());
    navigate('Confirmation');
  };

  const onClear = () => {
    dispatch(emptyCart());
    navigate('TabStack', {screen: 'Home'});
  };

  return {
    navigate,
    handlePayment,
    onClear,
    formData,
    coupon,
    address,
    totalAmount,
    setFormData,
    setCoupon,
    setAddress,
    focusedField,
    setFocusedField,
    setEditAddress,
    isEditAddress,
    setEditCoupon,
    isEditCoupon,
    disabled,
  };
};
export default useCheckout;
