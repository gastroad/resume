import { useEffect, useState, Fragment, useId, FC } from "react"
import { getEtCeteraData } from "src/api/request"
import CertificationItem from "./CertificationItem"



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
        <article style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <>
                {contents.map((content, index) => {
                    return <CertificationItem content={content} key={`Certification-${index}`} />
                })}
            </>
        </article>
    )
}

export default Certification