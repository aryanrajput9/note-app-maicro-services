import {createSlice,type PayloadAction} from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../app/store/store';




type Theme="light"|"dark";

interface ThemeState{
    theme:Theme
}

const savedTheme=localStorage.getItem("theme");

const initialState: ThemeState = {
  theme: savedTheme==="dark"?"dark":"light"
};

const themeSlice=createSlice({
    name:"theme",
    initialState,

    reducers:{

        setTheme:(state,action:PayloadAction<Theme>)=>{
            state.theme=action.payload
        },
        toggleTheme:(state)=>{
            state.theme=state.theme==="light"?"dark":"light"

        }
    }
});

export const {setTheme,toggleTheme}=themeSlice.actions;

// Selectors
export const useTheme = () =>
  useSelector((state: RootState) => state.theme.theme);

// Custom Hooks
export const useSetTheme = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (theme: Theme) => dispatch(setTheme(theme));
};

export const useToggleTheme = () => {
  const dispatch = useDispatch<AppDispatch>();
  return () => dispatch(toggleTheme());
};

export default themeSlice.reducer

