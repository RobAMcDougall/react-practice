import React, { useState } from "react";
import { useTheme } from "../../contexts";
import ThemeButton from "../../components/ThemeButton";

export default function Home() {
  const { setTheme } = useTheme();
  const [style, setStyle] = useState("light");

  return (
    <>
      <body className={style}>
        <h1 className={style}>React Exercise</h1>
        <h3 className={style}>CHANGE CSS STYLING WITH ONCLICK EVENT</h3>
        <ThemeButton style={style} setStyle={setStyle} />
      </body>
    </>
  );
}
