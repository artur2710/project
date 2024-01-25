import {useState, useEffect, useRef} from 'react';
function LastCounter(){
    const[count, setCount] = useState(0);
    const latestCount = useRef(count);

    useEffect(()=>{
        latestCount.current = count;
        setTimeout(()=>{
          console.log(`You clicked ${latestCount.current} times`);
        },3000);
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>
                Click me
            </button>
        </div>
    );
}

export default LastCounter