import axios from './axios.config.js'
const newsItem = {
    getNewsItemByChildId(currentChildId){
        return axios.get('/newsItem/getNewsItem',{
            params:{
                childId:currentChildId
            }
        })
    },
    getNewsDetailByNewsId(newsId){
        return axios.get('/newsItem/getNewsDetail',{
            params:{
                newsId:newsId
            }
        })
    }
}

export default newsItem;