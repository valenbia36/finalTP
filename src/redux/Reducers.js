import { createSlice } from '@reduxjs/toolkit';

export const Reducers = createSlice({
    name: 'application',
    initialState:{
        criterio:"",
        criterioOptions:["Apellido","Barrio","Partido","Provincia","Todas"],
        location:'',
        //data: [],

    },
    reducers:{
        setCriterioFilter:(state,action) => {
            if((state.criterioOptions).indexOf(action.payload) != -1)
            {
                state.criterio = action.payload
            }
        },
        setLocation:(state,action) => {
            state.location = action.payload
        }
    },
    setData:(state,action) =>
        {
            state.data = action.payload
        },
})


export const {setCriterioFilter, setCategoriaFilter} = Reducers.actions;

export default Reducers.reducer;