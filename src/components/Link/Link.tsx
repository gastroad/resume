import { useEffect, useState, Fragment, useId, FC } from "react"
import { getLinkListData } from "src/api/request"
import LinkItem from "./LinkItem"



const Link: FC = () => {
    const [contents, setContents] = useState<Link[]>([{
        name: "", url: ""
    }]);
    const key = useId();


    const getLinkContents = async () => {
        const LinkData = await getLinkListData()
        setContents(LinkData)
    }

    useEffect(() => {
        getLinkContents()
    }, []);


    return (
        <article className="link-list">
            {contents.map((content) => {
                return <LinkItem content={content} key={key} />
            })}
        </article>
    )
}

export default Link