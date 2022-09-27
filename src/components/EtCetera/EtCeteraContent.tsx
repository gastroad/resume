

import { useEffect, useState, Fragment, useId } from "react"

interface PropTypes {
    content: Certificate
}

const EtCeteraContent: React.FC<PropTypes> = ({ content }) => {
    const key = useId();
    return (
        <Fragment key={key}>
            <div>
                <h3>{content.name}</h3>
                <time>{content.date}</time>
                <p>{content.content}</p>
            </div>
        </Fragment>
    )
}

export default EtCeteraContent