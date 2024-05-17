import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsersLikedMovie } from '../store/index.js'
import Navbar from '../components/Navbar.jsx';
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config.js";
import styled from 'styled-components'
import Card from '../components/Card.jsx';
import NotAvailable from '../components/NotAvailable.jsx';

export default function UserLiked() {
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState(undefined);
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email)
    else navigate("/login")
  })
  useEffect(() => {
    if (email) {
      dispatch(getUsersLikedMovie(email))
    }
  }, [email])
 
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => { window.onscroll = null }
  }
 
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="content flex column">
        <h1>My List</h1>
            <div className="grid flex">
              {
               movies ?
                movies.map((movie,index)=>{
                    return (   <Card key={movie._id} index={index} movieData={movie} isLiked={true}/>)
                    
                })
                :<h1>No movies Liked By you</h1>
              }
            </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
.content {
  margin: 2.3rem;
  margin-top: 8rem;
  gap: 3rem;
  h1 {
    margin-left: 3rem;
  }
  .grid {
    flex-wrap: wrap;
    gap: 1rem;
  }
}`;