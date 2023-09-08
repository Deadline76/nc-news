import { useParams } from 'react-router-dom'
import { ArticleView } from '../components/Article-view'
import { Header } from '../components/Header'
import { Comments } from '../components/Comments'
import { PostComment } from '../components/Post-Comment'
import { useState } from 'react'


export const SingleArticle = () => {
    const {articleId} = useParams()
    const [comments, setComments] = useState([])
  
    return (
        <div>
            <Header />
            <ArticleView selectedArticle={articleId}/>
            <PostComment selectedArticle={articleId} setComments={setComments}/>
            <Comments selectedArticle={articleId} comments={comments} setComments={setComments}/>
        </div>
    )
}