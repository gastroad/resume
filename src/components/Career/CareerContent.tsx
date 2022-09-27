

import { useEffect, useState } from "react"

interface PropTypes {
    content: Career
}

const CareerContent: React.FC<PropTypes> = ({ content }) => {
    return (
        <>
            <div>
                <h3>{content.title}</h3>
                <time>{content.startDate}</time>
                <time>{content.endDate}</time>
                <p>{content.content}</p>
            </div>
        </>
    )
}

export default CareerContent