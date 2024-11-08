import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define la interfaz de estado para el libro
interface BookState {
  step: number;
}

// Estado inicial
const initialState: BookState = {
  step: 0,
};

// Crea el slice para book
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    advanceStep: (state) => {
      state.step += 1;
    },
    previousStep: (state) => {
      state.step = Math.max(state.step - 1, 0);
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

// Exporta las acciones y el reducer
export const { advanceStep, previousStep, setStep } = bookSlice.actions;
export default bookSlice.reducer;
