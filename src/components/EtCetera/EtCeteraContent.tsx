

import { useEffect, useState, Fragment, useId, FC } from "react"

interface PropTypes {
    content: Certificate
}

const EtCeteraContent: FC<PropTypes> = ({ content }) => {
    const key = useId();
    return (
        <div key={key} style={{
            borderRadius: "10px",
            border: "0.8px solid gray",
            display: "inline-block",
            width: "40%",
            boxShadow: "rgb(100 100 111 / 20%) 0px 7px 29px 0px",
            backgroundColor: "rgb(240 240 240)",
            padding: "30px"
        }}>
            <h3 className="h3" style={{ marginBottom: "10px" }}>자격증 : {content.name}</h3>
            <time className="h3" style={{ marginBottom: "10px", display: "block" }}>취득일자 : {content.date}</time>
            <p className="h3">자격증번호 :{content.content}</p>
        </div>
    )
}

export default EtCeteraContent