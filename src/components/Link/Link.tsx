import { FC } from "react"



const Link: FC = () => {
    return (
        <section>
            <article className="link-wrapper">
                <a className="link-txt" onClick={() => { window.open("https://gastroad.github.io/portfolio") }}> portfolio </a>
            </article>
        </section >
    )
}

export default Link