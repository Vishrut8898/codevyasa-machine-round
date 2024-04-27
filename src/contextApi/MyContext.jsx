import { createContext, useState } from "react";

export const MyContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [openFilter, setFilterOpen] = useState(false);

  return (
    <MyContext.Provider value={{ openFilter, setFilterOpen }}>
      {children}
    </MyContext.Provider>
  );
};
