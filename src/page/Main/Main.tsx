import { FC } from "react"

import Introduce from "components/Introduce"
import Career from "components/Career"
import Certificate from "components/EtCetera"

const Main: FC = () => {
    return (
        <>
            <br />
            <Introduce />
            <br />
            <Career />
            <br />
            <Certificate />
        </>
    )
}

export default Main