import "./LoadingSpinner.scss"

const LoadingSpinner = () => {
    return (
        <div className="lds-ring"
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(10, 10, 10, 0.5)",
                left: "0px",
                top: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

            }}><div></div><div></div><div></div><div></div></div >

    )
}

export default LoadingSpinner