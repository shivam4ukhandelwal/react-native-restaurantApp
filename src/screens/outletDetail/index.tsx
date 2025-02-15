import React from 'react';
import Animated from 'react-native-reanimated';
import {View, StatusBar, SectionList} from 'react-native';
import Metrics from '../../themes/metrics';
import {Text} from 'react-native';
import useTopToBottomAnimation from '../../hooks/useTopToBottomAnimation';
import {commonStyles} from '../../themes';
import FastImage from '@d11/react-native-fast-image';
import {imagePath} from '../../services/endpoints';
import useOutletDetail from './useOutletDetail';
import STRING from '../../utils/strings';
import styles from './styles';
import { EmptyScreen, MenuRenderItem, CartStackButton } from '../../components';

const Image = Animated.createAnimatedComponent(FastImage);
const Seperator = () => <View style={styles.separator} />;
const OutletDetail = () => {
  const {params, sectionMenu, isLoading} = useOutletDetail();
  const bgImageStyle = useTopToBottomAnimation({
    duration: 800,
    delay: 300,
    height: Metrics.height * 0.6,
  });

  const headerStyle = useTopToBottomAnimation({
    duration: 800,
    delay: 300,
    height: Metrics.height * 0.4,
  });

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      {sectionMenu?.length ? (
        <Image
          resizeMode={FastImage.resizeMode.cover}
          source={{uri: imagePath + params.pictureId}}
          style={[styles.backgroundImage, bgImageStyle]}
          sharedTransitionTag={params.id}
        />
      ) : (
        <></>
      )}
      <SectionList
        sections={sectionMenu}
        keyExtractor={item => item.name.toString()}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        ListEmptyComponent={
          <EmptyScreen
            isLoading={isLoading}
            description={STRING.fetchingOutletDetail}
          />
        }
        ItemSeparatorComponent={Seperator}
        renderItem={({item, index}) => (
          <MenuRenderItem
            {...item}
            parent={params}
            index={index}
            description={STRING.description}
          />
        )}
        ListHeaderComponent={
          sectionMenu?.length ? <Animated.View style={headerStyle} /> : <></>
        }
        stickySectionHeadersEnabled={true}
        renderSectionHeader={({section}) => (
          <View
            style={[
              styles.sectionHeader,
              commonStyles.shadow,
              section?.title !== 'Foods' && styles.hideBorderTop,
            ]}>
            <Text style={styles.sectionTitle}>{section?.title}</Text>
          </View>
        )}
      />
      <CartStackButton />
    </>
  );
};

export default OutletDetail;
