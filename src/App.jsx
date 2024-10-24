import { useEffect, useState } from "react";
import "./App.css";
// import BannerDynamic from "./components/BannerDynamic";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import WatchList from "./components/WatchList";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MovieContext } from "./components/MovieContext";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import MovieDetail from "./components/MovieDetail";
import Banner from "./components/Banner";

function App() {
  //create the state to hold movies watchlist
  const [watchlist, setWatchlist] = useState([]);

  const handleAddtoWatchList = (moviesObj) => {
    // before adding the moviesObj i.e(curr movie added to watchlist) we will first add previous watchlist to newWatchlist and then add curr moviesObj to newList. This makes our  watchlist to maintain the previous data in watchlist
    let updatedWatchlist = [...watchlist, moviesObj];

    // settingup the watchlist
    setWatchlist(updatedWatchlist);
    //As we refres the our data was erased from our watchlist. Now using localStorage it will be stored in it and after refresh it would not be deleted
    localStorage.setItem("movies", JSON.stringify(updatedWatchlist));
    console.log(updatedWatchlist);
  };

  const DeleteFromWatchList = (moviesObj) => {
    let filtredMovies = watchlist.filter((movie) => {
      return Number(movie.id) != Number(moviesObj.id);
    });

    setWatchlist(filtredMovies);
    localStorage.setItem("movies", JSON.stringify(filtredMovies));
  };

  // using localStorage to get the movies for the already saved data from localStorage
  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("movies");
    if (!moviesFromLocalStorage) {
      return;
    }
    // as soon as i get data of movies from localstorage we set it to watchlist
    setWatchlist(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <MovieContext.Provider
          value={{
            handleAddtoWatchList,
            DeleteFromWatchList,
            watchlist,
            setWatchlist,
          }}
        >
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <BannerDynamic /> */}
                  <Banner />
                  <Movies />
                </>
              }
            />
            <Route path="/Top-Rated" element={<TopRated />} />
            <Route path="/Upcoming" element={<Upcoming />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/MovieDetail/:id" element={<MovieDetail />} />
          </Routes>
        </MovieContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

/*
we are creating handleAddtoWatchList in App.jsx i.e common to all components but we donot need(no work for this function) function here.
But here we can not access MovieCard directly, so MovieCard is accessible to Movies component, therefor we first move our watchlist to Movie component then from their we can pass it as a prop to MovieCard.

This phenomenon is known as PropDrilling

App.jsx --> <Movies handleAddtoWatchListProp={handleAddtoWatchList} />
|
V
Movie.jsx --> <MovieCard name={moviesObj.title} posterUrl={moviesObj.poster_path} movieObject={moviesObj}handleAddtoWatchListProps={handleAddtoWatchListProp}/>
|
V
MovieCard.jsx -> <div onClick={() => handleAddtoWatchListProps(movieObject)}>&#128525;</div> we are using the handleAddtoWatchList function
of App.jsx in MovieCard.jsx through PropDrilling



In this case:

1> App holds the state for the watchlist and the function handleAddtoWatchList to update it.
2> This function is passed down as a prop (handleAddtoWatchListProp) from App to Movies.
3> In the Movies component, it's passed further down to MovieCard as handleAddtoWatchListProps.
4> Finally, in the MovieCard component, the function is invoked when the user clicks on the heart emoji, adding a movie to the watchlist.


*/
