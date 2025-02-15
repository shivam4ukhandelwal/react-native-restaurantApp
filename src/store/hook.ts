import {store} from './index';
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

import {TypedUseSelectorHook, useDispatch as reduxDispatch, useSelector} from 'react-redux';

export const useDispatch = () => reduxDispatch<AppDispatchType>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;
