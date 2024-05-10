import {configureStore,createAsyncThunk,createSlice} from "@reduxjs/toolkit"

const initialState={
    movies:[],
    genresLoaded:false,
    genres:[]
};
