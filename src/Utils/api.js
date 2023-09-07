import axios from 'axios'

const baseURL = 'https://nc-news-u3qb.onrender.com/api'

export const getArticles = (selectedTopic, orderBy, sortBy) => {
    return axios.get(`${baseURL}/articles`, {
        params: {
        filter_by: selectedTopic,
        sort_by: sortBy,
        order_by: orderBy
        }
    })
    .then((response) => {
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

export const getArticleById = (article_id) => {
    return axios.get(`${baseURL}/articles/${article_id}`).then((response) => {
        return response.data.msg
    })
}

export const getCommentsByArticle = (article_id) => {
    return axios.get(`${baseURL}/articles/${article_id}/comments`).then((response) => {
        return response.data.msg
    })
}

export const updateArticleVotes = (article_id, obj) => {
    return axios.patch(`${baseURL}/articles/${article_id}`, obj)
    .then(response => {
        return response.data
    })
}

export const postCommentByArticle = (article_id, obj) => {
    return axios.post(`${baseURL}/articles/${article_id}/comments`, obj)
    .then(response => {
        return response.data
    })
}

export const getArticlesBySort = () => {
    return axios.get(`${baseURL}/articles`).then((response) => {
        return response.data.articles
    })
}
