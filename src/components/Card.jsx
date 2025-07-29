import { countries } from "country-flag-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

export default function Card({ result }) {
  function getVoteStars(voteAverage) {
    const scaled = Math.floor(((voteAverage - 1) / 9) * 4 + 1);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= scaled) {
        stars.push(<FontAwesomeIcon icon={faStarSolid} />);
      } else {
        stars.push(<FontAwesomeIcon icon={faStarEmpty} />);
      }
    }

    return stars;
  }

  return (
    <div className="col-md-4 mb-4 d-flex">
      <div className="card w-100">
        {result.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
            className="card-img-top"
            alt={result.title}
          />
        )}
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{result.title || result.name}</h5>
            <p className="card-text">{result.overview}</p>
          </div>
          {(result.vote_average || result.release_date) && (
            <div>
              <p className="card-text">
                <small className="text-muted">
                  {result.vote_average && (
                    <>Vote: {getVoteStars(result.vote_average)} | </>
                  )}
                  {result.original_language && (
                    <>
                      {"Language: "}
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
                </small>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
