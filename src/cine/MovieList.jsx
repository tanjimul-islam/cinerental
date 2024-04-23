import { getAllMovies } from "../data/movies";
import MovieCart from "./MovieCart";

const MovieList = () => {
  const movies = getAllMovies();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MovieCart movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
