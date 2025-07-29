export default function Card({ movie }) {
  return (
    <div className="col-md-4 mb-4 d-flex">
      <div className="card">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="card-img-top"
            alt={movie.title}
          />
        ) : (
          ""
        )}
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
