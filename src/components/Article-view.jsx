import { useEffect, useState } from "react"
import { getArticleById, updateArticleVotes } from "../Utils/api"



export const ArticleView = ({selectedArticle}) => {
    const [displayArticle, setDisplayArticle] = useState([])
    const [isloading, setIsLoading] = useState(true)
    const [likes, setLikes] = useState(0)
    const [hasLiked, setHasLiked] = useState(false)

    useEffect(() => {
        getArticleById(selectedArticle).then((data) => {
            setDisplayArticle(data)
            setLikes(data.votes)
            setIsLoading(false)
        })
    }, [selectedArticle])

    
    const handleLikeClick = () => {
        if(!hasLiked)
        setLikes(likes + 1)
        setHasLiked(true)
        updateArticleVotes(selectedArticle, {inc_votes: 1}).then(data => {
            
        })
        .catch(err => {
            if(err) {
                setLikes(likes)
                setHasLiked(false)
                alert('Error: something went wrong, please try again later')
            }
        })
    }


    const handleUnlikeClick = () => {
        if(hasLiked)
        setLikes(likes - 1)
        setHasLiked(false)
        updateArticleVotes(selectedArticle, {inc_votes: -1}).then(data => {

        })
        .catch(err => {
            if(err) {
                setLikes(likes)
                setHasLiked(true)
                alert('Error: something went wrong, please try again later')
            }
        })
    }

   

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
                <p className="article-likes">Likes: {likes}</p>
                <button className="like-button" onClick={handleLikeClick}>Like</button>
                <button className="unlike-button" onClick={handleUnlikeClick}>Unlike</button>
                <p className="article-topic2">Topic: {displayArticle.topic}</p>
            </footer>
</section>
    )
}