import { useEffect, useState, Fragment, useId, FC } from "react"
import { getLinkListData } from "src/api/request"
import LinkItem from "./LinkItem"



const Certification: FC = () => {
    const [contents, setContents] = useState<Link[]>([{
        name: "", url: ""
    }]);
    const key = useId();

    const [isLoading, setIsLoading] = useState(false)

    const getLinkContents = async () => {
        setIsLoading(true)
        const LinkData = await getLinkListData()
        setContents(LinkData)
        setIsLoading(false)
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

export default Certification