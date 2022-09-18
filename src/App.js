import React from "react"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Recognition from "./components/Recognition"
import Certification from "./components/Certifications"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div>
            <h1>Hi, I'm Dannika</h1>
            <About />
            <Skills />
            <Experience /> 
            <Education />
            <Recognition />
            <Certification />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}