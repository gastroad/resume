

import { useEffect, useState } from "react"

interface PropTypes {
    content: Certificate
}

const EtCeteraContent: React.FC<PropTypes> = ({ content }) => {
    return (
        <>
            <div>
                <h3>{content.name}</h3>
                <time>{content.date}</time>
                <p>{content.content}</p>
            </div>
        </>
    )
}

export default EtCeteraContent