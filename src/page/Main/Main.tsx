import { FC } from "react"

import Information from "components/Information"
import Introduce from "components/Introduce"
import Career from "components/Career"
import Certificate from "components/EtCetera"

const Main: FC = () => {
    return (
        <section>
            <Information />
            <Introduce />
            <Career />
            <Certificate />
        </section>
    )
}

export default Main