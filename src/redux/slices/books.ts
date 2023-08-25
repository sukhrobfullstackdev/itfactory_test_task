import {createSlice} from "@reduxjs/toolkit";
import {InterfaceInitialStateOfBooksSlice} from "../../typings";

const initialState: InterfaceInitialStateOfBooksSlice = {
    data: [],
    loading: false,
    error: {},
    totalItems: 0
};
const books = createSlice({
    name: 'books',
    initialState,
    reducers: {
        getBooksSlice: (state, action) => {
            state.totalItems = action.payload.totalItems;
            state.data = action.payload.items;
            return state;
        },
        getLoadMoreSlice: (state, action) => {
            state.data = [...state.data, ...action.payload.items];
            return state;
        },
        getLoadingSlice: (state, action) => {
            state.loading = action.payload;
            return state;
        },
        getErrorSlice: (state, action) => {
            state.error = action.payload;
            return state;
        }
    }
});
export const {getBooksSlice,getLoadMoreSlice,getLoadingSlice,getErrorSlice} = books.actions;
export default books.reducer;