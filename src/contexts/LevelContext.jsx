import { createContext, useState } from "react";

export const LevelContext = createContext(null);

export function LevelProvider({ children }) {
  const [levels, setLevel] = useState(null);

  function changeLevel() {
    setLevel();
  }

  return <LevelContext.Provider value={{ levels, changeLevel }}>{children}</LevelContext.Provider>;
}
