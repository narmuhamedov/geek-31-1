import {configureStore} from '@reduxjs/toolkit';
import apiExplorerReducer from './apiExplorerSlice';

const store = configureStore({
    reducer: {
        apiExplorer: apiExplorerReducer,
    },
});

export default store;
