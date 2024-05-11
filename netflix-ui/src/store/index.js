import {configureStore,createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import { API_KEY,TMDB_BASE_URL } from "../utils/Constants";
const initialState={
    movies:[],
    genresLoaded:false,
    genres:[]
};

export const getGenres=createAsyncThunk("netflix/genres",async ()=>{
    const {data:{genres}}=await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
  
    return genres;
})
const getRawData=(api,geners,paging)=>{
    const moviesArray=[]
}

export const fetchMovies =createAsyncThunk("netflix/trending",async({type},thunkApi)=>{
    const {netflix:{genres}}=thunkApi.getState();
    return getRawData(`${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,genres,true)
})
//   return getRawData(`${TMDB_BASE_URL}/discover/${type}?api_key=${API_KEY}`)
const NetflixSlice=createSlice({
    name:"Netflix",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getGenres.fulfilled,(state,action)=>{
            state.genres=action.payload;
            state.genresLoaded=true;
        })
    },
})

export const store=configureStore({
    reducer:{
        netflix:NetflixSlice.reducer,
    },
})