import React from "react"

export default function Code(props) {
    return (
        <div className="code">
            <h4>{props.title}</h4>
            { /* TODO: update as a list*/ }
            <p>{props.year}</p>
            <p>{props.language}</p>
            <p>{props.description}</p>
            <a href={props.link}>Source Code</a>
        </div>
    )
}