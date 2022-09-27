import { FC } from "react"

const Header: FC = () => {
    return (
        <header style={{ background: "#20232a", height: "100px", position: "fixed", top: "0px", left: "0px", width: "100%" }}>
            <h1 style={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", fontSize: "37px" }}>resume</h1>
        </header >
    )
}
export default Header