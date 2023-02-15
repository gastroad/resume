import { useEffect, useState, useId, FC } from "react"
import { getEtCeteraData } from "src/api/request"
import CertificationItem from "./CertificationItem"



const Certification: FC = () => {
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
            <article className="certification-wrapper" >
                <h2 className="h2">
                    자격증
                </h2>
                <>
                    {contents.map((content, index) => {
                        return <CertificationItem content={content} key={`Certification-${index}`} />
                    })}
                </>
            </article>
        </section>
    )
}

export default Certification