import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store/index.js'
import Navbar from '../components/Navbar.jsx';
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config.js";
import styled from 'styled-components'
import Slider from '../components/Slider.jsx';
import NotAvailable from "../components/NotAvailable.jsx"
import SelectGenre from '../components/SelectGenre.jsx';
export default function Movies() {
    const[isScrolled,setIsScrolled]=useState(false);
 
  const navigate=useNavigate();
  const genresLoaded=useSelector((state)=>state.netflix.genresLoaded)
  const movies=useSelector((state)=>state.netflix.movies)
  const genres=useSelector((state)=>state.netflix.genres)
  const disptach=useDispatch();

  useEffect(()=>{
    disptach(getGenres())
  },[])
  useEffect(()=>{
    if(genresLoaded) disptach(fetchMovies({type:"movie"}))
})

  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0?false:true)
    return ()=>{window.onscroll = null}
  }
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    // if (currentUser) navigate("/")
  })
  return (
    <Container>
        <div className="navbar">
            <Navbar isScrolled={isScrolled}/>
       
        <div className="data">
        </div>
        <SelectGenre genres={genres} type="movie"/>
            {movies.length ? <Slider movies={movies}/> :<NotAvailable/>}
        </div>
      
    </Container>
  )
}
const Container=styled.div`
.data{
  margin-top:8rem;
  .not-available{
    text-align:center;
    color:white;
    margin-top:4rem;
  }
}
`;