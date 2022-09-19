import React from "react" 

export default function Productions(props) {
    return (
        <div className="productions">
            <h4>{props.title}</h4>
            {/* <p>(insert list of productions here)</p> */}
            {/* TODO: update as a list*/}
            <p>{props.year}</p>
            <p>{props.positions}</p>
            <p>{props.synopsis}</p>
            <p>{props.recognition}</p>
            <a href={props.link}>Watch</a>
        </div>
    )
}