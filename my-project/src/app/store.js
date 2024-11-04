// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

// Persist Config
const persistConfig = {
  key: 'root',
  storage,
};

// Combine Reducers
const rootReducer = combineReducers({
  todos: todoReducer,
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
