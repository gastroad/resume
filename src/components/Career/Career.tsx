import { useEffect, useState, FC } from "react"

import { getCarrerData } from "src/api/request"
import CareerContent from "./CareerContent"

const Career: FC = () => {
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
            <article className="career-wrapper">
                <h2>경력</h2>
                <ul className="career-list">
                    <h3>
                        (주)앤서웍스
                        <time> 2017.09 ~ 2022.07</time>
                    </h3>
                    {contents.map((content, index) => {
                        return <CareerContent content={content} key={`CareerContent-${index}`} />
                    })}

                </ul>
            </article>
        </section>
    )
}

export default Career