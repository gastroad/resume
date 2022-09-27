import { FC } from "react"
const Footer: FC = () => {
    return (
        <footer className="footer">
            <a
                style={{
                    cursor: "pointer"
                }}
                onClick={() => {
                    window.open("https://github.com/gastroad/resume")
                }}>
                코드 보기
            </a>
        </footer>
    )
}
export default Footer