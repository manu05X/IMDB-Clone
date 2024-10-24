function CastDetails({ imageURL, name, Charecter }) {
  return (
    <div className="relative flex flex-col text-white bg-gray-800 shadow-lg bg-clip-border rounded-xl w-[20rem]">
      <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl h-[20rem]">
        <img
          src={`https://image.tmdb.org/t/p/original/${imageURL}`}
          alt="photo"
          className="object-cover h-full w-full transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="text-center p-6 block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">
        <h2 className="text-yellow-400">{name}</h2>{" "}
        {/* Highlighted movie name */}
        <p className="text-gray-400 py-2">{Charecter}</p>{" "}
        {/* Subdued character name */}
      </div>
    </div>
  );
}

export default CastDetails;
