import React, {useReducer} from 'react'

const reducer = (state, action) => {
    console.log(state,action);
    if(action.type === "inc"){
        return {count: state.count + 1}
    }
    else if(action.type === "dec"){
        return {count: state.count - 1}
    }
    else{
        throw new Error("Unsupported action type");
    }
};

const App = () => {
    // const [count,setCount] = useState(0);
    // console.log(count);
    // console.log(setCount);
    //initialState is count : 0
    //this dispatch is triggering action method
    const [state,dispatch] = useReducer(reducer,{count:0});
  return (
    <div>
       <h1>{state.count}</h1>
       
       <button onClick={()=> {dispatch({type: "inc"})}}>+</button>
       <button onClick={()=>{dispatch({type: "dec"})}}>-</button>
    </div>
  )
}
export default App