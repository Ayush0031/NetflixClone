import React from 'react'
import styled from 'styled-components'


export default function SelectGenre({genres,type}) {
  return (
    <Select>
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