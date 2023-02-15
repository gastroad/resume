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
            <article >
                <h2 className="h2" style={{
                    margin: "0 auto",
                    textAlign: "center",
                    marginTop: "3vh",

                }}>
                    경력
                </h2>
                <ul className="career-list">
                    <h3 className="h3">
                        (주)앤서웍스
                        <time style={{
                            marginLeft: "10px",
                            fontSize: "14px",
                            color: "rgb(220,220,220)",
                            fontWeight: 500,
                        }}>2017.09 ~ 2022.07</time>
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