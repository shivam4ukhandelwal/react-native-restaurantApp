import { RouteProp } from '@react-navigation/native';

export type TabBarProps = {
    verticalPadding: number;
    topPadding: number;
    inactiveTintColor: string;
    tabBarBackground: string;
    shadow: boolean;
    descriptors: any;
    showIcon?: boolean;
    showLabel?: boolean;
    activeColors?: string | string[];
    navigation: any;
    activeTabBackgrounds?: string | string[];
    state: any;
  };

export type TabButtonProps = {
    focused: boolean;
    labelLength: number;
    accessibilityLabel?: string;
    onLayout: (event: any) => void;
    onPress: () => void;
    onLongPress: () => void;
    children: React.ReactNode;
  };

export   type LabelProps = {
    icon?: boolean;
    activeColor: string;
    children: React.ReactNode;
  };

export   type DotProps = {
    topPadding: number;
    activeTabBackground: string;
    width: number;
    height: number;
    style: any;
  };


// src/routes/navigationTypes.ts
import { NavigatorScreenParams } from '@react-navigation/native';
import { CartItem, Restaurant } from '../services/types';

export type BottomTabParamList = {
  Home: RouteProp<any> | any;
  Search: RouteProp<any> | any;
  Cart: RouteProp<any> | any;
  Confirmation: RouteProp<any> | any;
};

export type MainStackParamList = {
  TabStack: NavigatorScreenParams<BottomTabParamList>;
  outletDetail: Restaurant | CartItem;
  Checkout: undefined;
  Confirmation: undefined;
};

export interface iconNameProps  {
  [key: string] : string;
}
