import { createContext, useState } from "react";

export const LevelContext = createContext(null);

export function LevelProvider({ children }) {
  const [isEasy, setIsEasy] = useState("hard");

  function changeLevelMode() {
    if (isEasy === "hard") {
      setIsEasy("easy");
    }
    if (isEasy === "easy") {
      setIsEasy("hard");
    }
  }

  return <LevelContext.Provider value={{ isEasy, changeLevelMode }}>{children}</LevelContext.Provider>;
}
