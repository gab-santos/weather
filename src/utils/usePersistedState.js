import { useState, useEffect } from "react";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

export default function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) return storageValue === "light" ? light : dark;
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, state.title);
  }, [key, state]);

  return [state, setState];
}
