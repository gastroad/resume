
import { useEffect, useState, FC } from "react"
import { getEtCeteraData } from "src/api/request"
import EtCeteraContent from "./EtCeteraContent"


const EtCetera: FC = () => {
    const [contents, setContents] = useState<Certificate[]>([{
        name: "", date: "", content: ""
    }]);

    const getEtCeteraContents = async () => {
        const etCeteraData = await getEtCeteraData()
        setContents(etCeteraData)
    }

    useEffect(() => {
        getEtCeteraContents()
    }, []);

    return (
        <section>
            <header>
                자격증
            </header>
            <article>
                {contents.map((content, index) => {
                    return <EtCeteraContent content={content} key={`EtCeteraContent-${index}`} />
                })}
            </article>
        </section>
    )
}

export default EtCetera