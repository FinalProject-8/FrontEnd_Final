import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  tabIndex: string;
}

const initialState: InitialState = {
  tabIndex: '0',
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setTabZero: (state: InitialState, action) => {
      state.tabIndex = action.payload.tabIndex;
    },
    setTabOne: (state) => {
      state.tabIndex = '1';
    },
  },
});
export default tabSlice.reducer;
export const { setTabOne, setTabZero } = tabSlice.actions;
