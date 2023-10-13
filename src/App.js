import React, { createContext, useReducer,useState,lazy,Suspense } from 'react'
import Home from './components/home/Home'
import NavBar from './components/NavBar'
import "./App.css"
import { BrowserRouter, Link, Route } from "react-router-dom"
import { initialState, reducer } from './reducers/RouteReducer'
import Fallback from './components/Fallback'
const AboutUs=lazy(()=>import("./components/AboutUs"))
const ContactUs=lazy(()=>import("./components/contactus/ContactUs"))
const MyWorks=lazy(()=>import("./components/myworks/MyWorks"))
const Skills=lazy(()=>import("./components/Skills"))
export const routeContext = createContext();
let App = () => {
    let [state, dispatch] = useReducer(reducer, initialState);
    let [navStatus,setNavStatus]=useState(false);
    const toggle = () => {
        setNavStatus(!navStatus)
    }
    return (
        <div className="app-div">
            <BrowserRouter>
                <div className="outer-nav-div">
                    <div onClick={toggle} className="nav-toggler"><span className={`lines ${navStatus&&"open"}`}></span></div>
                    <NavBar status={navStatus}/>
                </div>
                <routeContext.Provider value={{ state, dispatch }}>

                    <div className="components-section">
                        <Suspense fallback={<Fallback/>}>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={AboutUs} />
                        <Route path="/skills" exact component={Skills} />
                        <Route path="/myworks" exact component={MyWorks} />
                        <Route path="/contact" exact component={ContactUs} />
                        </Suspense>
                    </div>
                </routeContext.Provider>


                <Link to={`/${state.next}`}><div className="nav-ball next">Next{">>"}</div></Link>
                <Link to={`/${state.prev}`}><div className="nav-ball prev">{"<<"}Prev</div></Link>
            </BrowserRouter>

        </div>
    )
}

export default App
