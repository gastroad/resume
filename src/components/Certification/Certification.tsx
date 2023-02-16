import { useEffect, FC } from "react"
import { useSelector } from "react-redux"

import { RootState, useAppDispatch } from "src/store"
import { fetchCertificationData } from "api/request"

import CertificationItem from "./CertificationItem"

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