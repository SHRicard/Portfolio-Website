import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import bookReducer from "./slices/bookSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    book: bookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
