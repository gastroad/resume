
import { useEffect, useState, FC } from "react"
import Certification from "./Certification"
import Link from "./Link"


const EtCetera: FC = () => {
    return (
        <>
            <h2 className="h2">
                기타
            </h2>
            <Certification />
            <Link />
            {/* <article>
                <>
                    <div style={{
                        borderRadius: "10px",
                        border: "0.8px solid gray",
                        display: "inline-block",
                        boxShadow: "rgb(100 100 111 / 20%) 0px 7px 29px 0px",
                        backgroundColor: "rgb(240 240 240)",
                        padding: "30px"
                    }}>
                        linkedin
                    </div>
                    <div style={{
                        borderRadius: "10px",
                        border: "0.8px solid gray",
                        display: "inline-block",
                        boxShadow: "rgb(100 100 111 / 20%) 0px 7px 29px 0px",
                        backgroundColor: "rgb(240 240 240)",
                        padding: "30px"
                    }}>
                        gitblog
                    </div>
                    <div style={{
                        borderRadius: "10px",
                        border: "0.8px solid gray",
                        display: "inline-block",
                        boxShadow: "rgb(100 100 111 / 20%) 0px 7px 29px 0px",
                        backgroundColor: "rgb(240 240 240)",
                        padding: "30px"
                    }}>
                        resume/portfolio
                    </div>
                    <div style={{
                        borderRadius: "10px",
                        border: "0.8px solid gray",
                        display: "inline-block",
                        boxShadow: "rgb(100 100 111 / 20%) 0px 7px 29px 0px",
                        backgroundColor: "rgb(240 240 240)",
                        padding: "30px"
                    }}>
                        slides
                    </div>
                    <div style={{
                        borderRadius: "10px",
                        border: "0.8px solid gray",
                        display: "inline-block",
                        boxShadow: "rgb(100 100 111 / 20%) 0px 7px 29px 0px",
                        backgroundColor: "rgb(240 240 240)",
                        padding: "30px"
                    }}>
                        Medium
                    </div>
                </>
            </article> */}
        </>
    )
}

export default EtCetera