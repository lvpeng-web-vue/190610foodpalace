// 引入ajax 函数
import ajax from "./ajax"
// 包含n个接口请求函数的模块
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)	
export const reqAddress=function(geoHash){
    return ajax('/position/${geohash}')
}
// [2、获取食品分类列表](#2获取食品分类列表)	
export const reqFoodsType=()=>ajax("/index_category")
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
export const reqShops=(longitude,latitude)=>ajax('/shops',{longitude,latitude})		
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)
export const reqShopList=(keyword,geoHash)=>ajax("/search_shops",{keyword,geoHash})		
// [5、获取一次性验证码](#5获取一次性验证码)	
export const reqOnceCaptcha=()=>ajax("/captcha")	
// [6、用户名密码登陆](#6用户名密码登陆)
export const reqLogin_psw=(name,pwd,captcha)=>ajax("/login_pwd",{name,pwd,captcha},type="POST")	
// [7、发送短信验证码](#7发送短信验证码)
export const reqPhoneIdentifyCode=(phone)=>ajax("/sendcode",{phone})
// [8、手机号验证码登陆](#8手机号验证码登陆)	
export const reqPhoneIdentifyCodeLogin=(phone,code)=>ajax("/login_sms",{phone,code},type="POST")	
// [9、根据会话获取用户信息](#9根据会话获取用户信息)	
export const reqUserInfo=()=>ajax("/userinfo")
// [10、用户登出](#10用户登出)	
export const reqLogout=()=>ajax("/logout")
			
