import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import useSearchScreen from './useSearch';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {commonStyles, Metrics} from '../../themes';
import STRING from '../../utils/strings';
import {requestMicrophonePermission} from '../../utils/permission';
import {
  EmptyScreen,
  Header,
  ListenerModal,
  SearchedItem,
  SearchInput,
} from '../../components';

const SearchScreen = () => {
  const {
    inputText,
    onChangeText,
    filterData,
    onPressItem,
    showListener,
    setShowListener,
    loading,
  } = useSearchScreen();
  const scrollY = useSharedValue(0);
  const headerOpacity = useSharedValue(1);
  const {top} = useSafeAreaInsets();
  const defaultHeight = top + Metrics.height * 0.05;
  const headerHeight = useSharedValue(defaultHeight); // Default height until measured
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
    if (scrollY.value > 100) {
      headerHeight.value = withTiming(0, {duration: 300}); // Hide header
      headerOpacity.value = withTiming(0, {duration: 300}); // Fade out
    } else {
      headerHeight.value = withTiming(defaultHeight, {duration: 300}); // Restore height
      headerOpacity.value = withTiming(1, {duration: 300}); // Fade in
    }
  });
  const headerStyle = useAnimatedStyle(() => ({
    height: headerHeight.value || 0, // Animate height
    opacity: headerOpacity.value,
  }));

  const onPressMic = () => {
    requestMicrophonePermission().then(() => {
      setShowListener(true);
    });
  };

  const EmptyView = useMemo(() => <EmptyScreen isLoading={loading} />, [loading]);
  return (
    <>
      <View style={commonStyles.container}>
        <ListenerModal
          onReceiveText={onChangeText}
          show={showListener}
          setShow={setShowListener}
        />
        <Header>
          <Animated.View style={headerStyle}>
            <Text style={commonStyles.headerText}>{STRING.search}</Text>
          </Animated.View>
          <SearchInput
            onChangeText={onChangeText}
            value={inputText}
            onPressMic={onPressMic}
          />
        </Header>
        <Animated.FlatList
          data={filterData}
          ListEmptyComponent={EmptyView}
          maxToRenderPerBatch={10}
          windowSize={5}
          initialNumToRender={20}
          contentContainerStyle={
            filterData.length ? commonStyles.noFlex : commonStyles.flex1
          }
          keyExtractor={item => item?.id?.toString()}
          renderItem={({item, index}) => (
              <SearchedItem item={item} index={index} onPress={() => onPressItem(item)} />
          )}
          onScroll={scrollHandler}
        />
      </View>
    </>
  );
};

export default SearchScreen;
