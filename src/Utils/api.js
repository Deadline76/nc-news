import axios from 'axios'

const baseURL = 'https://nc-news-u3qb.onrender.com/api'

export const getArticlesByTopic = (selectedTopic) => {
    return axios.get(`${baseURL}/articles?filter_by=${selectedTopic}`).then((response) => {
        return response.data.articles
    })
}

export const getTopics = () => {
    return axios.get(`${baseURL}/topics`).then((response) => {
        const allTopics = []
        response.data.topics.map(topic => {
            allTopics.push(topic.slug)
        })
        return allTopics
    })
}

export const getAllArticles = () => {
    return axios.get(`${baseURL}/articles`).then((response) => {
        return response.data.articles
    })
}

export const getArticleById = (article_id) => {
    return axios.get(`${baseURL}/articles/${article_id}`).then((response) => {
        return response.data.msg
    })
}