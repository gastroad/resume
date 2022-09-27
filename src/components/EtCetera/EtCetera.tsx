
import { useEffect, useState, FC } from "react"

import { getEtCeteraData } from "src/api/request"
import EtCeteraContent from "./EtCeteraContent"
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner"


const EtCetera: FC = () => {
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

    return (
        <>
            <h2 className="h2">
                기타
            </h2>
            <article style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                {contents.map((content, index) => {
                    return <EtCeteraContent content={content} key={`EtCeteraContent-${index}`} />
                })}
            </article>
            {isLoading && <LoadingSpinner />}
        </>
    )
}

export default EtCetera