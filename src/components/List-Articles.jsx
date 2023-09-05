import { useEffect, useState } from "react"
import { getAllArticles, getArticlesByTopic } from "../Utils/api"
import { useParams } from "react-router-dom"


export const ListArticles = (props) => {
    const [articles, setArticles] = useState([])
    const [isloading, setIsLoading] = useState(true)

    

    useEffect(() => {
        if (!props.topic) {
            getAllArticles().then((data) => {
                setArticles(data)
                setIsLoading(false)
            })
        } else {
            getArticlesByTopic(props.topic).then((data) => {
                setArticles(data)
                setIsLoading(false)
        })
    }
    }, [props.topic])

    if (isloading) return <h2 className="loading">Loading...</h2>
 

    return (
        <div>
        {articles.map((({title, topic, votes, article_id}) => {
            
            return (
                <section key={article_id} className="article-section">
                    <h2 className="article-title">{title}</h2>
                    <h4 className="article-topic">{topic}</h4>
                    <span className="article-votes">Votes: {votes}</span>
                </section>
            )
        }))}
        </div>
    )
}