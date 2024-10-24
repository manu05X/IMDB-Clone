import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  let handleNext = () => {
    setPageNum(pageNum + 1);
  };

  let handlePrevious = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=ed56c93c0c4797988b9b1383eee080f1&language=en-US&page=${pageNum}`
      )
      .then((res) => {
        setMoviesData(res.data.results);
      });
  }, [pageNum]);

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1 className="text-purple-400">Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {moviesData.map((moviesObj, index) => (
          <MovieCard
            key={index}
            name={moviesObj.title}
            posterUrl={moviesObj.poster_path}
            movieObject={moviesObj}
          />
        ))}
      </div>
      <Pagination
        nextPageFunction={handleNext}
        previousPageFunction={handlePrevious}
        pageNumber={pageNum}
      />
    </div>
  );
};

export default Movies;
