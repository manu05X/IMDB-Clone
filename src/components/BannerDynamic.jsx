import { useCallback, useEffect, useState } from "react";
import axios from "axios";
function BannerDynamic() {
  const [popularBackdrops, setPopularBackdrops] = useState([]);

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true); // State for managing fade effect

  const next = useCallback(() => {
    setIndex((prevIndex) => {
      const onlastitem = prevIndex === popularBackdrops.length - 1;
      if (onlastitem) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  }, [popularBackdrops.length]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ed56c93c0c4797988b9b1383eee080f1&language=en-US&page=1"
      )
      .then((res) => {
        const Backdrops = res.data.results.map((moiveObj) => {
          return moiveObj.backdrop_path;
        });
        console.log(Backdrops);

        setPopularBackdrops(Backdrops);
      });
  }, []);

  useEffect(() => {
    const intervalid = setInterval(() => {
      setFade(false); // Trigger fade-out effect

      setTimeout(() => {
        next();
        setFade(true);
      }, 500);
    }, 3000);

    return () => {
      clearInterval(intervalid);
    };
  }, [next]);

  return (
    <div
      className={`h-[20vh] md:h-[80vh] bg-cover rounded-3xl flex items-end transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${popularBackdrops[index]})`,
      }}
    >
      {/* <div className="text-white w-full text-center text-2xl">
        {popularBackdrops[index].title}
      </div> */}
    </div>
  );
}

export default BannerDynamic;
