import { useEffect, useState, FC } from "react"
import { getCertificationData } from "src/api/request"
import CertificationItem from "./CertificationItem"


import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../store"
import { fetchCertificationData } from "../../api/request"

const Certification: FC = () => {
    const certification = useSelector((state: RootState) => state.certification)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchCertificationData())
    }, [])

    const { certificationData } = certification

    return (
        <section>
            <article className="certification-wrapper" >
                <h2>자격증</h2>
                <>
                    {certificationData.map((content, index) => {
                        return <CertificationItem content={content} key={`Certification-${index}`} />
                    })}
                </>
            </article>
        </section>
    )
}

export default Certification