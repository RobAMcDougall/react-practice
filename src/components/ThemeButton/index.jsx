import React from "react";
import { useTheme } from "../../contexts";

export default function ThemeButton() {
  const { toggle, setToggle } = useTheme();

  function handleTheme() {
    setToggle(!toggle);
  }

  return (
    <div>
      <button type="button" onClick={handleTheme}>
        Theme
      </button>
    </div>
  );
}