import { countries } from "country-flag-icons";

export default function Card({ result }) {
  return (
    <div className="col-md-4 mb-4 d-flex">
      <div className="card w-100">
        {result.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
            className="card-img-top"
            alt={result.title}
          />
        ) : (
          ""
        )}
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{result.title || result.name}</h5>
            <p className="card-text">{result.overview}</p>
          </div>
          {(result.vote_average ||
            result.original_language ||
            result.release_date) && (
            <div>
              <p className="card-text">
                <small className="text-muted">
                  Vote: {result.vote_average}
                  {result.original_language && (
                    <>
                      {" | Language: "}
                      {countries.includes(
                        result.original_language.toUpperCase()
                      ) ? (
                        <img
                          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${result.original_language.toUpperCase()}.svg`}
                          alt={result.original_language.toUpperCase()}
                          style={{ width: "1.2em", verticalAlign: "middle" }}
                        />
                      ) : (
                        result.original_language.toUpperCase()
                      )}
                    </>
                  )}
                  {result.release_date &&
                    ` | Release Date: ${result.release_date}`}
                </small>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
