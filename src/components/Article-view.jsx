import { useEffect, useState } from "react"
import { getArticleById } from "../Utils/api"



export const ArticleView = (props) => {
    const [displayArticle, setDisplayArticle] = useState([])
    const [isloading, setIsLoading] = useState(true)


    useEffect(() => {
        getArticleById(props.selectedArticle).then((data) => {
            setDisplayArticle(data)
            setIsLoading(false)
        })
    })

    if (isloading) return <h2 className="loading">Loading...</h2>

    return (
        <section>
            <h2>{displayArticle.title}</h2>
            <h3>Author: {displayArticle.author}</h3>
            <p>{displayArticle.body}</p>
            <img src={displayArticle.article_img_url} alt="img representing article content" />
            <footer>
                <p>{displayArticle.created_at.slice(0, 10)}</p>
                <p>Likes: {displayArticle.votes}</p>
                <p>{displayArticle.topic}</p>
            </footer>
        </section>
    )
}