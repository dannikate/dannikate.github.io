import React from "react"
import Articles from "./Articles"
import Papers from "./Papers"
import Productions from "./Productions"
import Code from "./Code"

export default function Portfolio() {
    return (
        <div className="portfolio">
            <h2>/ portfolio</h2>
            <Articles />
            <Papers />
            <Productions />
            <Code />
        </div>
    )
}