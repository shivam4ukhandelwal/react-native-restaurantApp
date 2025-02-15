import React, {  } from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from '../Icon';
import { Colors, FontFamily, Metrics, Sizes } from '../../themes';
import { useAnimatedText } from '../../hooks/useScrollUpText';

const placeText = ['restaurant', 'cuisine', 'pizza'];


interface SearchBarPlaceHolderProps {
  onPress: () => void;
  animatedLabelList?: string[];
  style?: StyleProp<ViewStyle>;
}

const SearchBarPlaceHolder: React.FC<SearchBarPlaceHolderProps> = ({
  onPress,
  animatedLabelList = placeText,
  style,
}) => {
  const {text, animateStyle} = useAnimatedText(animatedLabelList, 3000);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.card, style]}>
      <Icon name="search" type="Feather" color={Colors.systemRed} size={20} />
      <Animated.View style={styles.labelContent}>
        <Animated.Text style={styles.labelText}>
          Search
        </Animated.Text>
        <Animated.Text style={[styles.labelBoldText, animateStyle]}>
          {text}
        </Animated.Text>
      </Animated.View>
      <Icon name="mic" type="Feather" color={Colors.systemRed} size={16} />
    </TouchableOpacity>
  );
};
export default SearchBarPlaceHolder;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    marginHorizontal: Metrics.rfv(20),
    shadowOffset: {
      width: 20,
      height: 20,
    },
    height: Metrics.rfv(40),
    borderRadius: Sizes.radius,
    padding: 0,
    alignItems: 'center',
    paddingHorizontal: Sizes.padding,
    gap: 20,
    marginBottom: 10,
    outlineColor: Colors.systemRed,
    outlineStyle: 'dashed',
    outlineWidth: StyleSheet.hairlineWidth,
  },
  labelText: {
    fontSize: Sizes.h5,
    fontFamily: FontFamily.regular,
    color: Colors.grey1,
  },
  labelBoldText: {
    fontSize: Sizes.h5,
    fontFamily: FontFamily.bold,
    color: Colors.grey1,
    fontWeight: 'bold',
  },
  labelContent: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    gap: Sizes.marginSmall,
  },
});
