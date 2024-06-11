import { useEffect, useState } from "react";
import "./TopRated.css";
import axios from "axios";
import TopRatedCard from "../TopRatedCard/TopRatedCard";

function TopRated() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjk4NjgwN2NkMWUwYTExMDAzNDZlMTE1ZDk0NTEyYSIsInN1YiI6IjY2NTVkNzM0MjI2NDUwMzRhN2RmZDZkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RN86xzi0tSNvea0IqKaIxwawTIAZpz8z8KEEWMijPyU",
            },
          }
        );

        setTopRatedMovies(response.data.results.slice(0, 10));
        console.log(topRatedMovies);
      } catch {
        console.log("Error:", error);
      }
    };
    getTopRatedMovies();
  }, []);

  return (
    <div className="top-rated-outer-container">
      <div className="top-rated-container">
        <div className="top-rated-title-container">
          <h2 className="top-rated-title">Top Rated Movies</h2>
        </div>
        <div className="top-rated-cards-container">
          {topRatedMovies.map((movie) => {
            return (
              <div key={movie.id}>
                <TopRatedCard movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopRated;
