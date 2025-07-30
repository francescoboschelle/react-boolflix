import Card from "../components/Card";
import useGlobalContext from "../context/useGlobalContext";

export default function HomePage() {
  const { movies, tvs } = useGlobalContext();

  return (
    <main>
      <div className="container-fluid">
        {(!movies || movies.length === 0) && (!tvs || tvs.length === 0) ? (
          <div className="text-center text-white">
            <h1>Search for a movie </h1>
            <p>Start typing in the searchbar to search for a movie</p>
          </div>
        ) : (
          <>
            <h2 className="text-white text-start">MOVIES</h2>
            <div className="row mt-4 mb-4 flex-nowrap overflow-auto">
              {movies.length > 0 &&
                movies.map((movie) => {
                  return <Card key={movie.id} result={movie} />;
                })}
            </div>
            <h2 className="text-white text-start">TV SHOWS</h2>
            <div className="row mt-4 mb-4 flex-nowrap overflow-auto">
              {tvs.length > 0 &&
                tvs.map((tv) => <Card key={tv.id} result={tv} />)}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
