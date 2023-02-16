import { FC } from "react"

const Information: FC = () => {
    return (
        <section>
            <article className="infomation-wrapper">
                <h2>인적사항</h2>
                <div>
                    <p>이름 : <span>진현성</span></p>
                    <p>생년월일 : <span>2000.02.15</span> </p>
                    <p>email : <span>coldpotatosweet@gmail.com</span></p>
                </div>
            </article>
        </section>
    )
}

export default Information