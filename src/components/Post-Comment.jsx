import { useState } from "react"
import { postCommentByArticle } from "../Utils/api"
import { UserContext } from "../Contexts/User-context"
import { useContext } from "react"


export const PostComment = ({selectedArticle, setComments}) => {
    const { user } = useContext(UserContext);
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
        
        if (sendComment.length < 4 || sendComment.length > 350) {
            setIsValidated(false)
        } else {

        setPostedComment(sendComment)

        const commentObj = {
            username: user,
            body: sendComment
        }

        const optimisticComment = {
            comment_id: new Date(),
            author: user,
            body: sendComment,
            votes: 0,
            created_at: 'now'
        }

        setComments(currentComments => [optimisticComment, ...currentComments])

        setIsLoading(true)
        postCommentByArticle(selectedArticle, commentObj).then((data) => {
            setSendComment('')
            setIsLoading(false)
        })
        .catch(err => {
            setError('Sorry we could not post your comment at this time.')
            setIsLoading(false)
            setComments(currentComments => 
                currentComments.filter(comment => comment.comment_id !== optimisticComment.comment_id))
            setPostedComment('')
        })
    }
}

    if (isLoading) return <h2 className="loading">posting...</h2>

    if (error) return <h2 className="loading">{error}</h2>

    if (!isValidated) return <h2 className="loading">Your comment must be between 5 and 350 characters</h2>

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3 className="form-title" >Post a comment</h3>
            <input className="form-input" id="comment" value={sendComment} onChange={handleCommentChange} type="text" />
            <button className="form-button" type="submit">Submit</button>
        </form>
    )
}