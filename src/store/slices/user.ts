import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//引入异步操作
import { getUserInfos } from '../actions/userAsync';

interface UserState {
  name: string;
  age: number;
}
const initialState: UserState = {
  name: '纸崩',
  age: 20
}

/**
 * 创建slice,在rtk里面叫切片,相当于vuex里面的模块
 * 使用createSlice方法创建一个slice。每一个slice里面包含了reduce和actions
 * 可以实现模块化的封装。so,与user相关的操作都在该slice(切片)中完成
 */
export const userSlice = createSlice({
  name: 'user',//命名空间,可以自动把每一个action进行独立,解决了action的type出现同名的文件,在使用的时候会默认使用name/actionName
  initialState,//state数据的初始值

  //reducers里面包裹的是同步方法
  reducers: {
    //定义的action,由于内置了immutable插件,可以直接使用赋值的方式进行数据的改变,
    //不需要每一次都返回一个新的state数据
    setName(state, action: PayloadAction<string>) {
      //第一个参数 state 为当前state中的数据
      //第二个参数action为{payload,type:'user/setName'}
      //payload 为传过来的新参数
      // type 为action触发的类型
      state.name = action.payload
    },
    setAge(state, action: PayloadAction<number>) {
      state.age = action.payload
    }
  },
  //extraReducers 中放的是异步方法,
  /**在这里我们可以监听创建好的异步action,此处有三个取值是比较常用的
   *   1.fulfilled 成功之后需要做的操作
   *   2.pending 加载时需要做的操作
   *   3.rejected 失败后需要做什么处理
  */
  // extraReducers: {
  //   [getUserInfos.fulfilled](state: any,action: any){
  //     state.name=action.payload;
  //   }
  // }
  extraReducers: builders => {
    builders.addCase(getUserInfos.fulfilled, (state, action) => {
      state.name = action.payload.name;
    })
  }
})

// 导出actions
export const { setName, setAge } = userSlice.actions;
export const {reducer:userReducer}=userSlice;//userSlice 的返回值时reducer


//读取切片中的数据
//const { name } = useSelector((state: RootState) => state.userReducer);
  
  /**
    console.log(useSelector((state: RootState) => state));
    {
    "userReducer": {
        "name": "山海",
        "age": 20
      }
    }
   */