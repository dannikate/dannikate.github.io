import React from "react"
import Articles from "./Articles"
import Productions from "./Productions"
import Code from "./Code"

export default function Portfolio() {
    return (
        <div>
            <h2>/ portfolio</h2>
            <Articles />
            <Productions />
            <Code />
        </div>
    )
}