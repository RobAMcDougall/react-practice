import React, { useState } from "react";

export default function ThemeButton({ style, setStyle }) {
  function handleTheme() {
    setStyle(style !== "light" ? "light" : "dark");
  }

  return (
    <div>
      <button type="button" onClick={handleTheme}>
        Theme
      </button>
    </div>
  );
}
