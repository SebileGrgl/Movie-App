import "./PopularMovieCard.css";

function PopularMovieCard({ movie }) {
  return (
    <div className="popular-movie-card">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}
`}
        alt="movie-image"
        className="popular-movie-image"
      />
    </div>
  );
}
export default PopularMovieCard;
