import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./slices/tableSlice";

export default configureStore({
  reducer: {
    table: tableReducer,
  },
});
