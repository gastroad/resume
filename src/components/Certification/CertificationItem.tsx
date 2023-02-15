

import { useEffect, useState, Fragment, useId, FC } from "react"

interface PropTypes {
    content: Certificate
}

const Certification: FC<PropTypes> = ({ content }) => {
    const key = useId();
    return (
        <div key={key} className="certification-item">
            <div className="certification-item-txt">
                <p className="paragraph" style={{ marginBottom: "10px" }}>자격증 : <span style={{ fontWeight: 'bold', color: "white" }}>{content.name}</span></p>
                <time className="paragraph" style={{ marginBottom: "10px", display: "block" }}>취득일자 : {content.date}</time>
                <p className="paragraph" >자격증번호 :{content.content}</p>
            </div>
        </div>
    )
}

export default Certification