import React, { createContext, useReducer } from 'react'
import Home from './components/home/Home'
import NavBar from './components/NavBar'
import AboutUs from './components/AboutUs'
import ContactUs from './components/contactus/ContactUs'
import MyWorks from './components/myworks/MyWorks'
import Skills from './components/Skills'
import SkillCard from './components/SkillCard';
import "./App.css"
import { BrowserRouter, Link, Route } from "react-router-dom"
import { initialState, reducer } from './reducers/RouteReducer'
export const routeContext = createContext();
let App = () => {
    let [state, dispatch] = useReducer(reducer, initialState);

    const toggle = () => {
        let navbar = document.querySelector(".navbar");
        let lines=document.querySelector(".lines");
        lines.classList.toggle("open")
        navbar.classList.toggle("closed")
    }
    return (
        <div className="app-div">
            <BrowserRouter>
                <div className="outer-nav-div">
                    <div onClick={toggle} className="nav-toggler"><span className="lines"></span></div>
                    <NavBar />
                </div>
                <routeContext.Provider value={{ state, dispatch }}>

                    <div className="components-section">
                        <Route path="/" exact component={Home}>
                            <Home></Home>
                        </Route>
                        <Route path="/about" exact component={AboutUs}>
                            <AboutUs />
                        </Route>
                        <Route path="/skills" exact component={SkillCard}>
                            <Skills />
                        </Route>
                        <Route path="/myworks" exact component={MyWorks}>
                            <MyWorks />
                        </Route>
                        <Route path="/contact" exact component={ContactUs}>
                            <ContactUs />
                        </Route>
                    </div>
                </routeContext.Provider>


                <Link to={`/${state.next}`}><div className="nav-ball next">Next{">>"}</div></Link>
                <Link to={`/${state.prev}`}><div className="nav-ball prev">{"<<"}Prev</div></Link>
            </BrowserRouter>

        </div>
    )
}

export default App
