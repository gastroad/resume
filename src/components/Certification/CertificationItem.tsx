

import { useEffect, useState, Fragment, useId, FC } from "react"

interface PropTypes {
    content: Certificate
}

const Certification: FC<PropTypes> = ({ content }) => {
    const key = useId();
    return (
        <div key={key} className="certification-list-item">
            <h3 className="h3" style={{ marginBottom: "10px" }}>자격증 : {content.name}</h3>
            <time className="h3" style={{ marginBottom: "10px", display: "block" }}>취득일자 : {content.date}</time>
            <p className="h3">자격증번호 :{content.content}</p>
        </div>
    )
}

export default Certification