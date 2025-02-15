import {  useState } from 'react';
import { useAppSelector } from '../../store/hook';
import { get } from '../../services/api';
import PATH from '../../services/endpoints';
import { useDebouncedCallback } from 'use-debounce';
import { useNavigation } from '@react-navigation/native';
import { Restaurant } from '../../services/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../routes/types';

interface useSearchScreenProps {
    filterData: Restaurant[],
    inputText: string,
    fetchSearch: (value: string) => void,
    onChangeText: (v: string) => void,
    onPressItem: (params: Restaurant) => void,
    showListener: boolean,
    setShowListener: (value: boolean) => void,
    loading: boolean,
    setLoading: (value: boolean) => void,
}

const useSearchScreen = () : useSearchScreenProps=> {
    const { navigate } = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const { restaurantsData } = useAppSelector(state => state.restaurant);
    const [filterData, setFilterData] = useState<Restaurant[]>(restaurantsData);
    const [inputText, setInputText] = useState('');
    const [showListener, setShowListener] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchSearch = async (value: string) => {
        try {
        if(value) {
            setLoading(true);
            const res = await get(PATH.search  + value);
            if(res?.restaurants) {
                setFilterData(res.restaurants);
            }
            setLoading(false);
            console.log(res?.restaurants, 'fetch search');
        } else {
            setFilterData(restaurantsData);
            setLoading(false);
        }
        } catch (error) {
            setLoading(false);
            console.log(error, 'error in fetch search');
        }

    };

    const debouncedFetchSearch = useDebouncedCallback(fetchSearch, 1000);

    const onChangeText = (v: string) => {
        setInputText(v);
        console.log('onChangeText', v);
        debouncedFetchSearch(v);
    };

    const onPressItem = (params: Restaurant) => {
        navigate('outletDetail', params);
    };

    return {
        loading,
        setLoading,
        filterData,
        inputText,
        fetchSearch,
        onChangeText,
        onPressItem,
        showListener,
        setShowListener,
    };
};

export default useSearchScreen;
