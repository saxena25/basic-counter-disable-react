import {useState} from 'react';
import './Counter.css'

function Counter() {
    let[count,setCount] = useState(0);

    const handleDec = () =>{
        if(count > 0){
            setCount((prevCount)=>prevCount - 1)
        }
    }
    return ( 
        <>
            <div className='counter'>
                <button onClick={handleDec} disabled={count === 0} >-</button>
                <h2>{count}</h2>
                <button onClick={()=>setCount((prevCount)=>prevCount + 1)}>+</button>
            </div>
        </>
     );
}

export default Counter;