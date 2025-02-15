import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useAppSelector, useDispatch } from '../../store/hook';
import { fetchRestaurants } from '../../store/Slice/restaurant';
import { Restaurant } from '../../services/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../routes/types';

interface useHomeProps {
  restaurants: Restaurant[];
  onNavigateOutlet: (item: Restaurant, discount?: number) => void;
  onNavigateSearch: () => void;
}

 const useHome = (): useHomeProps => {
      const { navigate } = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const dispatch = useDispatch();
    const { restaurantsData } = useAppSelector(state => state.restaurant);

    useEffect(() => {
      dispatch(fetchRestaurants());
    },[dispatch]);

    const onNavigateOutlet = (item: Restaurant, discount?: number) => {
        navigate('outletDetail', {...item, discount: discount});
      };
    const onNavigateSearch = () => {
        navigate('TabStack', {screen: 'Search'});
    };

    return {
        restaurants: restaurantsData,
        onNavigateOutlet,
        onNavigateSearch,
    };
};
export default useHome;
