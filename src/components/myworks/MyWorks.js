import React, { useEffect, useContext, useState } from 'react'
import { routeContext } from "../../App"
import Work from './Works'
import {works} from '../../data'

function MyWorks() {
    const [workList,setWorkList]=useState(works);
    const { dispatch } = useContext(routeContext);
    useEffect(() => {
        dispatch({ page: "home", payload: { next: "contact", prev: "skills" } })
        fetch(`${process.env.REACT_APP_WORK_DATA_URL}`)
        .then(res=>res.json())
        .then(data=>setWorkList([...works,...data]))
        .catch(e=>console.log(e));

    }, [dispatch])

    return (
        <div className="myWorkDiv">
            <div className="fixed-heading">
                <h1 className="component-headings">My Works</h1>
                <hr className=""></hr>
            </div>

            <div className="work-container">
                {workList.map(work=>{
                    return  <Work title={work.title} key={work.id} imgsrc={work.imgSrc} link={work.link} gitHubLink={work.gitHubLink}></Work>
                })}
            </div>

        </div>
    )
}

export default MyWorks
