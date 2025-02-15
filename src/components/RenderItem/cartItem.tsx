import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Image from '../Image';
import { Colors, commonStyles, FontFamily, Metrics, Sizes } from '../../themes';
import { CartItem } from '../../services/types';
import Text from '../Text';
import Card from '../Card';
import { getDiscount } from '../../utils/helper';

interface  RenderCartItemPorps {
    item: CartItem;
    index: number;
    onAdd: (item: CartItem) => void;
    onDeduct: (item: CartItem) => void;
}

const renderCartItem: React.FC<RenderCartItemPorps> = ({ item, onAdd, onDeduct }) => (
    <Card marginTop={Sizes.margin} style={styles.card} flexDirection={'row'}>
      <Image id={item.pictureId} style={commonStyles.thumbnail} />
      <View style={styles.content}>
        <Text style={commonStyles.titleName}>{item.name}</Text>
        <View style={commonStyles.rowAlignCenter}>
        <Text style={[commonStyles.price, item.discount ? commonStyles.strick : {}]}>$ {item.price?.toFixed(2)}</Text>
        {
          item.discount &&
        <Text style={commonStyles.price}>$ {getDiscount(item.price || 0, item.discount)?.toFixed(2)}</Text>
        }
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => onDeduct(item)} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => onAdd(item)} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );

  const styles = StyleSheet.create({
    card: {
        paddingVertical: Sizes.paddingSmall,
        paddingHorizontal: Sizes.padding,
    },
    content: {
      flex: 1,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      button: {
        backgroundColor: Colors.systemOrange,
        borderRadius: Sizes.radius,
        paddingHorizontal: Sizes.padding,
        paddingVertical: Metrics.rfv(4),
        marginHorizontal: Sizes.marginSmall,
      },
      buttonText: {
        color: Colors.white,
        fontSize: Sizes.h6,
        fontWeight: 'bold',
        fontFamily: FontFamily.bold,
      },
      quantity: {
        fontSize: Sizes.h6,
        fontWeight: 'bold',
      },
  });


  export default renderCartItem;
