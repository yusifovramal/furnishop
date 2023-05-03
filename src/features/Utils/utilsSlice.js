import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
  grid_view: true,
  mnoile_filter: false,
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
    openMobileFilter(state) {
      state.mnoile_filter = true;
    },
    closeMobileFilter(state) {
      state.mnoile_filter = false;
    },
    setGridView(state) {
      state.grid_view = true;
    },
    setListView(state) {
      state.grid_view = false;
    },
  },
});

export const { openSidebar, closeSidebar, setGridView, setListView,openMobileFilter,closeMobileFilter } = utilsSlice.actions;
export default utilsSlice.reducer;
