import { useEffect, useState } from "react"
import { getTopics } from "../Utils/api"
import { Link } from 'react-router-dom'


export const ListTopics = () => {
    const [allTopics, setAllTopics] = useState([])

    useEffect(() => {
        getTopics().then((topics) => {
            setAllTopics(topics)
        })
    }, [])

    return (
        <div>
            <h1>Article Topics</h1>
            <ul>
                {allTopics.map((topic) => {
                    <li key={topic}>
                        <Link to={`/topic/${topic}`}>{topic}</Link>
                    </li>
                })}
                    <li>
                        <Link to={`/topic`}>All Topics</Link>
                    </li>
            </ul>
        </div>
    )
}