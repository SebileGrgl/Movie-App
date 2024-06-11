import { useEffect, useState } from "react";
import "./PopularMovies.css";
import axios from "axios";
import PopularMovieCard from "../PopularMovieCard/PopularMovieCard";
import { prevIcon, nextIcon } from "./PrevNextIcons.jsx";

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjk4NjgwN2NkMWUwYTExMDAzNDZlMTE1ZDk0NTEyYSIsInN1YiI6IjY2NTVkNzM0MjI2NDUwMzRhN2RmZDZkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RN86xzi0tSNvea0IqKaIxwawTIAZpz8z8KEEWMijPyU",
            },
          }
        );
        const movies = await response.data.results;
        setPopularMovies(movies);

        console.log(movies);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getPopularMovies();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % popularMovies.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [index, popularMovies.length]);

  const handleNextButton = () => {
    setIndex((prev) => (prev + 1) % popularMovies.length);
  };
  const handlePrevButton = () => {
    setIndex((prev) => (prev === 0 ? popularMovies.length - 1 : prev - 1));
  };

  const getMoviesToDisplay = () => {
    if (index + 3 <= popularMovies.length) {
      return popularMovies.slice(index, index + 3);
    } else {
      return [
        ...popularMovies.slice(index, popularMovies.length),
        ...popularMovies.slice(0, (index + 3) % popularMovies.length),
      ];
    }
  };

  return (
    <div className="popular-movies-container">
      <div className="inner-container">
        <div className="popular-title-container">
          <h2 className="popular-movies-title">Popular Movies</h2>
        </div>

        <div className="popular-movies-cards-container">
          <div className="pn-icons" onClick={handlePrevButton}>
            {prevIcon}
          </div>
          <div className="popular-movies-cards">
            {getMoviesToDisplay().map((movie) => (
              <div key={movie.id}>
                <PopularMovieCard movie={movie} />
              </div>
            ))}
          </div>
          <div className="pn-icons" onClick={handleNextButton}>
            {nextIcon}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopularMovies;
