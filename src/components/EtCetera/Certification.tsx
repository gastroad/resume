import { useEffect, useState, Fragment, useId, FC } from "react"
import { getEtCeteraData } from "src/api/request"
import CertificationItem from "./CertificationItem"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"



const Certification: FC = () => {
    const [contents, setContents] = useState<Certificate[]>([{
        name: "", date: "", content: ""
    }]);

    const [isLoading, setIsLoading] = useState(false)

    const getEtCeteraContents = async () => {
        setIsLoading(true)
        const etCeteraData = await getEtCeteraData()
        setContents(etCeteraData)
        setIsLoading(false)
    }

    useEffect(() => {
        getEtCeteraContents()
    }, []);

    const key = useId();
    return (
        <article className="certification-list">
            <>
                {contents.map((content, index) => {
                    return <CertificationItem content={content} key={`Certification-${index}`} />
                })}
            </>
            {isLoading && <LoadingSpinner />}
        </article>
    )
}

export default Certification