'use client';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import {reduxStorage} from './storage';
import cartReducer from './Slice/cart';
import restaurantReducer from './Slice/restaurant';


  const persistConfig = {
    key: 'root',
    version: 1,
    keyPrefix: '',
    storage: reduxStorage,
  };

  const rootReducer = combineReducers({cart: cartReducer, restaurant: restaurantReducer});

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  export const persistor = persistStore(store);

