import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        currentParentId:0,
        currentChildrenId:0
    },
    mutations:{
        setCurrentParentId(state,newParentId){
            state.currentParentId = newParentId
        },
        setCurrentChildrenId(state,newChildId){
            state.currentChildrenId = newChildId
        },
    },
    plugins: [createPersistedState()]
})

export default store;