import { useState } from "react";


function Counter () {
    const [Count, setCount] = useState(0);
    
    return <button onClick={()=>setCount(Count+1)}> 
    clicked {Count} times</button>
}



export default Counter