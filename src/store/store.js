import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import langReducer from './slices/languageSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer, // ключ:значення
    lang: langReducer
  }
});

export default store;