import { useEffect, useState } from "react"
import { getArticleById } from "../Utils/api"



export const ArticleView = ({selectedArticle}) => {
    const [displayArticle, setDisplayArticle] = useState([])
    const [isloading, setIsLoading] = useState(true)


    useEffect(() => {
        getArticleById(selectedArticle).then((data) => {
            setDisplayArticle(data)
            setIsLoading(false)
        })
    })

    if (isloading) return <h2 className="loading">Loading...</h2>

    return (
        <section className="article">
            <h2 className="article-title">{displayArticle.title}</h2>
            <h3 className="article-author">Author: {displayArticle.author}</h3>
            <p className="article-body">{displayArticle.body}</p>
            <div className="article-image-container">
                <img className="article-image" src={displayArticle.article_img_url} alt="img representing article content" />
            </div>
            <footer className="article-footer"> 
                <p className="article-created-at">Date added: {displayArticle.created_at.slice(0, 10)}</p>
                <p className="article-likes">Likes: {displayArticle.votes}</p>
                <p className="article-topic2">Topic: {displayArticle.topic}</p>
            </footer>
</section>
    )
}