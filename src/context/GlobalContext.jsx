import { createContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);

  return (
    <GlobalContext.Provider value={{ movies, tvs, setMovies, setTvs }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
