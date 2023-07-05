//在组件内部,使用useState和useDispatch可以直接获取state数据与dispatch方法
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
//引入action
import { setName } from "../store/slices/user";
//引入异步action
import { getUserInfos } from "../store/actions/userAsync";

const person = {
  name: "aa",
  age: 19,
};
export function Home() {
  //切片useSlice的返回值时reducer,从reducer中读取userSlice module 中的数据
  const { name } = useSelector((state: RootState) => state.userReducer);

  /**
    console.log(useSelector((state: RootState) => state));
    {
    "userReducer": {
        "name": "山海",
        "age": 20
      }
    }
   */
  const dispatch = useDispatch();

  return (
    <div>
      <p>{name}</p>
      <button onClick={() => dispatch(setName("山海"))}>设置name</button>
      <button onClick={() => dispatch(getUserInfos(person) as any)}>
        异步获取name,并设置name
      </button>
    </div>
  );
}
