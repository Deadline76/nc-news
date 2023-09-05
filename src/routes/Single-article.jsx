import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArticleView } from '../components/Article-view'
import { Header } from '../components/Header'

export const SingleArticle = () => {

    const {articleId} = useParams()
    // const [selectedArticle, setArticle] = useState([])

    // useEffect(() => {
    //     setArticle(articleId)
    // })

    return (
        <div>
            <Header />
            <ArticleView selectedArticle={articleId}/>
        </div>
    )
}