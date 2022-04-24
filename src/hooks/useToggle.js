import { useState } from "react";

function useToggle(defaultValue) {
  const [state, setState] = useState(defaultValue);
  function toggle() {
    setState(!state);
  }
  return [state, toggle];
}

export default useToggle;
