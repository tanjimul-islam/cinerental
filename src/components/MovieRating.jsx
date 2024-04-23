import star from "../assets/star.svg";
const MovieRating = ({ value }) => {
  let stars = Array(value).fill(star);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} alt="" height="14" width="14" />
      ))}
    </>
  );
};
export default MovieRating;
