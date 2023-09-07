import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { ListArticles } from '../components/List-Articles'
import { useState } from 'react'
import { SortByOrderBy } from '../components/Sort-By-Order-by'


export const ArticlesByTopic = () => {
    const { topicName } = useParams()
    const [topic, setTopic] = useState([topicName])
    const [sortBy, setSortBy] = useState('created_at')
    const [orderBy, setOrderBy] = useState('desc')


    return (
     <>
        <Header />
        <SortByOrderBy setSortBy={setSortBy} setOrderBy={setOrderBy}/>
        <ListArticles topic={topic} sortBy={sortBy} orderBy={orderBy}/>
     </>
    )
}

