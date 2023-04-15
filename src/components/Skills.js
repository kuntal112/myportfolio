import React,{useContext,useEffect} from 'react'
import {routeContext} from "../App"
import SkillCard from './SkillCard'
function Skills() {
    let {dispatch}=useContext(routeContext);
    useEffect(() => {
        dispatch({page:"home",payload:{next:"myworks",prev:"about"}})
       
    }, [dispatch])
    return (
        <div className="services-div container">
            <div className="fixed-heading">
            <h1 className="component-headings ">Skills</h1>
            <hr className=""></hr>
            </div>
           
            <SkillCard effect="zoom-in" skills="FRONTEND - TECHNOLOGIES" imgsrc="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></SkillCard>
            </div>
    )
}

export default Skills;
