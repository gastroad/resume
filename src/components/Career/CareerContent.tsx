

import { FC } from "react"

interface PropTypes {
    content: Career
}

const CareerContent: FC<PropTypes> = ({ content }) => {
    return (
        <li className="career-list-item" style={{ marginBottom: "20px", boxShadow: "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px" }}>
            <h4 className="h4" style={{ color: "white" }}>{content.title}</h4>
            <time
                style={{
                    margin: "0px",
                    fontSize: "14px",
                    color: "rgb(220,220,220)",
                    fontWeight: 500,
                }}
            >
                {content.startDate}
                <span style={{ fontSize: "14px", margin: "0px 5px" }}>~</span>
                {content.endDate}
            </time>
            <p style={{ fontSize: ".875rem" }}>{content.content}</p>
        </li >
    )
}

export default CareerContent