import Card from "../components/Card";
import useGlobalContext from "../context/useGlobalContext";

export default function HomePage() {
  const { results } = useGlobalContext();

  return (
    <main>
      <div className="container">
        {!results || results.length === 0 ? (
          <div className="text-center">
            <h1>Search for a movie </h1>
            <p>Start typing in the searchbar to search for a movie</p>
          </div>
        ) : (
          <div className="row mt-4 mb-4">
            {results.map((result) => (
              <Card key={result.id} result={result} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
