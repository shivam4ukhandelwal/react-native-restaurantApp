import FastImage, { FastImageProps } from '@d11/react-native-fast-image';
import React from 'react';
import { thumbnailPath } from '../../services/endpoints';

interface CustomImageProps extends FastImageProps {
    uri?: string;
    id?: string;
}
const Image: React.FC<CustomImageProps> = ({uri,  source, id, ...props }) => {
    const src = source ? source : {uri: uri ? uri : thumbnailPath + id};
    return (
        <FastImage
            source={src}
            {...props}
        />
    );
};

export default Image;
