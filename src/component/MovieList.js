import React from 'react';
import MovieCard from './MovieCards';


const MovieList = ({movies}) => {
	return (
		<div className="Card">
			
			<>
			</> 
			{
    movies.map((el) => <MovieCard  movie={el} key={el.id}/>)
			}
		</div>
	);
};

export default MovieList;