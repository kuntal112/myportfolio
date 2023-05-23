import React, { useContext, useEffect } from 'react'
import { routeContext } from "../../App";
function Home() {
    let string = "FULL STACK WEB DEVELOPER";

    let { dispatch } = useContext(routeContext);
    useEffect(() => {
        dispatch({ page: "home", payload: { next: "about", prev: "contact" } })
    }, [dispatch])


    return (
        <div className="home-div">
            <div className="mainCard">
                <div className="text-div">
                    <h1>KUNTAL DAS</h1>
                    {string.split("").map((char, index) => {
                        return <span className="letter" key={index} style={{ animation: `animate ${index * .1 + 1}s linear infinite` }}>{char}</span>
                    })}
                </div>
                <img className="svg-img" src={"/technologies/thinkingsvg.svg"} alt=""></img>
            </div>
        </div>
    )
}

export default Home
