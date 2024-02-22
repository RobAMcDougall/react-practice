import React, { useState, useEffect } from "react";

export default function Theme() {

    const [style, setStyle] = useState("light");

    function handleTheme() {
        style !== "light" ? setStyle("light") : setStyle("dark");
    }



    return (
        <div>
            <button type="button" onClick={handleTheme}>Theme</button>
        </div>
    )
}

