import { createSlice } from "@reduxjs/toolkit";
import CONSTANTS from "../../constants";

const { LANGUAGE } = CONSTANTS;

const initialState = LANGUAGE.EN_US; // мова за замовчуванням

const langSlice = createSlice({ // викликаємо createSlice куди передаємо..
    name: 'lang',
    initialState,
    reducers: {
        setLang: (state, action) => action.payload
    }
})

const { reducer, actions } = langSlice;
const { setLang } = actions;

export { setLang };
export default reducer;