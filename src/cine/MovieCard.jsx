import { useContext, useState } from "react";
import MovieRating from "../components/MovieRating";
import { MovieContext } from "../context";
import { getImgUrl } from "../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartData, setCartData } = useContext(MovieContext);
  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  const handleAddToCart = (e, movie) => {
    e.stopPropagation();

    const found = cartData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      console.error(`This movie ${movie.title} has already been added`);
    }
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a onClick={() => handleMovieSelection(movie)} href="#">
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
        </a>
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <MovieRating value={movie.rating} />
          </div>
          <a
            onClick={(e) => handleAddToCart(e, movie)}
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};
export default MovieCard;
