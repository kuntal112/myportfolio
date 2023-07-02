import React, { useEffect, useContext } from 'react'
import { routeContext } from "../../App"
import Work from './Works'
import {works} from '../../data'

function MyWorks() {
    let { dispatch } = useContext(routeContext);
    useEffect(() => {
        dispatch({ page: "home", payload: { next: "contact", prev: "skills" } })

    }, [dispatch])

    return (
        <div className="myWorkDiv">
            <div className="fixed-heading">
                <h1 className="component-headings">My Works</h1>
                <hr className=""></hr>
            </div>

            <div className="work-container" data-aos="zoom-in" data-aos-easing="ease-in-sine">
                {works.map((work,index)=>{
                    return  <Work title={work.title} imgsrc={work.imgSrc} link={work.link} ></Work>
                })}
            </div>

        </div>
    )
}

export default MyWorks
