import { createContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [results, setResults] = useState([]);

  return (
    <GlobalContext.Provider value={{ results, setResults }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
