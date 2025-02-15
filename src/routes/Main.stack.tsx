import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import TabBar from './Tabs';
import OutletDetail from '../screens/outletDetail';
import SearchScreen from '../screens/Search';
import CartScreen from '../screens/Cart';
import CheckoutScreen from '../screens/Checkout';
import {BottomTabParamList, MainStackParamList} from './types';
import {Colors} from '../themes';
import STRING from '../utils/strings';
import OrderConfirmation from '../screens/Confirmation';

const Tab = createBottomTabNavigator<BottomTabParamList>();
const {Screen, Navigator} = createNativeStackNavigator<MainStackParamList>();

const renderTabBar = (props: any) => <TabBar  {...props} />;

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        headerTintColor: Colors.white,
        headerStyle: {
          backgroundColor: Colors.systemOrange,
        },
        headerTitleAlign: 'center',
        headerBackButtonDisplayMode: 'minimal',
        // header: Header,
      })}
      tabBar={renderTabBar}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false,
          tabBarAccessibilityLabel: 'Home Tab',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarAccessibilityLabel: 'Search Tab',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: true,
          tabBarLabel: 'Cart',
          headerTitle: STRING.yourCart,
          tabBarAccessibilityLabel: 'Cart Tab',
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        headerBackButtonDisplayMode: 'minimal',
        headerTitleAlign: 'center',
        headerTintColor: Colors.vipBlack,
        headerStyle: {
          backgroundColor: Colors.systemOrange,
        },
      }}>
      <Screen name="TabStack" component={TabStack} />
      <Screen
        name="outletDetail"
        component={OutletDetail}
        options={({route}) => ({
          headerShown: true,
          title: route?.params?.name || STRING.outlet,
        })}
      />
      <Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          headerShown: true,
          title: STRING.checkout,
        }}
      />
       <Screen
        name="Confirmation"
        component={OrderConfirmation}
        options={{
          headerShown: true,
          title: STRING.orderPlaced,
        }}
      />
    </Navigator>
  );
};

export default MainNavigator;
