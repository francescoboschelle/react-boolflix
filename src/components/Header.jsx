import { useState } from "react";
import axios from "axios";
import useGlobalContext from "../context/useGlobalContext.jsx";

export default function Header() {
  const [queryString, setQueryString] = useState("");
  const { setResults } = useGlobalContext();

  function handleSearch(e) {
    e.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${queryString}`
      )
      .then((response) => {
        if (response.data.results.length > 0) {
          response.data.results.forEach((result) => {
            if (result.original_language && result.original_language === "ja") {
              result.original_language = "jp";
            }
          });
          setResults(response.data.results);
        }
      });
  }

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
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
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0" onSubmit={handleSearch}>
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
                onChange={(e) => setQueryString(e.target.value)}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
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
