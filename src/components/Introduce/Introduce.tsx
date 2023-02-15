import { FC } from "react"

const Introduce: FC = () => {
    return (
        <section>
            <article className="introduce-wrapper">
                <h2 className="h2">간단소개</h2>
                <p style={{ wordBreak: "keep-all" }}>프론트엔드 개발자로 스타트업에서 웹 서비스를 개발, 운영을 해 보았습니다.
                    주로 React, TypeScript를 사용해서 개발합니다.
                    2017.09~2018.08 년까지 콘텐츠를 제작하는 회사에서 콘텐츠 발행, 관리 등의 자동화를 하는 업무를 진행하였고,
                    이후 커머스 회사에서 쇼핑몰 관리 서비스를 개발, 운영하는 업무를 진행하였습니다.</p>
            </article>
        </section>
    )
}

export default Introduce