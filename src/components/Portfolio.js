import React from "react"
import Articles from "./Articles"
import Papers from "./Papers"
import Productions from "./Productions"
import Code from "./Code"

import articleList from "../data/articles-list"
import papersList from "../data/papers-list"
import productionList from "../data/productions-list"
import codeProjects from "../data/code-projects"

export default function Portfolio(props) {
    const articles = articleList.map(info => {
        return (
            <Articles 
            key={info.id}
            {...info}
            />
        )
    })

    const papers = papersList.map(info => {
        return (
            <Papers 
            key={info.id}
            {...info}
            />
        )
    })

    const productions = productionList.map(info => {
        return (
            <Productions
            key={info.id}
            {...info}
        />
        )
    })

    const codes = codeProjects.map(info => {
        return (
            <Code
            key={info.id}
            {...info}
            />
        )
    })

    return (
        <div className="portfolio">
            <h2>/ portfolio</h2>
            <section>
                <h3> > articles</h3>
                {articles}
            </section>
            {/* <section>
                <h3> > papers</h3>
                {papers}
            </section> */}
            <section>
                <h3> > productions</h3>
                {productions}
            </section>
            <section>
                <h3> > code projects</h3>
                {codes}
            </section>
        </div>
    )
}