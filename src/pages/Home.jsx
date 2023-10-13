import React from 'react'
import { useFetch } from '../hooks/useFetch'
import RecipieList from './RecipieList';

function Home() {
    const {data:recipies, isPending , error} = useFetch("https://arrow-gamy-adasaurus.glitch.me/recipes")
  return (
    <>
        {recipies && <RecipieList recipies={recipies}/>}
    </>
  )
}

export default Home