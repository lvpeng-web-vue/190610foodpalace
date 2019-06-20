// 通过mutations间接更新state的多个方法的对象
import { reqAddress, reqCategorys, reqShops,reqUser, reqLogout } from '../api/index'
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS,RECEIVE_USER_INFO, RESET_USER_INFO } from './mutation-types'
export default {
    // 异步获取地址
    async getAddress({ commit, state }) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        commit(RECEIVE_ADDRESS, { address: result.data })
    },
    // 异步获取分类列表
    async getCategorys({ commit }) {
        const result = await reqCategorys()
        commit(RECEIVE_CATEGORYS, { categorys: result.data })
    },
    // 异步获取商家列表
    async getShops({ commit, state }) {
        const { latitude, longitude } = state
        const result = await reqShops({ latitude, longitude })
        commit(RECEIVE_SHOPS, { shops: result.data })
    },
    // 先从前端发送请求获取,同步记录用户信息
    recordUser({commit},userInfo){
        commit(RECEIVE_USER_INFO,{userInfo})
    },
    // 异步获取用户信息
    async getUserInfo({commit}){
        const result=await reqUser()
            if(result.code===0){
                const userInfo=result.data
                commit(RECEIVE_USER_INFO,{userInfo})
            }
        
    },
    // 异步登出
    async logout({commit}){
        const result =await reqLogout()
        if(result.code===0){
            commit(RESET_USER_INFO)
        }
    }
}