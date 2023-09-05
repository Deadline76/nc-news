import { useEffect, useState } from "react"
import { getAllArticles, getArticlesByTopic } from "../Utils/api"
import { Link } from 'react-router-dom'


export const ListArticles = ({topic}) => {
    const [articles, setArticles] = useState([])
    const [isloading, setIsLoading] = useState(true)

    

    useEffect(() => {
        if (!topic) {
            getAllArticles().then((data) => {
                setArticles(data)
                setIsLoading(false)
            })
        } else {
            getArticlesByTopic(topic).then((data) => {
                setArticles(data)
                setIsLoading(false)
        })
    }
    }, [topic])

    if (isloading) return <h2 className="loading">Loading...</h2>
 

    return (
        <div>
        {articles.map((({title, topic, votes, article_id}) => {
            
            return (
                <Link key={article_id} to={`/article/${article_id}`} className="article-link"> 
                    <section key={article_id} className="article-section">
                        <h2 className="article-title">{title}</h2>
                        <h4 className="article-topic">{topic}</h4>
                        <span className="article-votes">Votes: {votes}</span>
                    </section>
                </Link>
            )
        }))}
        </div>
    )
}