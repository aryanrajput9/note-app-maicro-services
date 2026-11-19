import {configureStore} from '@reduxjs/toolkit';
import themeSlice from '../../shared/theme/ThemeSlice'

export const store=configureStore({
    reducer:{
        theme:themeSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;