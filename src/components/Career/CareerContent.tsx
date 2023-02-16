

import { FC } from "react"

interface PropTypes {
    content: Career
}

const CareerContent: FC<PropTypes> = ({ content }) => {
    return (
        <li className="career-list-item">
            <h4 className="highlight">{content.title}</h4>
            <div className="career-list-item-txt" >
                <time>{`${content.startDate} ~ ${content.endDate}`}</time>
                <p>{content.content}</p>
            </div>
        </li >
    )
}

export default CareerContent