import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { City, ListResponse } from 'models';

export interface CityState {
  loading: boolean;
  list: City[];
}

const initialState: CityState = {
  loading: false,
  list: [],
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    fetchCityList(state) {
      state.loading = true;
    },
    fetchCityListSuccess(state, action: PayloadAction<ListResponse<City>>) {
      state.list = action.payload.data;
      state.loading = false;
    },
    fetchCityListFailed(state) {
      state.loading = false;
    },
  },
});

// actions
export const cityActions = citySlice.actions;

// selectors
export const selectCityList = (state: RootState) => state.city.list;

// reducer
const cityReducer = citySlice.reducer;
export default cityReducer;