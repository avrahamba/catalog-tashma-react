const axios = require('axios');

const getCategoryList = async () => {
    const res = await axios.get(`https://jewishoffice.co.il/server/bookapi/`)
    return res.data
}

const getCategory = async (id) => {
    const res = await axios.get(`https://jewishoffice.co.il/server/bookapi/?category=${id}`)
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

export const http = {
    getCategoryList,
    getCategory,
    getBook,
    getAuthor
}