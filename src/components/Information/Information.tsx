import { FC } from "react"

const Information: FC = () => {
    return (
        <article style={{
            backgroundColor: "red"
        }}>
            <h2 className="h2">
                인적사항
            </h2>
            <div className="card">
                <div style={{ display: "inline-block", marginRight: "5px" }}>
                    <p>이름 </p>
                    <p>생년월일 </p>
                    <p>email </p>
                </div>
                <div style={{ display: "inline-block" }}>
                    <p>: 진현성</p>
                    <p>: 2000.02.15</p>
                    <p>: coldpotatosweet@gmail.com</p>
                </div>

            </div>
        </article>
    )
}

export default Information