import { FC } from "react"

import Information from "components/Information"
import Introduce from "components/Introduce"
import Career from "components/Career"
import Certificate from "components/EtCetera"

const Main: FC = () => {
    return (
        <div style={{
            width: "80%",
            margin: "0px auto",
            marginTop: "130px",
            padding: "0px 30px"
        }}>
            <Information />
            <Introduce />
            <Career />
            <Certificate />
        </div>
    )
}

export default Main