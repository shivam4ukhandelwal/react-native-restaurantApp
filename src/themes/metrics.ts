import { Dimensions } from 'react-native';
import { MetricsTypeProps } from './types';
const { width, height } = Dimensions.get('window');

const appHeight = width > height ? width : height;
const appWidth = width < height ? width : height;


function rfValue(fontSize:number) {
    const standardWidth: number = 375;
    let size = appWidth / (standardWidth / fontSize);
    return Number(size.toFixed(2));
}

const Metrics: MetricsTypeProps  =  {
    height: appHeight,
    width: appWidth,
    rfv: rfValue,
};

export default Metrics;
