import { useContext } from "react";
import { LevelContext } from "../contexts/LevelContext";

export default function useLevel() {
  return useContext(LevelContext);
}
