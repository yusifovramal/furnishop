import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  grid_view: false,
};

const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    openSidebar(state) {
      state.isSidebarOpen = true;
    },
    closeSidebar(state) {
      state.isSidebarOpen = false;
    },
    setGridView(state) {
      state.grid_view = true;
    },
    setListView(state) {
      state.grid_view = false;
    },
  },
});

export const { openSidebar, closeSidebar,setGridView,setListView } = utilsSlice.actions;
export default utilsSlice.reducer;
