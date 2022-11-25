//为了可以后期去更好的维护自己的代码，这边建议可以吧异步的操作放到action中专门来处理
import { applyMiddleware, createAsyncThunk } from '@reduxjs/toolkit'


interface UserInfo {
  name: string,
  age: number
}
/**
 * createAsyncThunk接收三个参数：
 *  type 代表这一个异步请求生命周期的字符串
 *       例如：'user/getUserInfo'的type参数会生成如下的action types
 *            · pending : 'user/getUserInfo/pending'
 *            · fulfilled : 'user/getUserInfo/fulfilled'
 *            · rejected : 'user/getUserInfo/rejected'
 * payloadCreator 一个回调函数
 */
export const getUserInfos = createAsyncThunk('user/getUserInfo', async (data: UserInfo, thunkAPI): Promise<UserInfo> => {
  /**
   *thunkAPI 是一个对象,其中包含 通常传递给Redux thunk 函数的所有参数,以及其它选项
   * dispatch: Redux store 的 dispatch 方法
   * getState: Redux store 的 getState 方法
   * ...
   */
  console.log(data, 'data');
  console.log(thunkAPI, 'thunkAPI');

  const res: UserInfo = await new Promise((resolve, reject) => {
    resolve({
      name: '空',
      age: 17
    })
  }) //这边访你需要调取的接口
  return res;
})

/**注文：
  在此单独对createAsyncThunk这个方法进行讲解
  createAsyncThunk这个中间件是用来处理异步操作的（副作用）
  他有两个参数：
  1、第一个参数传入的是一个字符串，这个地方类似取个名字
  2、第二个参数是你要处理的异步，比如调接口的方法（你封装好的api）
  这边写好相应的操作之后可以在相应的slice文件中去应用封装好的异步处理程序，slice中会监听这个异步
 */