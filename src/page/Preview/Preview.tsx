import React, { ReactEventHandler, useState } from "react"
import { useNavigate } from "react-router-dom"
import cx from "classnames"

const preview = () => {

    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate()

    const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
        setIsActive(!isActive)
        setTimeout(() => {
            navigate("/resume");
        }, 1000)
    }
    return (
        <>
            <div className="preview-wrapper" >
                <div className={cx("card", { "fade-out": isActive })} onClick={handleCardClick} >
                    <img className="card-img" src={require("../../assets/image/profile.jpeg").default} />
                    <div className="card-txt">
                        <h5 className="title">진현성</h5>
                        <p className="paragraph"> 5년차 프론트엔드 개발자 진현성 이력서 입니다.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default preview 