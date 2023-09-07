import { useEffect, useState } from "react"
import { deleteComment, getCommentsByArticle } from "../Utils/api"
import { UserContext } from "../Contexts/User-context"
import { useContext } from "react"


export const Comments = ({selectedArticle}) => {
    const [comments, setComments] = useState([])
    const [isloading, setIsLoading] = useState(true)
    const { user } = useContext(UserContext);
    const [error, setError] = useState('')
    const [deleting, setDeleting] = useState(false)


    useEffect(() => {
        getCommentsByArticle(selectedArticle).then((data) => {
            setComments(data)
            setIsLoading(false)
        })
    },[selectedArticle])

    const handleDeleteClick = (comment_id) => {
        setDeleting(true)
        deleteComment(comment_id).then(() => {
            setComments(originalComments => originalComments.filter(comment => 
                comment.comment_id !== comment_id))
            setDeleting(false)
        })
        .catch(err => {
            setDeleting(false)
            setError('Error: Could not delete your comment at this time')
        })
    }

    if (comments.length === 0) return (
        <div> 
            <h5 className="no-comments">be the first to comment...</h5>
        </div>
        )


    if (isloading) return <h2 className="loading">Loading...</h2>

    return (
        <div className="comments-div">

            {deleting ? <h2 className="loading">Deleting...</h2>: null}
            {error ? <h2 className="loading">`${error}`</h2>: null}

            {comments.map(({ comment_id, author, body, votes, created_at }) => {
                return (
                    <section className="comments-section" key={comment_id}>
                        {user === author ? <button className="delete-button" onClick={() => handleDeleteClick(comment_id)}>Delete</button>: null}
                        <h3 className="comments-h3">{author}</h3>
                        <p className="comments-body">{body}</p>
                        <footer className="comments-footer">
                            <span className="comments-span">Likes: {votes}</span>
                            <span className="comments-span">Commented on: {created_at.slice(0, 10)}</span>
                        </footer>
                    </section>
                )
            })}
        </div>
    )
}