import React from 'react';
import {StyleSheet, Text, TextStyle, ViewStyle, StyleProp} from 'react-native';
import {View} from 'react-native';
import {Colors, FontFamily, Sizes} from '../../themes';

interface LabelBarProps {
  children?: React.ReactNode;
  lineColor?: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  testID: string;
  testIDLabelText: string;
}

const LabelBar: React.FC<LabelBarProps> = ({
  children,
  lineColor,
  textStyle,
  style,
  testID,
  testIDLabelText,
}) => {
  return (
    <View testID={testID} style={[styles.container, style]}>
      <View style={[styles.line, lineColor && {backgroundColor: lineColor}]} />
      <Text testID={testIDLabelText} style={[styles.label, textStyle]}>
        {children}
      </Text>
      <View style={[styles.line, lineColor && {backgroundColor: lineColor}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: Sizes.marginSmall,
  },
  label: {
    fontFamily: FontFamily.bold,
    fontSize: Sizes.h4,
    color: Colors.vipBlack,
  },
  line: {
    width: '15%',
    outlineColor: Colors.vipBlack,
    outlineStyle: 'dashed',
    outlineWidth: StyleSheet.hairlineWidth,
  },
});
export default LabelBar;
