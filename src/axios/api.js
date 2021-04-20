/**
 * api接口统一管理
 */
import { get, post, $delete, put, newPost, newPut } from './http'

export const getTopMenuList = data => get('/1.1/classes/topMenuList', data)
export const getLeftMenuList = data => get('/1.1/classes/leftMenuList', data)
export const getLeftMenuList1 = data => post('/1.1/classes/leftMenuList', data)
export const getTopMenuList2 = data => $delete('/1.1/classes/topMenuList', data)
export const getTopMenuList3 = data => put('/1.1/classes/topMenuList', data)
export const getTopMenuList4 = data => newPost('/1.1/classes/topMenuList', data)
export const getTopMenuList5 = data => newPut('/1.1/classes/topMenuList', data)
