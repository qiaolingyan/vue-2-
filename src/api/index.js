import ajax from './ajax'

const base = '/api'

export const reqPosition = (latitude,longitude) => ajax(base + `/position/${latitude},${longitude}`)

export const reqCategories = () => ajax(base + '/index_category')

export const reqShops = (latitude,longitude) => ajax(base + '/shops',{latitude,longitude})

export const reqSearchShops = ({keyword,geohash}) => ajax(base + '/search_shops',{keyword,geohash})

export const reqLoginPwd = ({name,pwd,captcha}) => ajax(base + '/login_pwd',{name,pwd,captcha},'POST')

export const reqSendCode = (phone) => ajax(base + '/sendcode',{phone})

export const reqLoginSms = (phone,code) => ajax(base + '/login_sms',{phone,code},'POST')

export const reqUserinfo = () => ajax(base + '/userinfo')

export const reqCaptcha = () => ajax(base + '/captcha')

export const reqLogout = () => ajax(base + '/logout')




