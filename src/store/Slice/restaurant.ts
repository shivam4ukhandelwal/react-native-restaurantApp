import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { get } from '../../services/api';
import PATH from '../../services/endpoints';

const initialState = {
    loadingResturant: true,
    status: '',
    restaurantsData: [],
    error: null,
};

export const fetchRestaurants = createAsyncThunk('restaurants/fetchRestaurants)', async (_,{rejectWithValue}) => {
    try {
        const response = await get(PATH.list);
        return response.restaurants;
    } catch (error) {
        return rejectWithValue(error);
    }
});


const restaurantSlice = createSlice({
    name: 'RESTAURANT',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurants.fulfilled, (state, {payload}) => {
            state.loadingResturant = false;
            state.restaurantsData = payload;
        });
    },
});

export default restaurantSlice.reducer;
