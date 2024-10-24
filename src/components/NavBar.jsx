import Logo from "../MovieLogo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
      <img className="w-[50px]" src={Logo} />
      <Link to="/" className="text-white text-3xl hover:text-purple-400">
        Movies
      </Link>

      <Link
        to="/Top-Rated"
        className="text-white text-3xl hover:text-purple-400"
      >
        Top-Rated
      </Link>
      <Link
        to="/Upcoming"
        className="text-white text-3xl hover:text-purple-400 "
      >
        Upcoming
      </Link>
      <Link
        to="/watchlist"
        className="text-white text-3xl hover:text-purple-400"
      >
        WatchList
      </Link>
    </div>
  );
}

export default NavBar;
