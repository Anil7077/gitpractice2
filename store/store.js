import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import counterReducer from '../store/counterSlice'

const counterPersistConfig = {
  key : "counter",
  storage: storage,
};

const persistCounterReducer = persistReducer(
  counterPersistConfig,
  counterReducer
);

const rootReducer = combineReducers({
  counter: persistCounterReducer    
});

export const store = configureStore({
  reducer: rootReducer,
});
export const persistor = persistStore(store)
