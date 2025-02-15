import React from 'react';
import {Modal, View} from 'react-native';
import styles from './styles';
import {Pressable} from 'react-native';
import Icon from '../Icon';
import { BottomModalProps } from './types';
import { Colors } from '../../themes';

const BottomModal: React.FC<BottomModalProps> = ({show, setShow, children}) => {
  return (
    <Modal
      transparent
      visible={show}
      presentationStyle="overFullScreen"
      animationType="slide"
      onRequestClose={() => setShow(!show)}>
      <View style={styles.container}>
        <Pressable style={styles.outerView} onPressOut={() => setShow(false)}>
          <Icon
            name="close"
            type="Ionicons"
            color={Colors.white}
            containerStyle={styles.closeIcon}
            size={32}
          />
        </Pressable>
        <View style={[styles.content, styles.centerView]}>
          <View style={styles.line} />
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default BottomModal;
