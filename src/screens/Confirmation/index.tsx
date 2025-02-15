import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../routes/types';
import LottieView from 'lottie-react-native';
import STRING from '../../utils/strings';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../themes';
import {Text} from '../../components';

const OrderConfirmation = ({}) => {
  const {replace} =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  useEffect(() => {
    // Auto navigate back after 3 seconds
    setTimeout(() => {
      replace('TabStack', {screen: 'Home'});
    }, 3000);
  }, []);

  return (
    <LinearGradient
      colors={[Colors.orangeTint, Colors.enbdGreen, Colors.noonYellow]}
      style={styles.container}>
        <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
        />
      <View style={styles.content}>
        <LottieView
          source={require('../../assets/Lottie/ramadan.json')}
          renderMode="SOFTWARE"
          autoPlay
          loop={true}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.contentView}>
          <LottieView
            source={require('../../assets/Lottie/success.json')}
            renderMode="SOFTWARE"
            autoPlay
            loop={true}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.title}>{STRING.orderPlaced}</Text>
          <Text style={styles.subtitle}>{STRING.orderOnTheWay}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default OrderConfirmation;
