

import { useEffect, useId, useState, Fragment, FC } from "react"

interface PropTypes {
    content: Career
}

const CareerContent: FC<PropTypes> = ({ content }) => {
    const key = useId();
    return (
        <Fragment key={key}>
            <div>
                <h3>{content.title}</h3>
                <time>{content.startDate}</time>
                <time>{content.endDate}</time>
                <p>{content.content}</p>
            </div>
        </Fragment>
    )
}

export default CareerContent