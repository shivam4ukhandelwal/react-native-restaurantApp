import React from 'react';
import {StyleProp, View, ViewProps} from 'react-native';
import Text from '../Text';
import {commonStyles, Sizes} from '../../themes';
import Icon from '../Icon';
import {IconType} from '../Icon/types';

interface RowLineItemProps {
  label: string;
  value?: string | number;
  iconName?: string;
  containerStyle?: StyleProp<ViewProps>;
  type?: IconType;
  labelType?: 'small' | 'medium' | 'large';
  color?: string;
  size?: number;
}

const RowLineItem = ({
  label,
  value,
  iconName,
  containerStyle,
  type = 'MaterialCommunityIcons',
  color,
  size,
}: RowLineItemProps) => {
  if (!value) {
    return <></>;
  }
  const style = {
    ...(color && {color}),
    ...(size && {fontSize: size}),
  };
  return (
    <View style={[commonStyles.rowBetween, containerStyle]}>
      <View style={commonStyles.rowAlignCenter}>
        {iconName && (
          <Icon color={color} name={iconName} size={Sizes.h5} type={type} />
        )}
        <Text variant="h5" style={style} lineHeight={Sizes.h2}>
          {label}
        </Text>
      </View>
      <Text style={style}>$ {value}</Text>
    </View>
  );
};

export default RowLineItem;
