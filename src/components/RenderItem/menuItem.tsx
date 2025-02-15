import React from 'react';
import {MenuItem, Restaurant} from '../../services/types';
import {View, StyleSheet} from 'react-native';
import Icon from '../Icon';
import {Colors, commonStyles, FontFamily, Metrics, Sizes} from '../../themes';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../store/hook';
import {addToCart, removeFromCart} from '../../store/Slice/cart';
import Image from '../Image';
import Text from '../Text';

interface MenuRenderItemProps extends MenuItem {
  name: string;
  description: string;
  parent: Restaurant;
  index: number;
}

interface ButtonProps {
  totalItems: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
}

const Button: React.FC<ButtonProps> = ({
  totalItems,
  handleIncrease,
  handleDecrease,
}) => {
  if (totalItems === 0) {
    return (
      <Text onPress={handleIncrease} style={styles.addButton}>
        Add
      </Text>
    );
  }

  return (
    <View style={styles.actionContainer}>
      <Icon
        type="Feather"
        disabled={!totalItems}
        onPress={handleDecrease}
        containerStyle={styles.iconButton}
        name="minus"
        size={9}
        color="red"
      />
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityText}>{totalItems}</Text>
      </View>
      <Icon
        name="plus"
        type="Feather"
        size={9}
        color="red"
        containerStyle={styles.iconButton}
        onPress={handleIncrease}
      />
    </View>
  );
};

const MenuRenderItem: React.FC<MenuRenderItemProps> = ({
  name,
  description,
  parent,
  index,
}) => {
  const dispatch = useDispatch();
  const {cartItems, storeId} = useAppSelector(state => state.cart);
  const currentItem: any =
    (storeId === parent.id &&
      cartItems?.filter(cartItem => cartItem.name === name)?.[0]) ||
    {};

  const handleDecrease = () => {
    dispatch(removeFromCart({id: parent.id, name}));
  };

  const totalItems = currentItem?.quantity || 0;
  const customPrice: number = Math.floor(
    Number(parent.pictureId) * (5 + index) || 50,
  );

  const handleIncrease = () => {
    const params = {
      storeId: parent.id,
      cartItem: {name, pictureId: parent.pictureId, price: customPrice, discount: parent.discount},
    };
    dispatch(addToCart(params));
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={commonStyles.rowAlignCenter}>
          <Text style={[styles.price, parent.discount ? styles.strick : {}]}>
            $ {customPrice}
          </Text>
          {parent.discount && (
            <Text style={styles.price}>
              $ {(customPrice * (100 - parent?.discount)) / 100}
            </Text>
          )}
        </View>
      </View>
      <View>
        <Image id={parent.pictureId} style={styles.image} />
        <View style={styles.buttonView}>
          <Button
            totalItems={totalItems}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    padding: Metrics.rfv(25),
  },
  buttonView: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -Sizes.margin,
  },
  image: {
    width: Metrics.width * 0.2,
    height: Metrics.width * 0.2,
    borderRadius: Sizes.padding,
    marginRight: Metrics.rfv(2),
  },
  detailsContainer: {
    flex: 1,
    marginLeft: Sizes.margin,
  },
  name: {
    fontSize: Sizes.h6,
    fontFamily: FontFamily.bold,
    letterSpacing: 0.2,
  },
  description: {
    color: Colors.grey1,
    paddingTop: Sizes.paddingSmall,
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizes.padding,
  },
  price: {
    color: Colors.systemGreen,
    fontWeight: 'bold',
    marginTop: Sizes.padding,
  },
  strick: {
    textDecorationLine: 'line-through',
    color: Colors.systemRedAlt,
    textDecorationStyle: 'solid',
    fontSize: Sizes.h7,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: Sizes.paddingSmall,
    borderRadius: Sizes.radius,
    outlineWidth: 1,
    outlineColor: Colors.grey2,
  },
  iconButton: {
    outlineColor: Colors.systemRed,
    outlineWidth: 1,
    padding: Metrics.rfv(3),
  },
  disabled: {
    opacity: 0.5,
  },
  quantityContainer: {
    padding: Metrics.rfv(4),
    marginHorizontal: Metrics.rfv(3),
  },
  quantityText: {
    fontWeight: 'bold',
    fontSize: Sizes.h6,
    fontFamily: FontFamily.bold,
  },
  addButton: {
    outlineWidth: 1,
    outlineColor: Colors.grey2,
    backgroundColor: Colors.white,
    color: Colors.systemGreen,
    borderRadius: Sizes.radius,
    paddingHorizontal: Sizes.padding,
    paddingVertical: Metrics.rfv(3),
    alignSelf: 'center',
  },
});

export default MenuRenderItem;
