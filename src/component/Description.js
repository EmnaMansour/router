import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import Startrating from "./Startrating";
const Description= ({movies})=>{
const {id}=useParams();
const[movie,setmovie]= useState([]);

useEffect (()=>{
    setmovie(movies.find(el => el.id === id))
},[]

);

return(
    <div>
    <Card className="cart">
      <CardImg
        top
        src={movie.img}
        alt={movie.Title}
        style={{ width: "200px", height: "200px" }}
      />
      <CardBody className="cart-body">
              <CardTitle tag="h5">{movie.Title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {movie.année}
              </CardSubtitle>
              {<Startrating rating={movie.rating}  edit={false}/>}
            </CardBody>
          </Card>
      </div>
)
};
export default Description;