import  { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { toast } from "react-toastify";

function RecipieList({ recipies }) {
  const [url , setUrl] = useState("https://arrow-gamy-adasaurus.glitch.me/recipes")
  const {data , isePending , error, getNewRecipie} = useFetch(url , "DELETE")
  

  const handleDelete = (id) =>{
        setUrl(() =>{
          return `https://arrow-gamy-adasaurus.glitch.me/recipes/${id}`
        })
        getNewRecipie(setUrl)
        toast.warn("deleted")
  }

  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {recipies.map((recipie) => {
        const {id ,title ,method, cookingTime , img} = recipie
        return (
          <li key={id} className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  src={img}
                className="h-[200px] object-fill w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{method.substring(0,100)}...</p>
                <Link to={`recipie/${id}`} className="btn btn-outline btn-success" > Read More</Link>
                <button onClick={()=>handleDelete(id)} className="btn btn-warning">delete</button>
              </div>
          </li>
        );
      })}
    </ul>
  );
}

export default RecipieList;
