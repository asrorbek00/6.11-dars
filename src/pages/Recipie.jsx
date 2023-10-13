import {Link, useParams } from "react-router-dom"
import {useFetch} from "../hooks/useFetch"

function Recipie() {

    const {id} = useParams()
    const url = 'https://arrow-gamy-adasaurus.glitch.me/recipes/'+ id

    const {data:recipie , isPending , error} = useFetch(url)
  return (
<>
    {recipie && <div className="card w-full bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={recipie.img}  className="rounded-xl w-1/2 " />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{recipie.title}</h2>
      <p><span className="text-black font-bold">Method:</span>{recipie.method}</p>
      <p><span className="text-black font-bold">Ingredients:</span>{recipie.ingredients}</p>
      <h1><span className="text-black font-bold">Cookin Time:</span>{recipie.cookingTime}</h1>
      <div className="card-actions">
        <Link to='/' className="btn btn-primary">Back</Link>
      </div>
    </div>
  </div>}
  </>
  )
}

export default Recipie