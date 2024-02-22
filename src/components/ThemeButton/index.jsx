import React, { useState, useEffect } from "react";

const Theme = () => {

    const [style, setStyle] = useState("light");

    function handleTheme() {
        style !== "light" ? setStyle("light") : setStyle("dark");
    }



    return <div>
        <button type="button" onClick={ handleTheme }>Theme</button>
    </div>
}

export default Theme;