import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { IconProps, IconType } from './types';
import { useDebounce } from 'use-debounce';
import { TouchableOpacity } from 'react-native';
import { Metrics } from '../../themes';

// Mapping icons to their respective components
const IconComponents: Record<IconType, any> = {
    AntDesign,
    Entypo,
    Foundation,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    FontAwesome5Pro,
    Ionicons,
    SimpleLineIcons,
    Fontisto,
    MaterialIcons,
    MaterialCommunityIcons,
    Octicons,
};


const Icons = ({
    name,
    type,
    size = 10,
    color,
    style,
    onPress,
    containerStyle,
    disabled,
    ...props
}: IconProps) => {
    const [debouncedOnPress] = useDebounce(onPress, 300);
    if (!name) {return <></>;}
    const IconComponent = type ? IconComponents[type] : Ionicons;
    const IconElement = <IconComponent name={name} size={Metrics.rfv(size)} color={color} style={style} />;
    // Debounced onPress function to optimize performance
    return (
        <TouchableOpacity
            disabled={!onPress || disabled}
            onPress={debouncedOnPress}
            style={containerStyle}
            {...props}
        >
            {IconElement}
        </TouchableOpacity>

    );
};

export default React.memo(Icons);
