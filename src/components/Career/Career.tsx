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
            <h2 className="h2">
                경력
            </h2>
            <article>
                <ul className="career-list">
                    <h3 className="h3">
                        (주)앤서웍스
                        <time>2017.09 ~ 2022.07</time>
                    </h3>
                    {contents.map((content, index) => {
                        return <CareerContent content={content} key={`CareerContent-${index}`} />
                    })}
                </ul>
            </article>
            {isLoading && <LoadingSpinner />}
        </>
    )
}

export default Career