import { useEffect, useState } from "react"
import { getCarrerData } from "src/api/request"
import CareerContent from "./CareerContent"

const Career: React.FC = () => {
    const [contents, setContents] = useState<Career[]>([{
        title: "", startDate: "", endDate: "", content: ""
    }]);

    const getCarrerContents = async () => {
        const carrerData = await getCarrerData()
        setContents(carrerData)
    }

    useEffect(() => {
        getCarrerContents()
    }, []);

    return (
        <section>
            <header>
                경력
            </header>
            <article>
                {contents.map((content, index) => {
                    return <CareerContent content={content} key={index} />
                })}
            </article>
        </section>
    )
}

export default Career