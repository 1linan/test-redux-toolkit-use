import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/user';


//configureStore挂载每一个modules
const store = configureStore({
  reducer: {
    userReducer//user module
  },
  devTools: true
})

//定义 ts types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


//导出store
export default store;