import { useEffect, useState, FC } from "react"

import { getCarrerData } from "src/api/request"
import CareerContent from "./CareerContent"
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner"

const Career: FC = () => {
    const [contents, setContents] = useState<Career[]>([{
        title: "", startDate: "", endDate: "", content: ""
    }]);
    const [isLoading, setIsLoading] = useState(false)

    const getCarrerContents = async () => {
        setIsLoading(true)
        const carrerData = await getCarrerData()
        setContents(carrerData)
        setIsLoading(false)
    }

    useEffect(() => {
        getCarrerContents()
    }, []);

    return (
        <>

            <section>

                <header>
                    경력
                </header>
                <article>
                    {contents.map((content, index) => {
                        return <CareerContent content={content} key={`CareerContent-${index}`} />
                    })}
                </article>
            </section>
            {isLoading && <LoadingSpinner />}
        </>
    )
}

export default Career