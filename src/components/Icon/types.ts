import { ColorValue, GestureResponderEvent, StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';

export type IconType =
  | 'AntDesign'
  | 'Entypo'
  | 'Foundation'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'FontAwesome5Pro'
  | 'Ionicons'
  | 'SimpleLineIcons'
  | 'Fontisto'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Octicons';

 export interface IconProps extends TouchableOpacityProps {
    type?: IconType;
    testID?: string;
    name: string;
    size?: number;
    style?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    color?: ColorValue;
    disabled?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
    isRippleShow?: boolean;
    hitSlop?: { top?: number; bottom?: number; left?: number; right?: number };
  }
