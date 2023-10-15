import React, { useContext, useEffect, useMemo, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import RecipieList from "./RecipieList";
import ColorTheme from "../components/ColorTheme";
import { ThemeContext } from "../contex/ThemeProvider";

function Home() {
  const [data, setData] = useState(null);
  const { deleted ,changeDelete } = useContext(ThemeContext)
  const {
    data: recipies,
    isPending,
    error,
  } = useFetch("https://arrow-gamy-adasaurus.glitch.me/recipes");

  const newData = useMemo(()=>{
     return recipies
  },[recipies])
  useEffect(()=>{
    setData(()=>{
      return newData
    })
  },[newData])

  useEffect(()=>{
    if(deleted){
      fetch('https://arrow-gamy-adasaurus.glitch.me/recipes')
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        setData(() =>{
          return data
        })
        changeDelete(false)
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  },[deleted])
  return (
    <>
      <ColorTheme />
      {data && <RecipieList recipies={data} />}
    </>
  );
}

export default Home;
