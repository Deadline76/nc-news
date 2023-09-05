import { useEffect, useState } from "react"
import { getTopics } from "../Utils/api"
import { Link } from 'react-router-dom'


export const ListTopics = () => {
    const [allTopics, setAllTopics] = useState([])
    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
        getTopics().then((topics) => {
            setAllTopics(topics)
            setIsLoading(false)
            
        })
    }, [])

    if (isloading) return <h2 className="loading">Loading...</h2>

    return (
        <div className="category-container">
            <h1 className="category-title">Article Topics</h1>
            <div className="category-grid">
                <div className="category-list">
                    <Link to="/topic" className="category-item">all topics</Link>
                    {allTopics.map((topic) => (
                        <Link
                            key={topic}
                            to={`/topic/${topic}`}
                            className="category-item"
                        >
                            {topic}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};