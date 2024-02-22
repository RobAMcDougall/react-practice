import React from "react";
import { useTheme } from "../../contexts";
import ThemeButton from "../../components/ThemeButton";

export default function Home() {
  const { toggle } = useTheme();
  const style = toggle ? "dark" : "light";

  return (
    <>
      <h1 className="home">React Exercise</h1>
      <h3 className={style}>CHANGE CSS STYLING WITH ONCLICK EVENT</h3>
      <ThemeButton />
    </>
  );
}