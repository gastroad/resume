

import { useEffect, useState, Fragment, useId, FC } from "react"

interface PropTypes {
    content: Link
}

const Certification: FC<PropTypes> = ({ content }) => {
    const key = useId();
    return (
        <div key={key} style={{
            borderRadius: "10px",
            border: "0.8px solid gray",
            display: "inline-block",
            boxShadow: "rgb(100 100 111 / 20%) 0px 7px 29px 0px",
            backgroundColor: "rgb(240 240 240)",
            padding: "30px",
            cursor: "pointer",
            textDecoration: "underline"

        }} onClick={() => {
            window.open(content.url)
        }}>
            <h3 className="h3">{content.name}</h3>
        </div>
    )
}

export default Certification