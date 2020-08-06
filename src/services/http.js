const axios = require('axios');

const getCategoryList = async () => {
    const res = await axios.get(`https://jewishoffice.co.il/server/bookapi/`)
    return res.data
}

const getCategory = async (id,mode,page = 1) => {
    const res = await axios.get(`https://jewishoffice.co.il/server/bookapi/?category=${id}&page=${page}&mode=${mode}`)
    return res.data
}

const getBook = async (id) => {
    const res = await axios.get(`https://jewishoffice.co.il/server/bookapi/?book=${id}`)
    return res.data
}

const getAuthor = async (id) => {
    const res = await axios.get(`https://jewishoffice.co.il/server/bookapi/?author=${id}`)
    return res.data
}

const getNews = async () => {
    const res = await axios.get(`https://jewishoffice.co.il/server/bookapi/?news`)
    return res.data
}

const getFind = async (find) => {
    const res = await axios.get(`https://jewishoffice.co.il/server/bookapi/?find=${find}`)
    return res.data
}

const getRandomBook = async () => {
    const res = await axios.get(`https://jewishoffice.co.il/server/bookapi/?random&a${Math.floor(Math.random()*300)}`)
    return res.data
}

const askBook = async (query) => {
    const res = await axios.get(`https://jewishoffice.co.il/server/bookapi/?ask=${query}`)
    return res.data
}

export const http = {
    getCategoryList,
    getCategory,
    getBook,
    getAuthor,
    getNews,
    getFind,
    getRandomBook,
    askBook,
}