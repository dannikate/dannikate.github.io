import React from "react"

export default function Articles(props) {
    return (
        <div className="articles">
            {/* <p>(insert carousel of articles here)</p> */}
            <h4>{props.title}</h4>
            <p>{props.publishDate}</p>
            <p>{props.publication}</p>
            <a href={props.link}>Read More</a>
        </div>
    )
}