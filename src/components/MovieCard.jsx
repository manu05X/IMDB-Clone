import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { useNavigate } from "react-router-dom";

function MovieCard({ movieObject }) {
  const navigate = useNavigate();
  const myMovieContaxt = useContext(MovieContext);

  function doesContain() {
    for (let i = 0; i < myMovieContaxt.watchlist.length; i++) {
      if (myMovieContaxt.watchlist[i].id === movieObject.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="relative h-[40vh] w-[200px] bg-cover flex items-end rounded-lg hover:scale-110 duration-300"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObject.poster_path})`,
      }}
    >
      {doesContain(movieObject) ? (
        <div
          onClick={() => myMovieContaxt.DeleteFromWatchList(movieObject)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => myMovieContaxt.handleAddtoWatchList(movieObject)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      {/* <div
        style={{ color: "#FFFFFF" }}
        className="text-white w-full text-center text-xl p-2 bg-gray-900/500"
      >
        {movieObject.title}
      </div> */}

      {/* Add an icon for navigating to Movie Details */}
      <div
        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:cursor-pointer opacity-50" // Adjusted opacity
        onClick={() => {
          navigate(`/MovieDetail/${movieObject.id}`);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-gray-900"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zm0-3a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zm-3-2.25h.008v.008H8.25v-.008z"
          />
        </svg>
      </div>
    </div>
  );
}

export default MovieCard;

/*

import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { useNavigate } from "react-router-dom";

function MovieCard({ movieObject }) {
  const navigate = useNavigate();
  const myMovieContaxt = useContext(MovieContext);

  function doesContain() {
    for (let i = 0; i < myMovieContaxt.watchlist.length; i++) {
      if (myMovieContaxt.watchlist[i].id === movieObject.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-cover flex items-end rounded-lg hover:scale-110 duration-300"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObject.poster_path})`,
      }}
    >
      {doesContain(movieObject) ? (
        <div
          onClick={() => myMovieContaxt.DeleteFromWatchList(movieObject)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => myMovieContaxt.handleAddtoWatchList(movieObject)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div
        style={{ color: "#FFFFFF" }}
        className="text-white w-full text-center text-xl p-2 bg-gray-900/500"
      >
        {myMovieContaxt.watchlist.title}
      </div>
    </div>
  );
}

export default MovieCard;

*/
