import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import appReducer from './app';
import { wordsApi } from './wordsApi';
import { userApi } from './userApi';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: {
    app: appReducer,
    [wordsApi.reducerPath]: wordsApi.reducer,
    [userApi.reducerPath]: wordsApi.reducer,
    persistedReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(wordsApi.middleware),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
