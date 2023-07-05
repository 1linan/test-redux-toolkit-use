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
  //获取user切片,使用user中的state中的数据：user.name
  const { user } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{user.name}</p>
      <button onClick={() => dispatch(setName("山海"))}>设置name</button>
      <button onClick={() => dispatch(getUserInfos(person) as any)}>
        异步获取name,并设置name
      </button>
    </div>
  );
}
