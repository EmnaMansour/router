import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Startrating from "./Startrating";
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`movie/${movie.id}`}>
        <div>
          <Card className="cart">
            <CardImg
              top
              src={movie.img}
              alt={movie.title}
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
        </Link>
  );
};

export default MovieCard;