import { useEffect, useState } from "react"
import { getArticles } from "../Utils/api"
import { Link } from 'react-router-dom'


export const ListArticles = ({topic, orderBy, sortBy}) => {
    const [articles, setArticles] = useState([])
    const [isloading, setIsLoading] = useState(true)

    

    useEffect(() => {
        setIsLoading(true)
            getArticles(topic, orderBy, sortBy).then((data) => {
                setArticles(data)
                setIsLoading(false)
        })
    }, [topic, orderBy, sortBy])

    if (isloading) return <h2 className="loading">Loading...</h2>
 

    return (
        <div>
        {articles.map((({title, topic, votes, article_id, created_at, comment_count}) => {
            
            return (
                <Link key={article_id} to={`/article/${article_id}`} className="article-link"> 
                    <section className="article-section">
                        <h2 className="article-title">{title}</h2>
                        <h4 className="article-topic">{topic}</h4>
                        <footer className="articles-footer">
                            <span>Date added: {created_at.slice(0,10)}</span>
                            <span>Likes: {votes}</span>
                            <span>Comments: {comment_count}</span>
                        </footer>
                    </section>
                </Link>
            )
        }))}
        </div>
    )
}