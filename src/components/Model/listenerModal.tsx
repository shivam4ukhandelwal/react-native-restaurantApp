import React, { useEffect, useRef, useMemo } from 'react';
import { Modal, Platform, Pressable, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Animated from 'react-native-reanimated';
import Text from '../Text';
import Icon from '../Icon';
import styles from './styles';
import { Colors } from '../../themes';
import STRING from '../../utils/strings';
import { useVoiceSearch } from '../../hooks/useVoice';
import { ListenerModalProps } from './types';



const ListenerModal: React.FC<ListenerModalProps> = ({ show, setShow, onReceiveText }) => {
  const animationRef = useRef<LottieView>(null);
  const { startRecording, stopRecording, listeningStatus, recognizedText, setSearch } = useVoiceSearch();

  // Start and stop recording when modal visibility changes
  useEffect(() => {
    if (show) {
      animationRef.current?.play();
      startRecording();
    } else {
      animationRef.current?.reset();
      stopRecording();
    }

    return () => animationRef.current?.reset();
  }, [show]);

  // Handle voice recognition success
  useEffect(() => {
    if (recognizedText && listeningStatus === 'success') {
      onReceiveText(recognizedText.toLowerCase());

      setTimeout(() => {
        setShow(false);
        setSearch('');
      }, Platform.OS === 'ios' ? 1000 : 2000);
    }
  }, [recognizedText, listeningStatus, setShow, onReceiveText, setSearch]);

  // Restart listening on tap
  const onListen = () => {
    setSearch('');
    startRecording();
  };

  // Memoized ViewContent to avoid unnecessary re-renders
  const ViewContent = useMemo(() => {
    switch (listeningStatus) {
      case 'listening':
        return (
          <>
            <Text variant="h4">{STRING.listening}</Text>
            <LottieView
              ref={animationRef}
              style={styles.animatedListening}
              source={require('../../assets/Lottie/listening.json')}
              loop
            />
          </>
        );

      case 'success':
        return (
          <>
            <Text variant="h4">{recognizedText}</Text>
            <LottieView
              style={styles.animatedListening}
              autoPlay
              source={require('../../assets/Lottie/success.json')}
            />
          </>
        );

      case 'notListening':
      case 'failed':
        return (
          <Animated.View style={styles.centerView}>
            <Text variant="h4">{STRING.didntHear}</Text>
            <Text variant="h6" color={Colors.grey1}>
              {STRING.tryAgainResturantDishName}
            </Text>
            <Icon
              name="mic"
              color={Colors.white}
              containerStyle={styles.micIcon}
              onPress={onListen}
              size={38}
            />
            <Text variant="h6">{STRING.tapMic}</Text>
          </Animated.View>
        );

      default:
        return null;
    }
  }, [listeningStatus, recognizedText]);

  return (
    <Modal
      transparent
      visible={show}
      presentationStyle="overFullScreen"
      animationType="slide"
      onRequestClose={() => setShow(!show)}>
      <View style={styles.container}>
        <Pressable style={styles.outerView} onPressOut={() => setShow(false)}>
          <Icon name="close" type="Ionicons" color={Colors.white} containerStyle={styles.closeIcon} size={32} />
        </Pressable>
        <View style={[styles.content, styles.centerView]}>
          <View style={styles.line} />
          {ViewContent}
        </View>
      </View>
    </Modal>
  );
};

export default ListenerModal;
