

import { useEffect, useId, useState, Fragment, FC } from "react"

interface PropTypes {
    content: Career
}

const CareerContent: FC<PropTypes> = ({ content }) => {
    const key = useId();
    return (
        <li key={key} style={{ marginBottom: "5px", }}>
            <div style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                border: "0.4px solid black",
                padding: "10px 10px 10px 15px",
                borderRadius: "3px",
                overflow: "auto"
            }}>
                <h3 style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    display: "inline-block",
                }} >{content.title}</h3>
                <time style={{
                    margin: "0px 5px",
                    fontSize: "14px",
                    color: "rgb(60, 60, 60)",
                    fontWeight: 500,
                }}>{content.startDate}</time>
                ~
                <time style={{
                    margin: "0px 5px",
                    fontSize: "14px",
                    color: "rgb(60, 60, 60)",
                    fontWeight: 500,
                }}>{content.endDate}</time>
                <pre style={{ margin: "5px 0px 0px 0px ", fontSize: "14px" }}>{content.content}</pre>
            </div>
        </li >
    )
}

export default CareerContent