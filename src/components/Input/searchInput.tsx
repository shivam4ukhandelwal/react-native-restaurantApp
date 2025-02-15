import {
  TextInput,
  TouchableOpacity,
  View,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextInputProps,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import React, {useState, useEffect, useRef, useCallback, useMemo} from 'react';
import {Colors} from '../../themes';
import Icon from '../Icon';
import Text from '../Text';
import styles from './styles';
import STRING from '../../utils/strings';

const messageData = [' restaurant', ' cuisine', ' pizza', ' biryani'];

type AnimatedSearchBarProps = TextInputProps & {
  messageData?: string[];
  messageDelay?: number;
  messageTimeout?: number;
  viewStyle?: StyleProp<ViewStyle>;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
  label?: string;
  returnKeyType?: ReturnKeyTypeOptions;
  hideClearButton?: boolean;
  onReturnPress?: () => void;
  callBackFunction?: (arg: any) => void;
  onPressSearchBar?: () => void;
  clearButtonContainerStyle?: StyleProp<ViewStyle>;
  clearBtnImageContainerViewStyle?: StyleProp<ViewStyle>;
  clearImageSource?: string;
  fontFamily?: string | TextStyle;
  value?: string | TextInputProps;
  TextMessageStyleBold?: StyleProp<ViewStyle>;
  TextMessageStyle?: StyleProp<ViewStyle>;
  customTextInputStyle?: StyleProp<TextStyle>;
  SearchLabelTextStyle?: StyleProp<ViewStyle>;
  focusedBackgroundColor?: string;
  focusedBorderColor?: string;
  autoFocus?: boolean;
  onPressMic?: () => void;
};

const AnimatedSearchBar: React.FC<AnimatedSearchBarProps> = ({
//   messageData = [],
  messageDelay = 200,
  messageTimeout = 1000,
  viewStyle,
  multiline = false,
  keyboardType = 'default',
  returnKeyType = 'done',
  hideClearButton = false,
  onReturnPress,
  callBackFunction = () => {},
  onPressSearchBar,
  // clearButtonContainerStyle,
  // clearBtnImageContainerViewStyle,
  // clearImageSource = '',
  fontFamily,
  TextMessageStyleBold,
  TextMessageStyle,
  customTextInputStyle,
  SearchLabelTextStyle,
  focusedBackgroundColor = '#F2F8F8',
  focusedBorderColor = '#007377',
  autoFocus = true,
  value = '',
  onPressMic,
  ...props
}): JSX.Element => {
  const [text, setText] = useState<string>('');
  const [searchEnable, setSearchEnable] = useState<boolean>(false);
  const refInput = useRef<TextInput | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const containerBackgroundColor = isFocused
    ? {backgroundColor: focusedBackgroundColor, borderColor: focusedBorderColor}
    : null;

  const myFontStyle: TextStyle = {
    fontFamily: typeof fontFamily === 'string' ? fontFamily : undefined,
  };

  const myCustomTextInputStyle: TextStyle = {
    width: !hideClearButton ? '90%' : '100%',
    fontFamily: typeof fontFamily === 'string' ? fontFamily : undefined,
  };
  const showClearButton = !hideClearButton && value?.length > 0;
  // const charIndexRef = useRef(0);
  // const messageIndexRef = useRef(0);
  // const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const timeoutRef = useRef<any | null>(null);

  const messages = useMemo(() => messageData || [], []);

    const typeMessage = useCallback(() => {
      let charIndex = 0;
      let messageIndex = 0;

      const type = () => {
        if (!messages.length || !messages[messageIndex]) {return;}

        if (charIndex < messages[messageIndex].length) {
          // Check if the character is valid before adding it
          const nextChar = messages[messageIndex][charIndex];
          if (nextChar !== undefined) {
            setText(prevText => prevText + nextChar);
          }
          charIndex++;
          timeoutRef.current = setTimeout(type, messageDelay);
        } else {
          timeoutRef.current = setTimeout(clearText, messageTimeout);
        }
      };

      const clearText = () => {
        setText('');
        charIndex = 0;
        messageIndex = (messageIndex + 1) % messages.length;
        timeoutRef.current = setTimeout(type, messageDelay);
      };

      if (timeoutRef.current) {clearTimeout(timeoutRef.current);}
      timeoutRef.current = setTimeout(type, messageDelay);

      return () => {
        if (timeoutRef.current) {clearTimeout(timeoutRef.current);}
      };
    }, [messages, messageDelay, messageTimeout]);

    useEffect(() => {
      if (messageData.length > 0) {
        const cleanup = typeMessage();
        return cleanup;
      }
    }, [typeMessage]);

  useEffect(() => {
    if (searchEnable && value && value.length > 0) {
      callBackFunction(searchEnable);
    }
  }, [searchEnable, value, callBackFunction]);

  const onFocus = useCallback(() => setIsFocused(true), []);
  const onBlur = useCallback(() => {
    if (value?.length === 0) {
      refInput.current?.clear();
      props.onChangeText?.('');
      setSearchEnable(false);
    }
    setIsFocused(false);
  }, [value, props]);

  const onEndEditing = useCallback(() => {
    if (onReturnPress) {
      onReturnPress();
    }
  }, [onReturnPress]);

  const onPressClose = () => {
    if (showClearButton) {
      refInput?.current?.clear();
      props?.onChangeText?.('');
      setSearchEnable(false);
      callBackFunction(false);
    } else {
      setSearchEnable(false);
      refInput?.current?.blur();
      refInput?.current?.clear();
      callBackFunction(false);
    }
  };

  return (
    <TouchableOpacity
      onPress={onPressSearchBar}
      activeOpacity={1}
      style={[styles.mainContainer, viewStyle, containerBackgroundColor]}>
      <Icon name="search" type="Feather" color={Colors.systemRed} size={20} />
      {!value && !searchEnable ? (
        <TouchableOpacity
          onPress={() =>
            onPressSearchBar ? onPressSearchBar() : setSearchEnable(true)
          }
          style={styles.inputInnerView}>
          <Text
            allowFontScaling={true}
            style={[styles.searchText, myFontStyle, SearchLabelTextStyle]}>
            {STRING.search}{' '}
          </Text>
          <Text
            allowFontScaling={true}
            numberOfLines={1}
            style={[
              styles.messageStyleBold,
              myFontStyle,
              TextMessageStyleBold,
            ]}>
            {text}
            {messageData.length > 0 && (
              <Text
                allowFontScaling={false}
                style={[styles.messageStyle, myFontStyle, TextMessageStyle]}>
                |
              </Text>
            )}
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.inputInnerView}>
          <TextInput
            allowFontScaling={false}
            ref={refInput}
            value={value}
            onBlur={onBlur}
            onFocus={onFocus}
            multiline={multiline}
            keyboardType={keyboardType}
            autoFocus={autoFocus}
            style={[
              styles.textInputStyle,
              myCustomTextInputStyle,
              customTextInputStyle,
            ]}
            returnKeyType={returnKeyType}
            onEndEditing={onEndEditing}
            {...props}
          />
        </View>
      )}
      {searchEnable && isFocused ? (
        <TouchableOpacity onPress={onPressClose} style={styles.closeTextButton}>
          <Text allowFontScaling={false} style={styles.closeText}>
            {showClearButton ? 'Clear' : 'Close'}
          </Text>
        </TouchableOpacity>
      ) : (
        <Icon name="mic" type="Feather" color={Colors.systemRed} onPress={onPressMic} size={16} />
      )}
    </TouchableOpacity>
  );
};
export default AnimatedSearchBar;
