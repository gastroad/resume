import { FC } from "react"
const Footer: FC = () => {
    return (
        <footer className="footer">
            <a
                style={{
                    cursor: "pointer",
                    color: "white",
                    textDecoration: "none"
                }}
                href="mailto:coldpotatosweet@gmail.com"
            >
                메일 보내기
            </a>
        </footer>
    )
}



export default Footer