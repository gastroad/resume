

import { FC } from "react"

interface PropTypes {
    content: Certification
}

const Certification: FC<PropTypes> = ({ content }) => {
    return (
        <div className="certification-item">
            <p>자격증 : <span className="highlight">{content.name}</span></p>
            <time>취득일자 : {content.date}</time>
            <p >자격증번호 :{content.content}</p>
        </div>
    )
}

export default Certification