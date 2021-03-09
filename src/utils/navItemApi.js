import axios from './axios.config.js'
const navItem = {
    //获取所有顶级栏目
    getAllParentsNavItem() {
        return new Promise((resolve, reject) => {
            axios.get('/navItem/getParentsItem').then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            })
        });
    },
    //根据顶级栏目查询子级栏目
    getChildNavItemByParentNavItemClassId(ParentNavItemClassId) {
        return axios.get('/navItem/getChildItem', {
                params: {
                    parentId: ParentNavItemClassId
                }
            })
    },
    //查询ObjectID
    getParentIDByName(name) {
        return axios.get('/navItem/getParentIDByName', {
            params: {
                name: name
            }
        })
    },
    getUrlMessageByClassId(classId){
        return axios.get('/navItem/getUrlMessageByClassId', {
            params: {
                classId: classId
            }
        })
    }

}
export default navItem;