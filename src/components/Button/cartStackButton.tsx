import React, {memo, useEffect, useState} from 'react';
import {
  Text,
  Animated,
  StyleSheet,
  Platform,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors, Metrics, Sizes} from '../../themes'; // Adjust based on your theme structure
import Icon from '../Icon';
import {useAppSelector} from '../../store/hook';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../routes/types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const BottomCartCard = () => {
  const {cartItems} = useAppSelector(state => state.cart);
  const [animatedValue] = useState(new Animated.Value(-50));
  const {navigate} =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const {bottom} = useSafeAreaInsets();

  const goToCart = () => {
    navigate('TabStack', {screen: 'Cart'});
  };
  useEffect(() => {
    if (cartItems.length > 0) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        delay: 1000,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
        delay: 1000,
      }).start();
    }
  }, [cartItems.length]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0], // Moves up when cart is not empty
  });

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{translateY}],
        },
        Platform.OS === 'ios' ? {bottom} : styles.bottomMargin,
      ]}>
      <Pressable style={styles.cartButton} onPress={goToCart}>
        <Icon name="cart" size={24} color="white" />
        <Text style={styles.cartText}>
          {cartItems.length} {cartItems.length > 1 ? 'items' : 'item'}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: Sizes.paddingLarge,
    left: Sizes.paddingLarge,
    right: Sizes.paddingLarge,
    backgroundColor: Colors.americanBlue,
    borderRadius: Metrics.rfv(10),
    padding: Sizes.paddingMid,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.vipBlack,
    boxShadow: [
      {
        offsetX: -1,
        offsetY: -1,
        spreadDistance: '1px',
        color: Colors.scrim,
        blurRadius: 10,
        inset: true,
      },
    ],
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  cartText: {
    color: Colors.white,
    fontSize: Metrics.rfv(16),
    fontWeight: 'bold',
    marginLeft: Sizes.margin,
  },
  bottomMargin: {
    bottom: Metrics.rfv(50),
  },
});
const BottomCartCardButton = memo(BottomCartCard);
export default BottomCartCardButton;
