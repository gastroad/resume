
import { FC, ReactNode, useContext, useEffect, useState } from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

interface Props {
    children: ReactNode
    disabled: boolean
    onClick: VoidFunction
}
const Arrow: FC<Props> = (props) => {
    const { children, disabled, onClick } = props

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                opacity: disabled ? "0" : "1",
                userSelect: "none",
                backgroundColor: "rgb(16,22,29)",
                color: "white",
                border: "0px",
                borderRadius: "0px",
                transitionDuration: ".5s",
                width: "35px",
                padding: "0px"
            }}
        >
            {children}
        </button >
    );

}


function LeftArrow() {
    const {
        isFirstItemVisible,
        scrollPrev,
        visibleElements,
        initComplete
    } = useContext(VisibilityContext);

    const [disabled, setDisabled] = useState(
        !initComplete || (initComplete && isFirstItemVisible)
    );
    useEffect(() => {
        if (visibleElements.length) {
            setDisabled(isFirstItemVisible);
        }

    }, [isFirstItemVisible, visibleElements]);

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.code == "ArrowLeft") {
                scrollPrev()
            }
        })
    }, [])


    return (
        <Arrow disabled={disabled} onClick={() => scrollPrev()}>
            <img style={{ width: "25px" }} src={require("../../assets/image/leftArrow.png").default} />
        </Arrow>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext, visibleElements } = useContext(
        VisibilityContext
    );

    const [disabled, setDisabled] = useState(
        !visibleElements.length && isLastItemVisible
    );
    useEffect(() => {
        if (visibleElements.length) {
            setDisabled(isLastItemVisible);
        }
    }, [isLastItemVisible, visibleElements]);
    useEffect(() => {
        const temp = (e: any) => {
            if (e.code == "ArrowRight") {
                scrollNext()
            }
        }
        window.addEventListener("keydown", temp)
        return () => {
            window.removeEventListener("keydown", temp)
        };
    }, [])

    return (
        <Arrow disabled={disabled} onClick={() => scrollNext()}>
            <img style={{ width: "25px" }} src={require("../../assets/image/rightArrow.png").default} />
        </Arrow>
    );
}
export { LeftArrow, RightArrow } 