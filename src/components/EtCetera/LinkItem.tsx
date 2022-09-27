import { useEffect, useState, Fragment, useId, FC } from "react"
import cx from "classnames"

interface PropTypes {
    content: Link
}

const Certification: FC<PropTypes> = ({ content }) => {
    const key = useId();
    return (
        <a key={key} className="link-list-item"
            onClick={() => {
                window.open(content.url)
            }}
        >
            <h3 className="h4">{content.name}</h3>
        </a>
    )
}

export default Certification