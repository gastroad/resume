import { useEffect, FC } from "react"
import { useSelector } from "react-redux"

import { RootState, useAppDispatch } from "src/store"
import { fetchCarrerData } from "api/request"

import CareerContent from "./CareerContent"

const Career: FC = () => {
    const carrer = useSelector((state: RootState) => state.career)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchCarrerData())
    }, [])
    const { carrerData } = carrer

    return (
        <section>
            <article className="career-wrapper">
                <h2>경력</h2>
                <ul className="career-list">
                    <h3>
                        (주)앤서웍스
                        <time> 2017.09 ~ 2022.07</time>
                    </h3>
                    {carrerData.map((content, index) => {
                        return <CareerContent content={content} key={`CareerContent-${index}`} />
                    })}

                </ul>
            </article>
        </section>
    )
}

export default Career