import "./TopRatedCard.css";

function TopRatedCard({ movie }) {
  return (
    <div className="top-rated-card">
      <div className="top-rated-image-container">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}
    `}
          alt="movie-image"
          className="top-rated-image"
        />
        <div className="image-overlay">
          <button className="watch-trailer-btn">Watch Trailer</button>
          <button className="details-btn">Details</button>
        </div>
      </div>
      <div className="top-rated-details">
        <p className="top-rated-movie-title">{movie.title}</p>
        <span className="top-rated-vote">
          {Math.floor(movie.vote_average * 10) / 10}
        </span>
      </div>
    </div>
  );
}
export default TopRatedCard;
