import { FC } from "react"

const Information: FC = () => {
    return (
        <article>
            <h2 className="h2">
                인적사항
            </h2>
            <p style={{ margin: "10px 0px" }}>이름 : 진현성</p>
            <p style={{ margin: "10px 0px" }}>생년월일 : 2000.02.15</p>
            {/* <p style={{ margin: "10px 0px" }}>휴대폰 : 010-7188-8760</p> */}
            <p style={{ margin: "10px 0px" }}>email : coldpotatosweet@gmail.com</p>
        </article>
    )
}

export default Information