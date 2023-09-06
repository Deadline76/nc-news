import { useState } from "react"
import { postCommentByArticle } from "../Utils/api"


export const PostComment = ({selectedArticle}) => {
    const [user, setUser] = useState('cooljmessy')
    const [sendComment, setSendComment] = useState('')
    const [postedComment, setPostedComment] = useState(null)
    const [postedAt, setPostedAt] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isValidated, setIsValidated] = useState(true)


    const handleCommentChange = (event) => {
        setSendComment(event.target.value)
    }

   

    const handleSubmit = (event) => {
        event.preventDefault()
        if (sendComment.length < 5 || sendComment.length > 350) {
            setIsValidated(false)
        } else {
        
        const commentObj = {
            username: user,
            body: sendComment
        }
        setIsLoading(true)
        postCommentByArticle(selectedArticle, commentObj).then((data) => {
            setSendComment('')
            setPostedComment(data.comment.body)
            setPostedAt(data.comment.created_at)
            setIsLoading(false)
        })
        .catch(err => {
            setError('Sorry we could not post your comment at this time.')
            setIsLoading(false)
        })
    }
}

    if (isLoading) return <h2 className="loading">Loading...</h2>

    if (error) return <h2 className="loading">{error}</h2>

    if (!isValidated) return <h2 className="loading">Your comment must be between 5 and 350 characters</h2>


    if (postedComment) return (
        <div className="post-comments-div">
            <section className="comments-section">
                <h3 className="comments-h3">{`Thanks for posting ${user}!`}</h3>
                <p className="comments-body">{postedComment}</p>
                <footer className="comments-footer">
                    <span className="comments-span">Likes: 0</span>
                    <span className="comments-span">{`Commented on: ${postedAt.slice(0,10)}`}</span>
                </footer>
            </section>
        </div>
    )

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3 className="form-title" >Post a comment</h3>
            <input className="form-input" id="comment" value={sendComment} onChange={handleCommentChange} type="text" />
            <button className="form-button" type="submit">Submit</button>
        </form>
    )
}