import { Header } from '../components/Header'
// import TopicDropDown from '../components/Topic-Drop-Down'
import { ListArticles } from '../components/List-Articles'
import { useState } from 'react'

export const ArticlesByTopic = () => {
    const [topic, setTopic] = useState([])

    return (
     <>
        <Header />
        {/* <TopicDropDown setTopic={setTopic}/> */}
        {/* <SortBy /> */}
        <ListArticles topic={topic}/>
     </>
    )
}

