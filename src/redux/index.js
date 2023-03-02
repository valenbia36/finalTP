import {configureStore} from '@reduxjs/toolkit';
//reducer
import application from './Reducers';

//Aca agrego reducers al store(estado global)
export default configureStore({

    reducer: {
        application,
    }
})