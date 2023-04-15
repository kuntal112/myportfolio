import React,{useEffect,useContext} from 'react'
import {routeContext} from "../../App"
import Work from './Works'

function MyWorks() {
    let {dispatch}=useContext(routeContext);
    useEffect(() => {
        dispatch({page:"home",payload:{next:"contact",prev:"skills"}})
       
    }, [dispatch])
    const instaDesc="Hey, have tried to design instagram clone . Please let me know how good it is??"
    const noteDesc="I created this App using JavaScript Css & HTML"
    return (
        <div className="myWorkDiv">
                <div className="fixed-heading">
                <h1 className="component-headings">My Works</h1>
                <hr className=""></hr>
                </div>
            
            <div className="work-container"  data-aos="zoom-in" data-aos-easing="ease-in-sine">
            <Work title="Social-media" imgsrc={"technologies/socialmedia.png"} link="https://taupe-begonia-0aac47.netlify.app/" class="instadiv" project_description={instaDesc}></Work>
            <Work title="CryptoMarket" imgsrc={"technologies/cryptomarket.png"} link="https://kuntal112.github.io/cryptodata/" project_description={noteDesc}></Work>
            <Work title="SnakeGame" imgsrc={"technologies/snakeGame.png"} link="https://kuntal112.github.io/snakegame.github.io/"></Work>
            <Work title="Tic-tac-toe" imgsrc={"technologies/t3.png"} link="https://kuntal112.github.io/tictactoe.github.io/" />
            <Work title="bootstrap" imgsrc={"https://i.ibb.co/hCqxWgD/Screenshot-2021-08-07-230519.png"}link="https://kuntal112.github.io/project4-8.github.io/"/> 
            </div>
            
        </div>
    )
}

export default MyWorks
