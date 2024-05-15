import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { fetchMoviesByGenre } from '../store';


export default function SelectGenre({genres,type}) {
    const disptach=useDispatch();
  return (
    <Select className="flex" onChange={(e)=>{
        disptach(fetchMoviesByGenre({genre:e.target.value,type}))
    }}>
      {
        genres.map((genre)=>{
            return( <option value={genre.id} key={genre.id}>{genre.name}</option>)
           
        })
      }
     
    </Select>
  )
}
const Select=styled.select`
margin-left: 5rem;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;`;