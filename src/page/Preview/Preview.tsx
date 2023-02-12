const preview = () => {
    return (
        <>
            <div className="preview-wrapper">
                <div className="card">
                    <img className="card-img" src={require("../../assets/image/profile.jpeg").default} />
                    <div className="card-txt">
                        <h5 className="title">진현성</h5>
                        <p className="paragraph"> 5년차 프론트엔드 개발자 진현성 이력서 입니다.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default preview 