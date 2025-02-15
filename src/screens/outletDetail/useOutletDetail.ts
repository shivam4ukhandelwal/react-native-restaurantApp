import {useEffect, useState} from 'react';
import {get} from '../../services/api';
import PATH from '../../services/endpoints';
import {RouteProp,  useRoute} from '@react-navigation/native';
import {MenuItem, Restaurant} from '../../services/types';

interface sectionDataProps {
  title: string;
  data: MenuItem[];
}

interface useOutletDetailProps {
  params: Restaurant;
  sectionMenu: sectionDataProps[];
  isLoading: boolean;
  data?: MenuItem[];
}

const useOutletDetail = (): useOutletDetailProps => {
  const {params}: RouteProp<{params: Restaurant}> = useRoute();
  const [sectionMenu, setSectionMenu] = useState<sectionDataProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDetails();
    return () => {};
  }, []);

  const fetchDetails = async () => {
    try {
      const res = await get(PATH.details + params.id);
      const sections = [
        {
          title: 'Foods',
          data: res?.restaurant?.menus?.foods || [],
        },
        {
          title: 'Drinks',
          data: res?.restaurant?.menus?.drinks || [],
        },
      ];
      setSectionMenu(sections);
      setData(res.restaurant);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return {
    params,
    sectionMenu,
    data,
    isLoading,
  };
};

export default useOutletDetail;
