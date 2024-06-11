import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import PopularMovies from "./components/PopularMovies/PopularMovies";
import TopRated from "./components/TopRated/TopRated";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <PopularMovies />
      <TopRated />
    </>
  );
}

export default App;
