import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import langReducer from './slices/languageSlice'
import themeReducer from './slices/themeSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer, // ключ:значення
    lang: langReducer,
    theme: themeReducer
  }
});

export default store;