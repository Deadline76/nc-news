import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArticleView } from '../components/Article-view'
import { Header } from '../components/Header'
import { Comments } from '../components/Comments'
import { PostComment } from '../components/Post-Comment'


export const SingleArticle = () => {
    const {articleId} = useParams()
  
    return (
        <div>
            <Header />
            <ArticleView selectedArticle={articleId}/>
            <PostComment selectedArticle={articleId}/>
            <Comments selectedArticle={articleId}/>
        </div>
    )
}