import axios from './axios.config.js'
const newsItem = {
    getNewsItemByChildId(currentChildId){
        return axios.get('/newsItem/getNewsItem',{
            params:{
                childId:currentChildId
            }
        })
    },
    getNewsItemByParentId(currentParentId){
        return axios.get('/newsItem/getNewsItemByParentId',{
            params:{
                parentId:currentParentId
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