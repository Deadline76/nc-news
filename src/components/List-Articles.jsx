import { useEffect, useState } from "react"
import { getArticlesByTopic } from "../Utils/api"


export const ListArticles = (props) => {
    const [articles, setArticles] = useState([])
    

    useEffect(() => {
        getArticlesByTopic(props.topic).then((data) => {
            setArticles(data)
        })
    }, [props.topic])

    return (
        <>
        {data.map((({title, topic, votes, article_id}) => {
            return (
              <section key={article_id}>
              <h1>{title}</h1>
              <p>{topic}</p>
              <p>{votes}</p>  
              </section>
            )
        }))}
        </>
    )
}