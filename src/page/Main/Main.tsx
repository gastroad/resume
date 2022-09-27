import { FC } from "react"

import Information from "components/Information"
import Introduce from "components/Introduce"
import Career from "components/Career"
import Certificate from "components/EtCetera"

const Main: FC = () => {
    return (
        <div style={{
            width: "80%",
            maxWidth: "1080px",
            border: "0.4px solid gray",
            borderRadius: "5px",
            margin: "130px auto 0px",
            padding: "10px 11px",
        }}>
            <Information />
            <Introduce />
            <Career />
            <Certificate />
        </div>
    )
}

export default Main