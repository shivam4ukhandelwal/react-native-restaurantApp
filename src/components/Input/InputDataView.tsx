import React from 'react';
import {Pressable, StyleSheet, TextInput} from 'react-native';
import {Colors, Sizes} from '../../themes';
import Text from '../Text';
import Icon from '../Icon';
import STRING from '../../utils/strings';

interface ShowEditButtonProps {
  title: string;
  onPress: () => void;
  isEdit: boolean;
  onSetInput?: (val: string) => void;
  input?: string;
  placeHolder?: string;
}

const ShowButtonView: React.FC<ShowEditButtonProps> = ({
  title = STRING.addAddress,
  onPress,
  isEdit,
  onSetInput,
  input,
  placeHolder,
}) => {
  if (isEdit) {
    <TextInput
      style={styles.input}
      placeholder={placeHolder}
      value={input}
      onChangeText={onSetInput}
    />;
  }
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text variant="h6" style={styles.text}>
        {title}
      </Text>
      <Icon name="edit"type="Feather" color={Colors.vipBlack} size={16} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '500',
    fontSize: Sizes.h6,
    color: Colors.vipBlack,
  },
 input: {
    borderWidth: 1,
    borderColor: Colors.grey5,
    borderRadius: Sizes.radius,
    padding: Sizes.paddingMid,
    marginVertical: Sizes.marginSmall,
    backgroundColor: Colors.white,
  },
});

export default ShowButtonView;
