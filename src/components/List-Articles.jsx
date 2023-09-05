import { useEffect, useState } from "react"
import { getAllArticles, getArticlesByTopic } from "../Utils/api"
import { useParams } from "react-router-dom"


export const ListArticles = (props) => {
    const [articles, setArticles] = useState([])
    

    useEffect(() => {
        if (!props.topic) {
            getAllArticles().then((data) => {
                setArticles(data)
            })
        } else {
        getArticlesByTopic(props.topic).then((data) => {
            setArticles(data)
        })
    }
    }, [props.topic])


    return (
        <div>
        {articles.map((({title, topic, votes, article_id}) => {
            
            return (
                <section key={article_id} className="article-section">
                    <h2 className="article-title">{title}</h2>
                    <p className="article-topic">{topic}</p>
                    <p className="article-votes">Votes: {votes}</p>
                </section>
            )
        }))}
        </div>
    )
}