
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
        </>
    )
}

export default EtCetera