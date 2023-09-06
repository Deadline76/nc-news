import { useEffect, useState } from "react"
import { getCommentsByArticle } from "../Utils/api"


export const Comments = ({selectedArticle}) => {
    const [comments, setComments] = useState([])
    const [isloading, setIsLoading] = useState(true)


    useEffect(() => {
        getCommentsByArticle(selectedArticle).then((data) => {
            setComments(data)
            setIsLoading(false)
        })
    },[])

    if (isloading) return <h2 className="loading">Loading...</h2>

    return (
        <div className="comments-div">
            {comments.map((({comment_id, author, body, votes, created_at}) => {
                return (
                    <section className="comments-section" key={comment_id}>
                        <h3 className="comments-h3">{author}</h3>
                        <p className="comments-body">{body}</p>
                        <footer className="comments-footer">
                            <span className="comments-span">Likes: {votes}</span>
                            <span className="comments-span">Commented on: {created_at.slice(0, 10)}</span>
                        </footer>
                    </section>
                )
            }))}
        </div>
    )
}