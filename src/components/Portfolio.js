import React from "react"
import Articles from "./Articles"
import Productions from "./Productions"
import Code from "./Code"

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio section</h1>
            <Articles />
            <Productions />
            <Code />
        </div>
    )
}