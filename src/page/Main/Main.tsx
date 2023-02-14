import { FC } from "react"

import Information from "components/Information"
import Introduce from "components/Introduce"
import Career from "components/Career"
import Certification from "src/components/Certification"
import Link from "src/components/Link"

const Main: FC = () => {
    return (
        <section>
            <Information />
            <Introduce />
            <Career />
            <Certification />
            <Link />
        </section>
    )
}

export default Main