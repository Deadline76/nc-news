import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
// import TopicDropDown from '../components/Topic-Drop-Down'
import { ListArticles } from '../components/List-Articles'
import { useState } from 'react'

export const ArticlesByTopic = () => {
    const { topicName } = useParams()
    const [topic, setTopic] = useState([topicName])


    return (
     <>
        <Header />
        {/* <TopicDropDown setTopic={setTopic}/> */}
        {/* <SortBy /> */}
        <ListArticles topic={topic}/>
     </>
    )
}

