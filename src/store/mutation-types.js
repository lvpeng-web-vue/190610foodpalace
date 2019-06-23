// 包含n个mutation的type的名称常量 
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的
//  mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型
//   (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际
//   进行状态更改的地方，并且它会接受 state 作为第一个参数：
export const RECEIVE_ADDRESS='receive_address' //接收地址
export const RECEIVE_CATEGORYS='receive_categorys' //接受分类数组
export const RECEIVE_SHOPS='receive_shops' //接收商家数组
export const RECEIVE_USER_INFO='receive_user_info' //接收商家数组
export const RESET_USER_INFO='reset_user_info' //重置用户信息
export const RECEIVE_GOODS = 'receive_goods' // 接收商品数组
export const RECEIVE_RATINGS = 'receive_ratings' // 接收商家评价数组
export const RECEIVE_INFO = 'receive_info' // 接收商家信息
export const INCREMENT_FOOD_COUNT = 'increment_food_count' // 增加 food 的 count
export const DECREMENT_FOOD_COUNT = 'decrement_food_count' // 减少 food 的 count