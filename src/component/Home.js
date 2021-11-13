import React from "react";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListeHeading";
import AddMovies from "./AddMovies";
import Filter from "./Filter ";

const Home =({movies, showForm, setShowForm, searchMovie, rating, setMovies, keyword, setRating})=>{

return <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
      </div>
      <div className="row"></div>

      {!showForm && <button onClick={() => setShowForm(true)}>AddMovie</button>}
      {showForm ? (
        <AddMovies
          setShowForm={setShowForm}
          setMovies={setMovies}
          AddNewMovies={AddMovies}
        />
      ) : (
        <>
          {" "}
          <Filter searchMovie={searchMovie} searchRating={setRating} rating={rating} />
          <MovieList
            movies={movies.filter((elt) => elt.Title.includes(keyword.toUpperCase().trim())
            )}
          />
        </>
      )}
    </div>
  
};
export default Home;