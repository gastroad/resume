import { FC, useState, useEffect, useCallback } from "react"

import Information from "components/Information"
import Introduce from "components/Introduce"
import Career from "components/Career"
import Certification from "src/components/Certification"
import Link from "src/components/Link"
import { ScrollMenu } from "react-horizontal-scrolling-menu"
import { LeftArrow, RightArrow } from "components/Arrow/Arrow"


const Main: FC = () => {

    return (
        <div>
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                <Information />
                <Introduce />
                <Career />
                <Certification />
                <Link />
            </ScrollMenu>
        </div>
    )
}
export default Main