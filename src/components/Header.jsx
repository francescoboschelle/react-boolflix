import { useState } from "react";
import axios from "axios";
import useGlobalContext from "../context/useGlobalContext.jsx";

export default function Header() {
  const [queryString, setQueryString] = useState("");
  const { setMovies, setTvs } = useGlobalContext();

  function fixLanguage(result) {
    if (result.original_language && result.original_language === "ja") {
      result.original_language = "jp";
    } else if (result.original_language && result.original_language === "en") {
      result.original_language = "us";
    }
  }

  function handleSearch(e) {
    e.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${queryString}`
      )
      .then((response) => {
        if (response.data.results.length > 0) {
          const filteredResults = response.data.results
            .filter(
              (result) =>
                result.poster_path !== null && result.backdrop_path !== null
            )
            .map((result) => {
              fixLanguage(result);
              return result;
            });
          setMovies(filteredResults);
        }
        return axios.get(
          `https://api.themoviedb.org/3/search/tv?api_key=${
            import.meta.env.VITE_API_KEY
          }&query=${queryString}`
        );
      })
      .then((response) => {
        if (response.data.results.length > 0) {
          const filteredResults = response.data.results
            .filter(
              (result) =>
                result.poster_path !== null && result.backdrop_path !== null
            )
            .map((result) => {
              fixLanguage(result);
              return result;
            });
          setTvs(filteredResults);
        }
      });
  }

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand text-danger" href="#">
            BoolFlix
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <form
              className="d-flex my-2 my-lg-0 ms-auto"
              onSubmit={handleSearch}
            >
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
                onChange={(e) => setQueryString(e.target.value)}
              />
              <button
                className="btn btn-outline-danger my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
