import React, { useState, useEffect } from "react";
import { useTheme } from "../../contexts";
import { Theme } from "../../components/ThemeButton"

export default function Home() {
    const {setTheme} = useTheme()

    return (
        <>
        <h1 className="home">React Excercise</h1>
            <h3 className={style}>
                CHANGE CSS STYLING WITH ONCLICK EVENT
            </h3>
        <Theme/>
        </>
    )
}