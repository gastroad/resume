

import { useEffect, useId, useState, Fragment, FC } from "react"

interface PropTypes {
    content: Career
}

const CareerContent: FC<PropTypes> = ({ content }) => {
    const key = useId();
    return (
        <li key={key} className="career-list-item">
            <h4 className="h4">
                {content.title}</h4>
            <time>{content.startDate}</time>
            ~
            <time>{content.endDate}</time>
            <pre>{content.content}</pre>
        </li >
    )
}

export default CareerContent