import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    conversions: [],
}; 

const convertSlice = createSlice({
    name: 'convert',
    initialState,
    reducers: {
        // Reducer para guardar conversiones
        addConversion(state, action) {

            if (state.conversions.length >= 8) {
                // Controlar que no se puedan guardar más de 8 valores, se va borrando el primero que se haya añadido
                state.conversions.shift();  
            }
            state.conversions.push(action.payload);
        },
        // Reducer para borrar
        deleteConversion(state, action) {
            state.conversions = state.conversions.filter((_, index) => index !== action.payload);
        },
    },
});

export const { addConversion, deleteConversion } = convertSlice.actions;

export default convertSlice.reducer;