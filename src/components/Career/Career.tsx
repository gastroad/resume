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
                    <ul style={{
                        borderRadius: "3px",
                        border: "0.4px solid gray",
                        padding: "10px 5px 0px 5px",
                        boxShadow: "rgb(100 100 111 / 20%) 0px 7px 29px 0px"
                    }}>
                        <p
                            style={{
                                marginBottom: "10px",
                                marginLeft: "10px",
                                fontSize: "22px"
                            }}>(주)앤서웍스</p>
                        {contents.map((content, index) => {
                            return <CareerContent content={content} key={`CareerContent-${index}`} />
                        })}
                    </ul>
                </article>
            </section>
            {isLoading && <LoadingSpinner />}
        </>
    )
}

export default Career