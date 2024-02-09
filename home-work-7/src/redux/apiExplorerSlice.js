import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://api.publicapis.org/entries';

export const fetchApis = createAsyncThunk('apiExplorer/fetchApis', async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data.entries;
});

export const apiExplorerSlice = createSlice({
    name: 'apiExplorer',
    initialState: {
        isLoading: false,
        apiList: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApis.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchApis.fulfilled, (state, action) => {
                state.isLoading = false;
                state.apiList = action.payload;
            })
            .addCase(fetchApis.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export default apiExplorerSlice.reducer;
