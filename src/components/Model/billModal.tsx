import React from 'react';
import BottomModal from './index';
import {View} from 'react-native';
import {BillSummaryModalProps} from './types';
import Text from '../Text';
import RowLineItem from '../Input/rowInput';
import {Colors, commonStyles} from '../../themes';
import STRING from '../../utils/strings';
import styles from './styles';

const BillSummaryModal: React.FC<BillSummaryModalProps> = ({
  show,
  setShow,
  totalAmount,
  subTotal,
  discountTotal,
  tax,
  platformFee,
}) => {
  return (
    <BottomModal show={show} setShow={setShow}>
      <View style={styles.fWidthGap}>
        <Text variant="h2">{STRING.billSummary}</Text>
        <View>
          <RowLineItem
            label={STRING.itemTotal}
            value={subTotal}
            iconName="bag-handle-outline"
            type={'Ionicons'}
          />
          <RowLineItem
            label={STRING.tax}
            value={tax}
            iconName="home-city-outline"
          />
          <RowLineItem
            label={STRING.discount}
            value={discountTotal}
            iconName="brightness-percent"
          />
          <RowLineItem
            label={STRING.platformFee}
            value={platformFee}
            iconName="cellphone"
          />
        </View>
        <View style={commonStyles.line} />
        <RowLineItem
          label="Grand Total"
          value={totalAmount}
          color={Colors.systemGreen}
          size={24}
        />
      </View>
    </BottomModal>
  );
};

export default BillSummaryModal;
