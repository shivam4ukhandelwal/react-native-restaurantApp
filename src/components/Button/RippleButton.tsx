import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  StyleSheet,
  ViewStyle,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
} from 'react-native';
import { Colors } from '../../themes';

interface RippleButtonProps extends TouchableOpacityProps, TouchableNativeFeedbackProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  rippleColor?:  string;
  onPress?: () => void;
  testID?: string; // For testing
  disabled?: boolean;
  rippleOverflow?: boolean;
  // ... other props as needed
}

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  style,
  rippleColor = Colors.orangeTint,
  onPress,
  testID,
  disabled,
  rippleOverflow = true,
  ...rest // Spread other props
}) => {

  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(
        rippleColor,
        rippleOverflow,
      )}
      disabled={disabled}
      testID={testID}
      {...rest}
    >
      <View style={[styles.button, style]}>
        {children}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
  },
});

export default RippleButton;
